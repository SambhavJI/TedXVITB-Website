import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = './public/Team-pics';
const outputDir = './public/Team-pics-optimized';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages(dir, outDir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
        const sourcePath = path.join(dir, item);
        const stat = fs.statSync(sourcePath);

        if (stat.isDirectory()) {
            // Create corresponding output subdirectory
            const newOutDir = path.join(outDir, item);
            if (!fs.existsSync(newOutDir)) {
                fs.mkdirSync(newOutDir, { recursive: true });
            }
            await optimizeImages(sourcePath, newOutDir);
        } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
            const outputPath = path.join(outDir, item.replace(/\.(jpg|jpeg|png)$/i, '.jpg'));

            try {
                await sharp(sourcePath)
                    .rotate() // Auto-rotate based on EXIF orientation
                    .resize(400, 560, { fit: 'cover', position: 'top' })
                    .jpeg({ quality: 80, progressive: true })
                    .toFile(outputPath);

                const originalSize = stat.size;
                const newSize = fs.statSync(outputPath).size;
                console.log(`✓ ${item}: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024).toFixed(0)}KB`);
            } catch (err) {
                console.error(`✗ Error processing ${item}:`, err.message);
            }
        }
    }
}

console.log('Starting image optimization with auto-rotation...\n');
optimizeImages(sourceDir, outputDir)
    .then(() => console.log('\n✅ All images optimized with correct orientation!'))
    .catch(err => console.error('Error:', err));
