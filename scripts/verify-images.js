import fs from 'fs';
import path from 'path';

const distPath = './dist';
const publicPath = './public';

console.log('🔍 Verificando imágenes en el build...\n');

// Verificar que la carpeta dist existe
if (!fs.existsSync(distPath)) {
  console.error('❌ La carpeta dist no existe. Ejecuta npm run build primero.');
  process.exit(1);
}

// Verificar imágenes de Smart Card
const smartCardImages = [
  'paso1.png',
  'paso2.png', 
  'paso3.png',
  'paso4.png',
  'paso5.png',
  'paso6.png'
];

console.log('📱 Verificando imágenes de Smart Card:');
smartCardImages.forEach(image => {
  const distImagePath = path.join(distPath, 'images', image);
  const publicImagePath = path.join(publicPath, 'images', image);
  
  if (fs.existsSync(distImagePath)) {
    console.log(`✅ ${image} - Copiada correctamente`);
  } else if (fs.existsSync(publicImagePath)) {
    console.log(`⚠️  ${image} - Existe en public pero no en dist`);
  } else {
    console.log(`❌ ${image} - No encontrada`);
  }
});

// Verificar imágenes de proyectos
const projectImages = [
  '1mushroommdp.png',
  '3joyeriadiaz.png',
  'make.png',
  'inmobiliaria.jpg'
];

console.log('\n🎨 Verificando imágenes de proyectos:');
projectImages.forEach(image => {
  const distImagePath = path.join(distPath, 'images', 'proyectos', image);
  const publicImagePath = path.join(publicPath, 'images', 'proyectos', image);
  
  if (fs.existsSync(distImagePath)) {
    console.log(`✅ ${image} - Copiada correctamente`);
  } else if (fs.existsSync(publicImagePath)) {
    console.log(`⚠️  ${image} - Existe en public pero no en dist`);
  } else {
    console.log(`❌ ${image} - No encontrada`);
  }
});

// Verificar placeholder
const placeholderPath = path.join(distPath, 'images', 'placeholder.svg');
if (fs.existsSync(placeholderPath)) {
  console.log('\n✅ placeholder.svg - Copiado correctamente');
} else {
  console.log('\n❌ placeholder.svg - No encontrado');
}

console.log('\n🎯 Verificación completada!');
