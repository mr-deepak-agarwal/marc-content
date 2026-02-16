#!/usr/bin/env python3
"""
MARC Insights Complete PDF Downloader
Fetches all PDF download links and downloads them
"""

import json
import os
import requests
from urllib.parse import urlparse, urljoin
from pathlib import Path
from bs4 import BeautifulSoup
import time

# Complete mapping of all reports with their actual PDF URLs from the website
# Combined from original script + JavaScript download links
pdf_reports = [
    # ===== ORIGINAL REPORTS (Previously Downloaded) =====
    {"title": "Restaurant Industry Overview 2024", "url": "https://marcglocal.com/wp-content/uploads/2024/03/MARC-Insights-Restaurant-Industry-Overview-2024.pdf", "year": 2024},
    {"title": "Retail Industry Overview 2024", "url": "https://marcglocal.com/wp-content/uploads/2024/04/MARC-Retail-Sector-Report-2024-1.pdf", "year": 2024},
    {"title": "Hospitality Industry Overview 2024", "url": "https://marcglocal.com/wp-content/uploads/2024/03/MARC-Hospitality-Sector-2024.pdf", "year": 2024},
    {"title": "Quick Commerce Industry Overview", "url": "https://marcglocal.com/wp-content/uploads/2024/03/The-Rise-of-Quick-Commerce-in-India.pdf", "year": 2024},
    {"title": "Odisha: A Land to Explore and Invest", "url": "https://marcglocal.com/wp-content/uploads/2023/08/Odisha-a-land-to-explore-and-Invest.pdf", "year": 2023},
    {"title": "Education Industry Overview 2023", "url": "https://marcglocal.com/wp-content/uploads/2023/08/MARC-Insights-Education-Industry-Overview.pdf", "year": 2023},
    {"title": "Online/Offline Gambling & Gaming", "url": "https://marcglocal.com/wp-content/uploads/2023/10/Industry-report-Gambling-and-Gaming.pdf", "year": 2023},
    {"title": "Rise of Family Offices in India", "url": "https://marcglocal.com/wp-content/uploads/2023/04/Rise-Of-Family-Offices-In-India.pdf", "year": 2023},
    {"title": "Manufacturing Industry Overview 2023", "url": "https://marcglocal.com/wp-content/uploads/2023/07/Manufacturing-Industry-Overview.pdf", "year": 2023},
    {"title": "Sustainability in Supply Chains", "url": "https://marcglocal.com/wp-content/uploads/2022/08/Sustainable-Supply-Chain-.pdf", "year": 2022},
    {"title": "Indian Waste Management Industry 2023", "url": "https://marcglocal.com/wp-content/uploads/2023/08/Indian-Waste-Management-Industry-2023.pdf", "year": 2023},
    {"title": "Top 5 Business Ideas for 2023", "url": "https://marcglocal.com/wp-content/uploads/2023/01/Top-5-Business-Ideas-for-2023.pdf", "year": 2023},
    {"title": "Union Budget 2023", "url": "https://marcglocal.com/wp-content/uploads/2023/02/Uninon-Budget-2023-what-MSMEs-should-lookout-for.pdf", "year": 2023},
    {"title": "Indian Pharma Sector Report 2021", "url": "https://marcglocal.com/wp-content/uploads/2022/08/Indian-Pharma-Industry-Way-Forward.pdf", "year": 2021},
    {"title": "UK Fintech Industry Report", "url": "https://marcglocal.com/wp-content/uploads/2022/06/UK-Fintech-Industry.pdf", "year": 2022},
    {"title": "US Educational Sector Report 2022", "url": "https://marcglocal.com/wp-content/uploads/2022/06/Educational-Sector-US-1.pdf", "year": 2022},
    {"title": "Indian Gaming Industry", "url": "https://marcglocal.com/wp-content/uploads/2022/08/Indian-Gaming-Industry.pdf", "year": 2022},
    {"title": "FMCG Industry Overview 2024", "url": "https://marcglocal.com/wp-content/uploads/2024/03/MARC-Insights_FMCG-Industry-Overview-2024-1.pdf", "year": 2024},
    {"title": "US Hospitality Sector Report 2022", "url": "https://marcglocal.com/wp-content/uploads/2022/06/US-Hospitality-sector.pdf", "year": 2022},
    {"title": "Future of Home Delivery in India", "url": "https://marcglocal.com/wp-content/uploads/2022/07/Future-of-home-delivery-in-india.pdf", "year": 2022},
    {"title": "India's Textile Industry Overview", "url": "https://marcglocal.com/wp-content/uploads/2024/03/Indias-Textile-Sector-Insights.pdf", "year": 2024},
    {"title": "The Organic Food Market Report 2021", "url": "https://marcglocal.com/wp-content/uploads/2022/08/Indian-Organic-Food-Industry.pdf", "year": 2021},
    {"title": "Technologies Changing the Food Industry", "url": "https://marcglocal.com/wp-content/uploads/2023/01/Technologies-that-will-change-the-face-of-the-Food-Industry.pdf", "year": 2023},
    {"title": "Alcohol Industry in India", "url": "https://marcglocal.com/wp-content/uploads/2023/11/MARC-Insights-Alcoholic-beverages-Industry-1.pdf", "year": 2023},
    {"title": "Renewable Energy Industry Overview", "url": "https://marcglocal.com/wp-content/uploads/2023/09/MARC-Insights-Renewables-Industry-Overview.pdf", "year": 2023},
    
    # ===== NEW REPORTS FROM JAVASCRIPT (Form Download Links) =====
    # 2026 Reports
    {"title": "Overview of the Condiments Market", "url": "https://www.marcglocal.com/wp-content/uploads/2026/02/Overview-of-the-Condiments-Market.pdf", "year": 2026},
    {"title": "MARC MSME Overview 2026", "url": "https://www.marcglocal.com/wp-content/uploads/2026/02/MARC-MSME-Report-2026.pdf", "year": 2026},
    {"title": "India Life Sciences Landscape", "url": "https://www.marcglocal.com/wp-content/uploads/2026/02/India-Life-Sciences-Landscape-2026.pdf", "year": 2026},
    
    # 2025 Reports
    {"title": "Indian Nutraceuticals and OTC Pharmaceutical Market Entry", "url": "https://www.marcglocal.com/wp-content/uploads/2025/12/Nutraceutical-and-OTC-Market.pdf", "year": 2025},
    {"title": "Digital Healthcare Report", "url": "https://www.marcglocal.com/wp-content/uploads/2025/12/Digital-Healthcare-Report.pdf", "year": 2025},
    {"title": "GST 2.0: Key Reforms and Sectoral Impact", "url": "https://www.marcglocal.com/wp-content/uploads/2025/12/GST-2.0-Key-Reforms-and-Sectoral-Impact.pdf", "year": 2025},
    {"title": "Contract Manufacturing in India", "url": "https://www.marcglocal.com/wp-content/uploads/2025/12/Contract-Manufacturing-in-India-Final-1.pdf", "year": 2025},
    {"title": "Rise of Experiential Dining", "url": "https://www.marcglocal.com/wp-content/uploads/2025/12/Rise-of-Experiential-Dining-Report-2025.pdf", "year": 2025},
    {"title": "Rise of Luxury Hospitality in Tier-2 Cities", "url": "https://www.marcglocal.com/wp-content/uploads/2025/10/rise-of-luxury-hospitality-in-tier-2-cities.pdf", "year": 2025},
    {"title": "Growth of Co-working Spaces in Tier-2 Cities in India", "url": "https://www.marcglocal.com/wp-content/uploads/2025/10/growth-of-co-working-spaces-in-tier-2-cities-in-india.pdf", "year": 2025},
    {"title": "Indigo Case Study Report", "url": "https://www.marcglocal.com/wp-content/uploads/2025/10/indigo-case-study-report-updated.pdf", "year": 2025},
    {"title": "Manufacturing Industry Overview", "url": "https://marcglocal.com/wp-content/uploads/2025/06/Manufacturing-Industry-Overview.pdf", "year": 2025},
    {"title": "FMCG Industry Overview 2025", "url": "https://marcglocal.com/wp-content/uploads/2025/07/FMCG-Industry-Overview-1.pdf", "year": 2025},
    {"title": "Impact of Q-commerce on FMCG Sales in India", "url": "https://marcglocal.com/wp-content/uploads/2025/07/Impact-of-Q-commerce-on-FMCG-sales.pdf", "year": 2025},
    {"title": "Maha Kumbh 2025", "url": "https://marcglocal.com/wp-content/uploads/2025/06/MARC-Insights-Maha-kumbh-2025.pdf", "year": 2025},
    {"title": "India's Logistics Market Analysis", "url": "https://marcglocal.com/wp-content/uploads/2025/07/Indian-Logistics-Report.pdf", "year": 2025},
    {"title": "FDI: Fuelling India's Growth and Development", "url": "https://marcglocal.com/wp-content/uploads/2025/06/FDI-Fuelling-Indias-Growth-and-Development.pdf", "year": 2025},
    {"title": "M&A Tracker 2024", "url": "https://marcglocal.com/wp-content/uploads/2025/02/MARC-Insights_MA-Tracker-2024.pdf", "year": 2025},
    {"title": "Ghost Kitchen Industry", "url": "https://marcglocal.com/wp-content/uploads/2025/06/Ghost-kitchen-Industry-Report.pdf", "year": 2025},
    {"title": "Hospitality Industry Overview 2025", "url": "https://marcglocal.com/wp-content/uploads/2025/02/MARC-Hospitality-Sector-Report-2025.pdf", "year": 2025},
    {"title": "Telangana MSME Policy 2024: Life Sciences & Pharma", "url": "https://marcglocal.com/wp-content/uploads/2025/02/Telangana-MSME-policy-3.pdf", "year": 2025},
    {"title": "Understanding USA Tariffs and their Impact on India", "url": "https://marcglocal.com/wp-content/uploads/2025/06/MARC-Insights-Understanding-U.S.-Tariffs-and-Their-Impact-on-India.pdf", "year": 2025},
    {"title": "The Rubber Industry in Kerala", "url": "https://marcglocal.com/wp-content/uploads/2025/02/Keralas-Rubber-Industry-Report-1.pdf", "year": 2025},
    {"title": "Hyderabad: A Rising Powerhouse in India's Growth Story", "url": "https://marcglocal.com/wp-content/uploads/2025/06/Hyderabad-A-Rising-Powerhouse-in-Indias-Growth-Story.pdf", "year": 2025},
    {"title": "Healthcare Sector Competencies", "url": "https://marcglocal.com/wp-content/uploads/2025/03/MARC-Healthcare-Sector-Report-2025.pdf", "year": 2025},
    {"title": "Pharma Industry in Telangana", "url": "https://marcglocal.com/wp-content/uploads/2025/01/Pharma-Industry-in-Telangana.pdf", "year": 2025},
    {"title": "Tamil Nadu's EV Policy", "url": "https://marcglocal.com/wp-content/uploads/2025/02/Tamil-Nadu-EV-Policy-Report-Final-1.pdf", "year": 2025},
    {"title": "IT and Startup Ecosystem in Mysuru", "url": "https://marcglocal.com/wp-content/uploads/2025/02/IT-Startup-Ecosystem-in-Mysore-Report-1.pdf", "year": 2025},
    
    # 2024 Reports
    {"title": "Indian Shipping and Logistics Industry", "url": "https://marcglocal.com/wp-content/uploads/2023/12/Indian-Shipping-and-Logistics-Industry.pdf", "year": 2024},
    {"title": "Electronic Manufacturing Services", "url": "https://marcglocal.com/wp-content/uploads/2024/01/MARC-EMS-Report.pdf", "year": 2024},
    {"title": "Enhancing Power Infrastructure", "url": "https://marcglocal.com/wp-content/uploads/2024/10/Enhancing-Power-Infrastructure-in-Goa.pdf", "year": 2024},
    {"title": "M&A Tracker Q2 2024", "url": "https://marcglocal.com/wp-content/uploads/2024/10/MARC-Insights_MA-Tracker-Q2-2024.pdf", "year": 2024},
    {"title": "Mergers and Acquisitions Tracker 2023", "url": "https://marcglocal.com/wp-content/uploads/2024/04/MARC-Insights_MA-Tracker-2023.pdf", "year": 2024},
    {"title": "Shaping Goa's Future: Impact of Marina Development", "url": "https://marcglocal.com/wp-content/uploads/2024/08/Shaping-Goas-Future-Impact-of-Marina-Development-1-1.pdf", "year": 2024},
    {"title": "Mopa Goa Airport", "url": "https://marcglocal.com/wp-content/uploads/2024/07/Mopa-Goa-Report-final.pdf", "year": 2024},
    {"title": "Rail Double Tracking in Goa", "url": "https://marcglocal.com/wp-content/uploads/2024/08/Railway-Double-Tracking-report.pdf", "year": 2024},
    {"title": "Climate Change and its Effect on the Indian Economy", "url": "https://marcglocal.com/wp-content/uploads/2024/03/Climate-Crisis-Rapid-Assessment-of-Industrial-Impacts-final.pdf", "year": 2024},
    {"title": "Maharashtra: Pursuit of a $1 Trillion Economy by 2028", "url": "https://marcglocal.com/wp-content/uploads/2024/08/Maharashtra-–-1-Trillion-Economy-by-FY28-Final-pdf.pdf", "year": 2024},
    {"title": "Impact of IPL on the Indian Economy", "url": "https://marcglocal.com/wp-content/uploads/2024/04/Batting-for-Growth-Impact-of-IPL-on-the-Indian-economy.pdf", "year": 2024},
    {"title": "Gujarat Textiles", "url": "https://marcglocal.com/wp-content/uploads/2024/10/Gujarat-Textiles-Short-Report-PDF-1.pdf", "year": 2024},
    {"title": "Healthcare in Dakshin Kannada", "url": "https://marcglocal.com/wp-content/uploads/2024/09/Healthcare-Dakshin-Kannada-pdf.pdf", "year": 2024},
    {"title": "Hubballi-Dharwad", "url": "https://marcglocal.com/wp-content/uploads/2024/10/MARC-Hubballi-Dharwad-Report-September-2024.pdf", "year": 2024},
    {"title": "Education Sector in Dakshina Kannada", "url": "https://marcglocal.com/wp-content/uploads/2024/09/Education-Industry-Report-Dakshina-Kannada-pdf.pdf", "year": 2024},
    {"title": "National Education Policy 2020", "url": "https://marcglocal.com/wp-content/uploads/2024/08/NEP-Report-1.pdf", "year": 2024},
    {"title": "Healthcare Industry", "url": "https://marcglocal.com/wp-content/uploads/2024/07/MARC-Healthcare-Sector-Report-2024-PDF.pdf", "year": 2024},
    {"title": "India's AYUSH Sector Overview", "url": "https://marcglocal.com/wp-content/uploads/2024/05/MARC-Insights_Exploring-Indias-AYUSH-Sector.pdf", "year": 2024},
    {"title": "India's Online Travel Agencies (OTAs)", "url": "https://marcglocal.com/wp-content/uploads/2024/04/MARC-Insights-Online-Travel-Agencies.pdf", "year": 2024},
    {"title": "China +1 Policy", "url": "https://marcglocal.com/wp-content/uploads/2024/10/China-1-w-PDF.pdf", "year": 2024},
    {"title": "Jewellery Retail Report", "url": "https://marcglocal.com/wp-content/uploads/2024/09/Jewellery-Retail-Report-PDF.pdf", "year": 2024},
]

def download_pdf(title, url, output_dir):
    """Download a PDF from URL and save to output directory"""
    try:
        # Create safe filename
        safe_title = "".join(c for c in title if c.isalnum() or c in (' ', '-', '_')).strip()
        safe_title = safe_title.replace(' ', '-')
        filename = f"{safe_title}.pdf"
        
        # Create output path
        output_path = os.path.join(output_dir, filename)
        
        # Skip if already exists
        if os.path.exists(output_path):
            print(f"✓ Already exists: {filename}")
            return True, filename
        
        # Download the PDF
        print(f"Downloading: {title}")
        response = requests.get(url, timeout=60, allow_redirects=True)
        response.raise_for_status()
        
        # Verify it's a PDF
        content_type = response.headers.get('content-type', '').lower()
        if 'pdf' not in content_type and not url.endswith('.pdf'):
            print(f"⚠ Warning: {title} - Not a PDF file (content-type: {content_type})")
            return False, None
        
        # Save the PDF
        with open(output_path, 'wb') as f:
            f.write(response.content)
        
        file_size = len(response.content) / 1024  # KB
        print(f"✓ Downloaded: {filename} ({file_size:.1f} KB)")
        return True, filename
        
    except Exception as e:
        print(f"✗ Error downloading {title}: {str(e)}")
        return False, None

def main():
    # Create output directory
    output_dir = 'downloaded_pdfs'
    Path(output_dir).mkdir(exist_ok=True)
    
    print(f"\n{'='*70}")
    print(f"MARC Insights Complete PDF Downloader")
    print(f"{'='*70}\n")
    
    # All reports now have URLs
    print(f"Total reports with URLs: {len(pdf_reports)}")
    print(f"Output directory: {output_dir}\n")
    
    # Download all PDFs
    successful = 0
    failed = 0
    downloaded_files = []
    
    print(f"{'='*70}")
    print("DOWNLOADING ALL PDFs")
    print(f"{'='*70}\n")
    
    for i, report in enumerate(pdf_reports, 1):
        print(f"[{i}/{len(pdf_reports)}]")
        success, filename = download_pdf(report['title'], report['url'], output_dir)
        if success:
            successful += 1
            if filename:
                downloaded_files.append({
                    "title": report['title'],
                    "filename": filename,
                    "url": report['url']
                })
        else:
            failed += 1
        time.sleep(0.5)  # Be nice to the server
    
    # Summary
    print(f"\n{'='*70}")
    print(f"Download Summary")
    print(f"{'='*70}")
    print(f"✓ Successfully downloaded: {successful}")
    print(f"✗ Failed: {failed}")
    print(f"Total: {len(pdf_reports)}")
    print(f"\nPDFs saved to: {os.path.abspath(output_dir)}")
    print(f"{'='*70}\n")
    
    # Create mapping file for the React component
    print("Creating PDF mapping for React component...")
    
    # Combine all reports with their local filenames
    pdf_mapping = []
    for report in pdf_reports:
        safe_title = "".join(c for c in report['title'] if c.isalnum() or c in (' ', '-', '_')).strip()
        safe_title = safe_title.replace(' ', '-')
        filename = f"{safe_title}.pdf"
        
        pdf_mapping.append({
            "title": report['title'],
            "pdfUrl": f"/pdfs/{filename}",
            "year": report.get('year', 2024)
        })
    
    with open('pdf_mapping.json', 'w') as f:
        json.dump(pdf_mapping, f, indent=2)
    print("✓ Created pdf_mapping.json")
    print(f"\n{'='*70}")
    print("ALL DONE! You now have all {len(pdf_reports)} PDF reports.")
    print(f"{'='*70}\n")

if __name__ == "__main__":
    main()