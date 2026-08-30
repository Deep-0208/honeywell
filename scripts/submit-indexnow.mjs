/**
 * IndexNow Batch URL Submission Script
 * Submits all sitemap URLs to Bing and IndexNow protocol engines in real-time.
 */

const KEY = '7b83d95e0c6a48f2913e5a7b9c1d3f5e';
const HOST = 'honeywellhydraulics.in';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function getUrls() {
  try {
    const res = await fetch(`https://${HOST}/sitemap.xml`);
    const xml = await res.text();
    const matches = xml.match(/<loc>(.*?)<\/loc>/g) || [];
    return matches.map(m => m.replace('<loc>', '').replace('</loc>', ''));
  } catch (err) {
    console.error('Failed to fetch sitemap:', err.message);
    return [`https://${HOST}/`];
  }
}

async function submitIndexNow() {
  const urlList = await getUrls();
  console.log(`Found ${urlList.length} URLs to submit to IndexNow.`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`Submitting to ${endpoint}...`);
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`Response from ${endpoint}: Status ${res.status} (${res.statusText || 'OK'})`);
    } catch (err) {
      console.error(`Error submitting to ${endpoint}:`, err.message);
    }
  }
}

submitIndexNow();
