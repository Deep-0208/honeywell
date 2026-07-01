const fs = require('fs');
const file = 'c:/Users/shahk/OneDrive/Desktop/honeywell/app/(site)/about-us/page.tsx';
let txt = fs.readFileSync(file, 'utf8');

// Replace mangled UTF-8 characters
txt = txt.replace(/â€”/g, '—');
txt = txt.replace(/â€“/g, '–');
txt = txt.replace(/â€™/g, '\'');
txt = txt.replace(/Ã—/g, '×');
txt = txt.replace(/Âµ/g, 'µ');
txt = txt.replace(/â”€/g, '─');
txt = txt.replace(/â•/g, '═');

fs.writeFileSync(file, txt, 'utf8');
console.log('Fixed');
