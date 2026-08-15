import fs from 'fs';
import path from 'path';

const locationsDir = 'c:/Users/DELL/Desktop/Honeywell Seo/website/data/locations';
const files = fs.readdirSync(locationsDir).filter(f => f.endsWith('.ts'));

let totalReplacements = 0;

for (const file of files) {
  const filePath = path.join(locationsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  const original = content;

  content = content.replaceAll('https://www.honeywellhydraulics.com', 'https://honeywellhydraulics.in');
  content = content.replaceAll('https://honeywellhydraulics.com', 'https://honeywellhydraulics.in');
  content = content.replaceAll('http://www.honeywellhydraulics.com', 'https://honeywellhydraulics.in');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    totalReplacements++;
    console.log(`Updated: ${file}`);
  }
}

console.log(`Updated ${totalReplacements} location data files to https://honeywellhydraulics.in.`);
