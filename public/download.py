"""
MARC Blog Image Downloader
==========================
Scrapes each blog post on marcglocal.com, finds the featured image,
and downloads it to your local: public/images/blog/

Then prints the updated image paths ready to paste into blogData.js

Requirements:
    pip install requests beautifulsoup4

Usage:
    1. Copy this file to the ROOT of your Next.js project (marcfinal-main/)
    2. Run: python download_marc_blog_images.py
    3. Images will be saved to: public/images/blog/
    4. Copy the printed image paths into your blogData.js
"""

import requests
from bs4 import BeautifulSoup
import os
import time
import json
from urllib.parse import urlparse

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/120.0.0.0 Safari/537.36"
    )
}

# ── Output folder (relative to your Next.js project root) ────────────────────
OUTPUT_DIR = os.path.join("public", "images", "blog")

# ── All 10 blog entries ───────────────────────────────────────────────────────
BLOGS = [
    {
        "id": 1,
        "slug": "financial-model-validation-2025",
        "url": "https://www.marcglocal.com/financial-model-validation-2025/",
        # Already known — will still verify via scrape
        "known_image": "https://www.marcglocal.com/wp-content/uploads/2025/12/financial-model-validation-1170x684.png",
    },
    {
        "id": 2,
        "slug": "sme-ipo-preparation-guide-3-year-roadmap",
        "url": "https://www.marcglocal.com/sme-ipo-preparation-guide-3-year-roadmap/",
    },
    {
        "id": 3,
        "slug": "strong-mis-for-profitability-and-sustainable-growth",
        "url": "https://www.marcglocal.com/strong-mis-for-profitability-and-sustainable-growth/",
    },
    {
        "id": 4,
        "slug": "competitive-benchmarking-with-market-research",
        "url": "https://www.marcglocal.com/competitive-benchmarking-with-market-research/",
    },
    {
        "id": 5,
        "slug": "year-end-internal-audit-profit-and-loss-analysis",
        "url": "https://www.marcglocal.com/year-end-internal-audit-profit-and-loss-analysis/",
    },
    {
        "id": 6,
        "slug": "future-of-due-diligence-services-2025",
        "url": "https://www.marcglocal.com/future-of-due-diligence-services-2025/",
    },
    {
        "id": 7,
        "slug": "peak-season-management-hospitality-consulting",
        "url": "https://www.marcglocal.com/peak-season-management-hospitality-consulting/",
    },
    {
        "id": 8,
        "slug": "5-reasons-why-your-business-needs-a-process-audit",
        "url": "https://www.marcglocal.com/5-reasons-why-your-business-needs-a-process-audit/",
    },
    {
        "id": 9,
        "slug": "why-market-research-drives-success",
        "url": "https://www.marcglocal.com/why-market-research-drives-success/",
    },
    {
        "id": 10,
        "slug": "what-makes-a-great-cim",
        "url": "https://www.marcglocal.com/what-makes-a-great-cim/",
    },
]


def get_featured_image_url(blog: dict) -> str | None:
    """Scrape the blog page and return the featured image URL."""

    # Use known image if provided (skip scraping)
    if blog.get("known_image"):
        print(f"  ℹ️   Using known image URL")
        return blog["known_image"]

    try:
        resp = requests.get(blog["url"], headers=HEADERS, timeout=15)
        resp.raise_for_status()
    except Exception as e:
        print(f"  ❌  Failed to fetch page: {e}")
        return None

    soup = BeautifulSoup(resp.text, "html.parser")

    # Strategy 1: Open Graph image (most reliable on WordPress)
    og = soup.find("meta", property="og:image")
    if og and og.get("content"):
        return og["content"].strip()

    # Strategy 2: Twitter card image
    tw = soup.find("meta", attrs={"name": "twitter:image"})
    if tw and tw.get("content"):
        return tw["content"].strip()

    # Strategy 3: First wp-content/uploads image in article body
    for img in soup.find_all("img", src=True):
        src = img.get("src") or img.get("data-src") or img.get("data-lazy-src", "")
        if "wp-content/uploads" in str(src):
            return str(src).strip()

    return None


def download_image(image_url: str, save_path: str) -> bool:
    """Download image from URL and save to save_path. Returns True on success."""
    try:
        resp = requests.get(image_url, headers=HEADERS, timeout=20, stream=True)
        resp.raise_for_status()

        with open(save_path, "wb") as f:
            for chunk in resp.iter_content(chunk_size=8192):
                f.write(chunk)
        return True
    except Exception as e:
        print(f"  ❌  Download failed: {e}")
        return False


def get_extension(url: str) -> str:
    """Extract file extension from URL, default to .jpg"""
    path = urlparse(url).path
    ext = os.path.splitext(path)[1].lower()
    return ext if ext in (".jpg", ".jpeg", ".png", ".webp", ".gif") else ".jpg"


def main():
    print("=" * 60)
    print("MARC Blog Image Downloader")
    print("=" * 60)

    # Create output directory
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    print(f"\n📁 Saving images to: {os.path.abspath(OUTPUT_DIR)}\n")

    results = {}

    for blog in BLOGS:
        print(f"\n[{blog['id']}] {blog['slug']}")
        print(f"  🌐  Fetching: {blog['url']}")

        # Step 1: Get the image URL
        image_url = get_featured_image_url(blog)

        if not image_url:
            print(f"  ⚠️   Could not find image — skipping")
            results[blog["id"]] = {
                "slug": blog["slug"],
                "local_path": "/images/blog/placeholder.png",
                "status": "not_found",
            }
            continue

        print(f"  🖼️   Image URL: {image_url}")

        # Step 2: Build local filename using slug + original extension
        ext = get_extension(image_url)
        filename = f"{blog['slug']}{ext}"
        save_path = os.path.join(OUTPUT_DIR, filename)
        local_path = f"/images/blog/{filename}"  # Next.js public path

        # Step 3: Download
        if os.path.exists(save_path):
            print(f"  ✅  Already exists — skipping download")
            results[blog["id"]] = {
                "slug": blog["slug"],
                "local_path": local_path,
                "source_url": image_url,
                "status": "cached",
            }
        else:
            print(f"  ⬇️   Downloading...")
            success = download_image(image_url, save_path)
            if success:
                size_kb = os.path.getsize(save_path) // 1024
                print(f"  ✅  Saved: {filename} ({size_kb} KB)")
                results[blog["id"]] = {
                    "slug": blog["slug"],
                    "local_path": local_path,
                    "source_url": image_url,
                    "status": "downloaded",
                }
            else:
                results[blog["id"]] = {
                    "slug": blog["slug"],
                    "local_path": "/images/blog/placeholder.png",
                    "status": "failed",
                }

        time.sleep(1)  # 1 second delay between requests

    # ── Print ready-to-paste blogData.js image fields ─────────────────────────
    print("\n\n" + "=" * 60)
    print("✅  DONE! Paste these image paths into your blogData.js:")
    print("=" * 60 + "\n")

    for blog_id, data in results.items():
        status_icon = "✅" if data["status"] in ("downloaded", "cached") else "⚠️ "
        print(f"// id: {blog_id}  ({data['slug']})  {status_icon}")
        print(f"image: '{data['local_path']}',")
        print()

    # ── Save JSON summary ──────────────────────────────────────────────────────
    summary_path = "marc_blog_images_result.json"
    with open(summary_path, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
    print(f"📄 Full summary saved to: {summary_path}")

    # ── Count stats ────────────────────────────────────────────────────────────
    downloaded = sum(1 for v in results.values() if v["status"] == "downloaded")
    cached = sum(1 for v in results.values() if v["status"] == "cached")
    failed = sum(1 for v in results.values() if v["status"] in ("failed", "not_found"))

    print(f"\n📊 Summary: {downloaded} downloaded | {cached} cached | {failed} failed")
    print(f"\n🚀 Next step: update the `image` field in your blogData.js")
    print(f"   using the paths printed above.\n")


if __name__ == "__main__":
    main()