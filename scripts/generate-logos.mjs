import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoDir = path.join(__dirname, '..', 'public', 'assets', 'images', 'logo');
const sourceLogo = path.join(logoDir, 'Logo-MaviYolculukGezisi.jpg');

async function generateLogos() {
  console.log('🎨 Generating logo versions...\n');

  // 1. Create main PNG with transparent background (remove gray background)
  console.log('1. Creating main transparent PNG...');
  await sharp(sourceLogo)
    .resize(800, 800, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(logoDir, 'logo-main.png'));
  console.log('   ✓ logo-main.png (800x800)');

  // 2. Create smaller version for header
  console.log('2. Creating header logo...');
  await sharp(sourceLogo)
    .resize(400, 400, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(logoDir, 'logo-header.png'));
  console.log('   ✓ logo-header.png (400x400)');

  // 3. Create white version for dark backgrounds
  console.log('3. Creating white version for dark backgrounds...');
  // First extract and invert - make navy parts white
  await sharp(sourceLogo)
    .resize(800, 800, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .negate({ alpha: false })
    .modulate({ brightness: 1.5 })
    .png()
    .toFile(path.join(logoDir, 'logo-white.png'));
  console.log('   ✓ logo-white.png (800x800)');

  // 4. Create favicon - 32x32
  console.log('4. Creating favicon 32x32...');
  await sharp(sourceLogo)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(logoDir, 'favicon-32.png'));
  console.log('   ✓ favicon-32.png');

  // 5. Create favicon - 16x16
  console.log('5. Creating favicon 16x16...');
  await sharp(sourceLogo)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toFile(path.join(logoDir, 'favicon-16.png'));
  console.log('   ✓ favicon-16.png');

  // 6. Create Apple Touch Icon - 180x180
  console.log('6. Creating Apple Touch Icon...');
  await sharp(sourceLogo)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(logoDir, 'apple-touch-icon.png'));
  console.log('   ✓ apple-touch-icon.png (180x180)');

  // 7. Create Android Chrome icons - 192x192 and 512x512
  console.log('7. Creating Android icons...');
  await sharp(sourceLogo)
    .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(logoDir, 'android-chrome-192.png'));
  console.log('   ✓ android-chrome-192.png');

  await sharp(sourceLogo)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(logoDir, 'android-chrome-512.png'));
  console.log('   ✓ android-chrome-512.png');

  // 8. Create OG Image (1200x630) with logo centered on gradient background
  console.log('8. Creating OG Image for social media...');

  // Create a gradient background
  const ogWidth = 1200;
  const ogHeight = 630;

  // Create gradient SVG background
  const gradientSvg = `
    <svg width="${ogWidth}" height="${ogHeight}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#1e3a5f;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#0c1929;stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)"/>
      <text x="600" y="520" font-family="Arial, sans-serif" font-size="32" fill="#f59e0b" text-anchor="middle" font-weight="bold">Lüks Gulet Kiralama | Mavi Yolculuk Türkiye</text>
      <text x="600" y="570" font-family="Arial, sans-serif" font-size="20" fill="#94a3b8" text-anchor="middle">www.maviyolculukgezisi.com</text>
    </svg>
  `;

  // Resize logo for OG image
  const logoForOg = await sharp(sourceLogo)
    .resize(350, 350, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Composite logo onto gradient background
  await sharp(Buffer.from(gradientSvg))
    .composite([
      {
        input: logoForOg,
        top: 80,
        left: Math.floor((ogWidth - 350) / 2)
      }
    ])
    .jpeg({ quality: 90 })
    .toFile(path.join(logoDir, '..', 'og-image-new.jpg'));
  console.log('   ✓ og-image-new.jpg (1200x630)');

  // 9. Copy favicon to public root
  console.log('9. Copying favicon to public root...');
  await sharp(sourceLogo)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .png()
    .toFile(path.join(__dirname, '..', 'public', 'favicon.png'));

  // Also create ICO format approximation (32x32 PNG works for most browsers)
  await sharp(sourceLogo)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toFormat('png')
    .toFile(path.join(__dirname, '..', 'public', 'favicon.ico'));
  console.log('   ✓ favicon.ico & favicon.png in public root');

  console.log('\n✅ All logo versions generated successfully!');
  console.log('\nGenerated files:');
  console.log('  📁 public/assets/images/logo/');
  console.log('     - logo-main.png (800x800, transparent)');
  console.log('     - logo-header.png (400x400, transparent)');
  console.log('     - logo-white.png (800x800, inverted for dark bg)');
  console.log('     - favicon-16.png');
  console.log('     - favicon-32.png');
  console.log('     - apple-touch-icon.png (180x180)');
  console.log('     - android-chrome-192.png');
  console.log('     - android-chrome-512.png');
  console.log('  📁 public/assets/images/');
  console.log('     - og-image-new.jpg (1200x630)');
  console.log('  📁 public/');
  console.log('     - favicon.ico');
  console.log('     - favicon.png');
}

generateLogos().catch(console.error);
