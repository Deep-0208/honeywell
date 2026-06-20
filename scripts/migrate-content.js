const fs = require('fs');
const path = require('path');

const INVENTORY_PATH = path.join(__dirname, '../../legacy-website/SITE-INVENTORY.txt');
const CONTENT_DIR = path.join(__dirname, '../content');

// Helper to create directory if it doesn't exist
function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function parseInventory(inventoryText) {
  const pages = [];
  const blocks = inventoryText.split('============================================================');
  
  for (const block of blocks) {
    if (!block.trim()) continue;
    
    const lines = block.trim().split('\n');
    const pageData = {};
    
    for (const line of lines) {
      if (line.startsWith('PAGE:')) pageData.slug = line.replace('PAGE:', '').trim();
      if (line.startsWith('TITLE:')) pageData.title = line.replace('TITLE:', '').trim();
      if (line.startsWith('META DESC:')) pageData.metaDesc = line.replace('META DESC:', '').trim();
      if (line.startsWith('H1:')) pageData.h1 = line.replace('H1:', '').trim();
    }
    
    if (pageData.slug) {
      pages.push(pageData);
    }
  }
  
  return pages;
}

function generateMdxFrontmatter(pageData) {
  return `---
title: "${pageData.title || ''}"
slug: "${pageData.slug}"
seo:
  title: "${pageData.title || ''}"
  description: "${pageData.metaDesc || ''}"
---

# ${pageData.h1 !== 'N/A' ? pageData.h1 : pageData.title}

*Content for ${pageData.slug} goes here. Extracted from legacy site.*
`;
}

function main() {
  if (!fs.existsSync(INVENTORY_PATH)) {
    console.error(`Inventory file not found at ${INVENTORY_PATH}`);
    process.exit(1);
  }

  const inventoryText = fs.readFileSync(INVENTORY_PATH, 'utf8');
  const pages = parseInventory(inventoryText);
  
  console.log(`Found ${pages.length} pages in inventory.`);
  
  ensureDir(CONTENT_DIR);
  ensureDir(path.join(CONTENT_DIR, 'legacy-imports'));
  
  let count = 0;
  for (const page of pages) {
    // For now, put them in a generic folder. Later they can be sorted into the proper silos.
    const filePath = path.join(CONTENT_DIR, 'legacy-imports', `${page.slug}.mdx`);
    const content = generateMdxFrontmatter(page);
    
    fs.writeFileSync(filePath, content, 'utf8');
    count++;
  }
  
  console.log(`Successfully created ${count} MDX stubs in website/content/legacy-imports/`);
}

main();
