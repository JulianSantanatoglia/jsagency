import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'public', 'images');
const destDir = path.join(__dirname, '..', 'dist', 'images');

async function copyImages() {
  try {
    console.log('🖼️  Copying images from public/images to dist/images...');
    
    // Check if source directory exists
    try {
      await fs.access(sourceDir);
    } catch (error) {
      console.error('❌ Source directory does not exist:', sourceDir);
      return;
    }

    // Create destination directory if it doesn't exist
    try {
      await fs.access(destDir);
    } catch (error) {
      console.log('📁 Creating destination directory:', destDir);
      await fs.mkdir(destDir, { recursive: true });
    }

    // Copy all files from source to destination
    const files = await fs.readdir(sourceDir);
    let copiedCount = 0;

    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      
      const stat = await fs.stat(sourcePath);
      
      if (stat.isDirectory()) {
        // Recursively copy subdirectories
        await copyDirectory(sourcePath, destPath);
        copiedCount++;
      } else {
        // Copy file
        await fs.copyFile(sourcePath, destPath);
        copiedCount++;
        console.log(`✅ Copied: ${file}`);
      }
    }

    console.log(`🎉 Successfully copied ${copiedCount} items to dist/images`);
    
    // Verify the copy was successful
    try {
      const verifyFiles = await fs.readdir(destDir);
      console.log(`✅ Verification: Found ${verifyFiles.length} files in dist/images`);
    } catch (error) {
      console.error('❌ Verification failed:', error);
    }
  } catch (error) {
    console.error('❌ Error copying images:', error);
    process.exit(1);
  }
}

async function copyDirectory(source, destination) {
  try {
    await fs.mkdir(destination, { recursive: true });
    const files = await fs.readdir(source);
    
    for (const file of files) {
      const sourcePath = path.join(source, file);
      const destPath = path.join(destination, file);
      
      const stat = await fs.stat(sourcePath);
      
      if (stat.isDirectory()) {
        await copyDirectory(sourcePath, destPath);
      } else {
        await fs.copyFile(sourcePath, destPath);
        console.log(`✅ Copied: ${path.relative(source, sourcePath)}`);
      }
    }
  } catch (error) {
    console.error(`❌ Error copying directory ${source}:`, error);
  }
}

copyImages();
