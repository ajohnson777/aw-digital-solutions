// Renders the PNG favicons from public/favicon.svg. Run once: node scripts/icons.mjs
import sharp from 'sharp';
const svg = 'public/favicon.svg';
await sharp(svg).resize(32, 32).png().toFile('public/favicon-32.png');
await sharp(svg).resize(180, 180).png().toFile('public/apple-touch-icon.png');
console.log('icons written');
