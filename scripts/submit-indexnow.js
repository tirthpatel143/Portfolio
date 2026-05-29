const fs = require('fs');
const path = require('path');

// Configuration
const HOST = 'tirthpatelportfolio08.vercel.app';
const KEY = 'f6904ef245e34771ac5f2526e838e4a9';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../public/sitemap.xml');

async function submitIndexNow() {
  console.log('🚀 Starting IndexNow submission...');
  
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.error(`❌ Sitemap file not found at: ${SITEMAP_PATH}`);
    process.exit(1);
  }

  // 1. Read sitemap.xml
  const sitemapContent = fs.readFileSync(SITEMAP_PATH, 'utf8');
  
  // 2. Parse and clean URLs
  const urlRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  
  while ((match = urlRegex.exec(sitemapContent)) !== null) {
    const rawUrl = match[1].trim();
    // Strip hash fragment
    const cleanUrl = rawUrl.split('#')[0];
    if (cleanUrl) {
      urls.push(cleanUrl);
    }
  }

  // Deduplicate URLs
  const uniqueUrls = [...new Set(urls)];

  if (uniqueUrls.length === 0) {
    console.warn('⚠️ No URLs found in sitemap.xml.');
    return;
  }

  console.log(`\n📋 Found ${uniqueUrls.length} unique page URL(s) to index:`);
  uniqueUrls.forEach(url => console.log(`  - ${url}`));

  // 3. Construct IndexNow Payload
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: uniqueUrls
  };

  // 4. Send request to IndexNow API (Bing is the main endpoint)
  // IndexNow API endpoints (we can use api.indexnow.org which distributes it to participating engines)
  const indexNowEndpoint = 'https://api.indexnow.org/indexnow';

  console.log(`\n📡 Sending payload to IndexNow API (${indexNowEndpoint})...`);

  try {
    const response = await fetch(indexNowEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(payload)
    });

    console.log(`\n📊 Response Code: ${response.status} ${response.statusText}`);
    
    if (response.ok) {
      console.log('✅ Success! IndexNow accepted your URLs.');
      console.log('👉 Search engines (Bing, Yandex, etc.) will crawl and index your site shortly.');
    } else {
      const text = await response.text();
      console.error(`❌ Error submitting URLs to IndexNow: ${text}`);
      
      console.log('\n💡 Common troubleshooting tips:');
      console.log('1. Ensure your site is deployed and the key file is accessible at the target URL:');
      console.log(`   ${KEY_LOCATION}`);
      console.log('2. Double-check that your Host matches the deployed domain name.');
    }
  } catch (error) {
    console.error('❌ Network error sending IndexNow request:', error);
  }
}

submitIndexNow();
