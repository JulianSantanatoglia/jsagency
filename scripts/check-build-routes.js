import fs from 'fs';
import path from 'path';

const distPath = './dist';

console.log('🔍 Verificando rutas generadas en el build...\n');

// Verificar que la carpeta dist existe
if (!fs.existsSync(distPath)) {
  console.error('❌ La carpeta dist no existe. Ejecuta npm run build primero.');
  process.exit(1);
}

// Leer el archivo index.html para ver las rutas generadas
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  console.log('📄 Rutas en index.html:');
  const assetMatches = indexContent.match(/\/assets\/[^"']+/g);
  if (assetMatches) {
    assetMatches.forEach(asset => {
      console.log(`  ${asset}`);
    });
  }
  
  // Verificar si hay referencias a imágenes
  const imageMatches = indexContent.match(/\/images\/[^"']+/g);
  if (imageMatches) {
    console.log('\n🖼️ Referencias a imágenes en index.html:');
    imageMatches.forEach(image => {
      console.log(`  ${image}`);
    });
  }
}

// Verificar archivos de assets
const assetsPath = path.join(distPath, 'assets');
if (fs.existsSync(assetsPath)) {
  const assets = fs.readdirSync(assetsPath);
  console.log('\n📦 Archivos en /assets/:');
  assets.forEach(asset => {
    console.log(`  ${asset}`);
  });
}

// Verificar si las imágenes están en la raíz de dist
const imageFiles = fs.readdirSync(distPath).filter(file => 
  file.match(/\.(png|jpg|jpeg|svg|gif)$/i)
);

if (imageFiles.length > 0) {
  console.log('\n🖼️ Imágenes en la raíz de dist:');
  imageFiles.forEach(image => {
    console.log(`  ${image}`);
  });
}

console.log('\n🎯 Verificación de rutas completada!');
