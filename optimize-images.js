const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

const imagesToOptimize = [
  { name: 'hero-carousel-3.png', type: 'webp', quality: 80, width: 1400 },
  { name: 'principal.jpg', type: 'webp', quality: 80, width: 600 },
  { name: 'programs_offered_section-bg_image.png', type: 'webp', quality: 75, width: 1400 },
  { name: 'gallery_section-bg_image.png', type: 'webp', quality: 75, width: 1400 },
  { name: 'logo.png', type: 'webp', quality: 85, width: 300 },
  { name: 'cartoon_trees.png', type: 'webp', quality: 80 },
  { name: 'cartoon_trees_2.png', type: 'webp', quality: 80 },
  { name: 'cartoon_trees_with_animals.png', type: 'webp', quality: 80 },
  { name: 'monkey1.png', type: 'webp', quality: 80 },
  { name: 'moon.png', type: 'webp', quality: 80 },
  { name: 'space_guy.png', type: 'webp', quality: 80 },
  { name: 'caterpiller.png', type: 'webp', quality: 80 },
  { name: 'rocket.png', type: 'webp', quality: 80 }
];

async function optimize() {
  console.log('Starting image optimization...');
  for (const img of imagesToOptimize) {
    const inputPath = path.join(publicDir, img.name);
    if (!fs.existsSync(inputPath)) {
      console.log(`Skipping: ${img.name} (file not found)`);
      continue;
    }

    const extName = path.extname(img.name);
    const baseName = path.basename(img.name, extName);
    const outputPath = path.join(publicDir, `${baseName}.webp`);

    console.log(`Optimizing: ${img.name} -> ${baseName}.webp`);
    try {
      let pipeline = sharp(inputPath);
      if (img.width) {
        pipeline = pipeline.resize({ width: img.width, withoutEnlargement: true });
      }
      
      await pipeline
        .webp({ quality: img.quality })
        .toFile(outputPath);

      const oldSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;
      const pct = ((oldSize - newSize) / oldSize * 100).toFixed(1);
      console.log(`Success! Saved ${pct}% (${(oldSize/1024/1024).toFixed(2)}MB -> ${(newSize/1024).toFixed(1)}KB)`);
    } catch (err) {
      console.error(`Error optimizing ${img.name}:`, err);
    }
  }
  console.log('Image optimization finished!');
}

optimize();
