import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = 'd:/SMART Q SPACE/smartq-react/public';

async function optimize() {
  console.log('Optimizing images...');

  // 1. Hero illustration
  const heroPath = path.join(publicDir, 'hero-illustration.jpg');
  if (fs.existsSync(heroPath)) {
    // Generate webp version (max width 900px, 80% quality)
    await sharp(heroPath)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(path.join(publicDir, 'hero-illustration.webp'));

    // Also optimize jpg fallback
    await sharp(heroPath)
      .resize({ width: 900, withoutEnlargement: true })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(path.join(publicDir, 'hero-illustration-opt.jpg'));
  }

  // 2. Program cards (tahsin, tahfidz, arabic)
  const cards = ['tahsin-illustration.jpg', 'tahfidz-illustration.jpg', 'arabic-illustration.jpg'];
  for (const file of cards) {
    const input = path.join(publicDir, file);
    if (fs.existsSync(input)) {
      const baseName = path.parse(file).name;
      await sharp(input)
        .resize({ width: 640, withoutEnlargement: true })
        .webp({ quality: 80, effort: 6 })
        .toFile(path.join(publicDir, `${baseName}.webp`));

      await sharp(input)
        .resize({ width: 640, withoutEnlargement: true })
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(path.join(publicDir, `${baseName}-opt.jpg`));
    }
  }

  // 3. Logo
  const logoPath = path.join(publicDir, 'logo.png');
  if (fs.existsSync(logoPath)) {
    await sharp(logoPath)
      .resize({ width: 360, withoutEnlargement: true })
      .webp({ quality: 85 })
      .toFile(path.join(publicDir, 'logo.webp'));

    await sharp(logoPath)
      .resize({ width: 360, withoutEnlargement: true })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(path.join(publicDir, 'logo-opt.png'));
  }

  console.log('Image optimization complete!');
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});

