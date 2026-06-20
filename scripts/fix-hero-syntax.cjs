const fs = require('fs');
const file = 'c:/Users/DELL/Desktop/Honeywell Seo/website/components/homepage/HeroSection.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace all }}}} with ">"
content = content.replace(/\}\}\}\}/g, '');
// Replace all }}} with ""
content = content.replace(/\}\}\}/g, '');

fs.writeFileSync(file, content);
console.log('Fixed HeroSection syntax');
