const fs = require('fs');
const path = require('path');

const targetFiles = [
  'components/homepage/WhyChooseUsSection.tsx',
  'components/homepage/TrustStrip.tsx',
  'components/homepage/TestimonialsSection.tsx',
  'components/homepage/ProductsSection.tsx',
  'components/homepage/ProcessSection.tsx',
  'components/homepage/LocationsSection.tsx',
  'components/homepage/IndustriesSection.tsx',
  'components/homepage/HomepageCTASection.tsx',
  'components/homepage/HeroSection.tsx',
  'components/homepage/FAQSection.tsx',
  'components/products/hydraulic-cylinders/CylinderOverview.tsx',
  'app/(site)/products/page.tsx',
  'components/Footer.tsx'
];

targetFiles.forEach(relPath => {
  const fullPath = path.join(__dirname, '../website', relPath);
  if (fs.existsSync(fullPath)) {
    let content = fs.readFileSync(fullPath, 'utf8');

    // Remove import of motion primitives
    content = content.replace(/import\s+\{[^}]*\}\s+from\s+['"]@\/components\/motion\/motion-primitives['"];?\r?\n?/g, '');

    // Replace <MotionFadeIn ...> with <div ...>
    content = content.replace(/<MotionFadeIn([^>]*)>/g, '<div$1>');
    content = content.replace(/<\/MotionFadeIn>/g, '</div>');

    // Replace <MotionStagger ...> with <div ...>
    content = content.replace(/<MotionStagger([^>]*)>/g, '<div$1>');
    content = content.replace(/<\/MotionStagger>/g, '</div>');

    // Replace <MotionStaggerItem ...> with <div ...>
    content = content.replace(/<MotionStaggerItem([^>]*)>/g, '<div$1>');
    content = content.replace(/<\/MotionStaggerItem>/g, '</div>');

    // Replace <MotionSlide ...> with <div ...>
    content = content.replace(/<MotionSlide([^>]*)>/g, '<div$1>');
    content = content.replace(/<\/MotionSlide>/g, '</div>');

    // Replace <MotionScale ...> with <div ...>
    content = content.replace(/<MotionScale([^>]*)>/g, '<div$1>');
    content = content.replace(/<\/MotionScale>/g, '</div>');

    // Remove specific motion props like direction="up", delay={...}, speed="slow", etc.
    content = content.replace(/\s+direction=(['"](?:up|down|left|right)['"]|\{[^}]*\})/g, '');
    content = content.replace(/\s+delay=\{[^}]*\}/g, '');
    content = content.replace(/\s+speed=(['"](?:slow|fast|normal)['"]|\{[^}]*\})/g, '');
    
    // Also remove generic Framer motion attributes if left over
    content = content.replace(/\s+(initial|animate|exit|whileInView|viewport|variants|transition)=((['"][^'"]*['"])|(\{[^}]*\}))/g, '');

    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated: ${relPath}`);
  } else {
    console.warn(`Not found: ${relPath}`);
  }
});
