const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Watermark text
const watermarkText1 = 'M & M Home Solutions';
const watermarkText2 = 'Call 8790260037';

// Function to create watermark SVG
function createWatermarkSVG(width, height) {
  const fontSize = Math.max(16, Math.floor(width / 25));
  const textY1 = height - 40;
  const textY2 = height - 20;
  
  // Escape XML special characters
  const escapedText1 = watermarkText1.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const escapedText2 = watermarkText2.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  return `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <style>
          .watermark-text {
            font-family: Arial, sans-serif;
            font-size: ${fontSize}px;
            font-weight: bold;
            fill: rgba(255, 255, 255, 0.7);
            stroke: rgba(0, 0, 0, 0.5);
            stroke-width: 0.5;
          }
        </style>
      </defs>
      <text x="10" y="${textY1}" class="watermark-text">${escapedText1}</text>
      <text x="10" y="${textY2}" class="watermark-text">${escapedText2}</text>
    </svg>
  `;
}

// Function to add watermark to an image
async function addWatermark(inputPath, outputPath) {
  try {
    // Read image into buffer first
    const imageBuffer = await sharp(inputPath).toBuffer();
    
    // Get image metadata
    const metadata = await sharp(imageBuffer).metadata();
    const { width, height } = metadata;
    
    // Create watermark SVG
    const watermarkSVG = Buffer.from(createWatermarkSVG(width, height));
    
    // Composite watermark onto image
    const watermarkedBuffer = await sharp(imageBuffer)
      .composite([
        {
          input: watermarkSVG,
          top: 0,
          left: 0,
        },
      ])
      .toBuffer();
    
    // Write the watermarked image
    await fs.promises.writeFile(outputPath, watermarkedBuffer);
    
    console.log(`✓ Watermarked: ${path.basename(inputPath)}`);
    return true;
  } catch (error) {
    console.error(`✗ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

// Function to process all images in a directory
async function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let processed = 0;
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      processed += await processDirectory(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Process image file
      const success = await addWatermark(filePath, filePath);
      if (success) processed++;
    }
  }
  
  return processed;
}

// Main function
async function main() {
  const imagesDir = path.join(__dirname, '..', 'public', 'images');
  
  if (!fs.existsSync(imagesDir)) {
    console.error('Images directory not found!');
    process.exit(1);
  }
  
  console.log('Starting watermark process...\n');
  console.log(`Watermark: ${watermarkText1}`);
  console.log(`Watermark: ${watermarkText2}\n`);
  
  const processed = await processDirectory(imagesDir);
  
  console.log(`\n✓ Completed! Processed ${processed} images.`);
}

// Run the script
main().catch(console.error);

