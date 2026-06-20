const fs = require('fs');
const file = 'c:/Users/DELL/Desktop/Honeywell Seo/website/components/homepage/HeroSection.tsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(/import \{[^}]*\}\s*from ['"]@\/components\/motion\/motion-variants['"];?\n?/g, '');
content = content.replace(/<motion\.([a-zA-Z]+)([^>]*)>/g, '<$1$2>');
content = content.replace(/<\/motion\.([a-zA-Z]+)>/g, '</$1>');
content = content.replace(/const reduce = useReducedMotion\(\);\s*/g, '');
content = content.replace(/import\s+\{[^}]*\}\s+from\s+['"]motion\/react['"];?\r?\n?/g, '');

content = content.replace(/\s+whileHover=\{\{[^}]*\}\}/g, '');
content = content.replace(/\s+whileTap=\{\{[^}]*\}\}/g, '');
content = content.replace(/\s+whileHover=\{reduce \? \{\} : \{[^}]*\}\}/g, '');
content = content.replace(/\s+whileTap=\{reduce \? \{\} : \{[^}]*\}\}/g, '');

fs.writeFileSync(file, content);
console.log('Fixed HeroSection');
