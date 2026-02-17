import requests
import os
import re
import time
import json
from urllib.parse import urlparse

# Config
WP_API_BASE  = "https://www.marcglocal.com/wp-json/wp/v2"
OUTPUT_DIR   = os.path.join("public", "images", "blog")
RESULTS_FILE = "marc_all_blog_images.json"
PER_PAGE     = 100
DELAY        = 0.5

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}


def get_extension(url):
    ext = os.path.splitext(urlparse(url).path)[1].lower()
    return ext if ext in (".jpg", ".jpeg", ".png", ".webp", ".gif") else ".jpg"


def strip_size_suffix(url):
    return re.sub(r"-\d+x\d+(\.[a-z]+)$", r"\1", url)


def fetch_json(url):
    try:
        r = requests.get(url, headers=HEADERS, timeout=20)
        r.raise_for_status()
        return r.json(), r.headers
    except Exception as e:
        print(f"  ERROR: API error: {e}")
        return None, {}


def download_image(url, path):
    try:
        r = requests.get(url, headers=HEADERS, timeout=30, stream=True)
        r.raise_for_status()
        with open(path, "wb") as f:
            for chunk in r.iter_content(8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"  ERROR: Download failed: {e}")
        return False


def collect_all_posts():
    all_posts = []
    page = 1

    print("=" * 60)
    print("Step 1: Collecting all posts via WordPress REST API")
    print("=" * 60)

    while True:
        url = f"{WP_API_BASE}/posts?per_page={PER_PAGE}&page={page}&_embed=1"
        print(f"\nFetching API page {page}: {url}")

        data, headers = fetch_json(url)

        if data is None:
            print("  Failed to fetch, stopping.")
            break

        if isinstance(data, dict) and "code" in data:
            print(f"  API returned error: {data.get('message', '')} -- done.")
            break

        if not isinstance(data, list) or len(data) == 0:
            print(f"  Empty response, done at page {page - 1}.")
            break

        print(f"  Got {len(data)} posts")

        for post in data:
            slug = post.get("slug", "")
            img_url = None

            # Method 1: _embedded featured media (most reliable)
            try:
                embedded = post.get("_embedded", {})
                featured = embedded.get("wp:featuredmedia", [{}])[0]
                media_details = featured.get("media_details", {})
                sizes = media_details.get("sizes", {})
                for size_key in ("full", "large", "medium_large", "medium", "thumbnail"):
                    if size_key in sizes:
                        img_url = sizes[size_key].get("source_url")
                        break
                if not img_url:
                    img_url = featured.get("source_url")
            except Exception:
                pass

            # Method 2: yoast og:image fallback
            if not img_url:
                try:
                    yoast = post.get("yoast_head_json", {})
                    og_images = yoast.get("og_image", [])
                    if og_images:
                        img_url = og_images[0].get("url")
                except Exception:
                    pass

            if slug and img_url:
                full_size_url = strip_size_suffix(img_url)
                all_posts.append({
                    "slug": slug,
                    "title": post.get("title", {}).get("rendered", slug),
                    "image_url": full_size_url,
                    "original_image_url": img_url,
                })
                print(f"  [{len(all_posts):>3}] {slug}")
            else:
                print(f"  SKIP (no image): {slug}")

        total_pages = int(headers.get("X-WP-TotalPages", 1))
        total_posts = int(headers.get("X-WP-Total", len(all_posts)))
        print(f"\n  Progress: {len(all_posts)} / {total_posts} posts (page {page}/{total_pages})")

        if page >= total_pages:
            print(f"  All {total_pages} API pages fetched.")
            break

        page += 1
        time.sleep(0.5)

    return all_posts


def download_all_images(posts):
    results = {}

    print(f"\n{'='*60}")
    print(f"Step 2: Downloading {len(posts)} images")
    print(f"Output: {os.path.abspath(OUTPUT_DIR)}")
    print(f"{'='*60}\n")

    os.makedirs(OUTPUT_DIR, exist_ok=True)

    for i, post in enumerate(posts, 1):
        slug       = post["slug"]
        image_url  = post["image_url"]
        ext        = get_extension(image_url)
        filename   = f"{slug}{ext}"
        save_path  = os.path.join(OUTPUT_DIR, filename)
        local_path = f"/images/blog/{filename}"

        print(f"[{i:>3}/{len(posts)}] {slug}")

        if os.path.exists(save_path) and os.path.getsize(save_path) > 1000:
            size_kb = os.path.getsize(save_path) // 1024
            print(f"  Already exists ({size_kb} KB) -- skipping")
            results[slug] = {"local_path": local_path, "source": image_url, "status": "cached"}
            continue

        print(f"  Downloading: {image_url}")
        success = download_image(image_url, save_path)

        # Fallback to original thumbnail URL if full-size fails
        if not success and image_url != post["original_image_url"]:
            print(f"  Trying original: {post['original_image_url']}")
            ext        = get_extension(post["original_image_url"])
            filename   = f"{slug}{ext}"
            save_path  = os.path.join(OUTPUT_DIR, filename)
            local_path = f"/images/blog/{filename}"
            success    = download_image(post["original_image_url"], save_path)

        if success:
            size_kb = os.path.getsize(save_path) // 1024
            print(f"  Saved: {filename} ({size_kb} KB)")
            results[slug] = {"local_path": local_path, "source": image_url, "status": "downloaded"}
        else:
            print(f"  FAILED: {slug}")
            results[slug] = {"local_path": "/images/blog/placeholder.jpg", "source": "", "status": "failed"}

        time.sleep(DELAY)

    return results


def save_and_print(results):
    with open(RESULTS_FILE, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"\nResults saved to: {RESULTS_FILE}")

    print(f"\n{'='*60}")
    print("SLUG to LOCAL IMAGE PATH MAP")
    print("Paste into your blogData.js image fields:")
    print(f"{'='*60}\n")

    for slug, data in results.items():
        ok = "OK" if data["status"] != "failed" else "FAIL"
        print(f'[{ok}]  "{slug}": "{data["local_path"]}",')

    total      = len(results)
    downloaded = sum(1 for v in results.values() if "downloaded" in v["status"])
    cached     = sum(1 for v in results.values() if v["status"] == "cached")
    failed     = sum(1 for v in results.values() if v["status"] == "failed")

    print(f"\nTOTAL: {total} | Downloaded: {downloaded} | Cached: {cached} | Failed: {failed}")
    print(f"\nDone! Images are in: {os.path.abspath(OUTPUT_DIR)}")
    print(f"Update image fields in blogData.js using the map above.\n")


def main():
    print("\n" + "=" * 60)
    print("  MARC Blog -- Full Image Downloader (WordPress REST API)")
    print("=" * 60 + "\n")

    posts = collect_all_posts()

    if not posts:
        print("\nNo posts collected. Check your internet connection.")
        return

    print(f"\nTotal posts found: {len(posts)}")
    results = download_all_images(posts)
    save_and_print(results)


if __name__ == "__main__":
    main()