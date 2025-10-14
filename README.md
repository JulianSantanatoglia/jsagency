# .js agency - Soluciones digitales con otra perspectiva

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)](https://app.netlify.com/sites/YOUR_SITE_NAME/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🚀 Descripción

Sitio web corporativo de .js agency, una agencia de desarrollo web, diseño y branding ubicada en Almería, España. Especialistas en React, automatizaciones con IA y fotografía aérea.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz limpia y profesional con animaciones suaves
- **📱 Responsive**: Optimizado para todos los dispositivos
- **♿ Accesible**: Cumple con estándares WCAG 2.1 AA
- **🔒 Seguro**: Headers de seguridad y CSP configurados
- **⚡ Rápido**: Optimizado para Core Web Vitals
- **🔍 SEO**: Meta tags completos y structured data
- **🍪 Cookies**: Banner de cookies y políticas legales
- **📊 Analytics**: Integración con Google Analytics (opcional)

## 🛠️ Tecnologías

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Deployment**: Netlify
- **Analytics**: Google Analytics (opcional)

## 🚀 Instalación y Desarrollo

### Prerrequisitos

- Node.js 20 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/jsagency.git
cd jsagency

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo en puerto 3000

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Vista previa de la build de producción

# Calidad de código
npm run lint         # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── Services.tsx    # Servicios ofrecidos
│   ├── Portfolio.tsx   # Portfolio de proyectos
│   ├── Contact.tsx     # Información de contacto
│   ├── Footer.tsx      # Pie de página
│   ├── LegalPages.tsx  # Páginas legales
│   └── CookieBanner.tsx # Banner de cookies
├── utils/              # Utilidades
│   └── analytics.ts    # Configuración de Google Analytics
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🔧 Configuración

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
# Google Analytics (opcional)
VITE_GA_MEASUREMENT_ID=GA_MEASUREMENT_ID

# URL del sitio
VITE_SITE_URL=https://jsagency.com
```

### Google Analytics

Para habilitar Google Analytics:

1. Obtén tu Measurement ID de Google Analytics
2. Reemplaza `GA_MEASUREMENT_ID` en `src/utils/analytics.ts`
3. La configuración se aplicará automáticamente

## 🚀 Deployment

### Netlify (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configura las variables de entorno
3. El deployment se realizará automáticamente

### Otros Hosting

El proyecto genera archivos estáticos en la carpeta `dist/` que pueden ser desplegados en cualquier servidor web.

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **Core Web Vitals**: Optimizado
- **Bundle Size**: < 500KB gzipped
- **First Contentful Paint**: < 1.5s

## 🔒 Seguridad

- Content Security Policy (CSP) configurado
- Headers de seguridad implementados
- Validación de entrada en formularios
- Protección contra XSS y CSRF

## ♿ Accesibilidad

- Navegación por teclado completa
- ARIA labels y roles semánticos
- Contraste de colores WCAG AA
- Soporte para lectores de pantalla
- Skip links implementados

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## 📞 Contacto

- **Email**: hola@jsagency.com
- **Ubicación**: Almería, España
- **Sitio Web**: [jsagency.com](https://jsagency.com)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Changelog

### v1.0.0 (2025-01-27)
- ✨ Lanzamiento inicial
- 🎨 Diseño moderno y responsive
- ♿ Accesibilidad completa
- 🔒 Seguridad implementada
- 🔍 SEO optimizado
- 📄 Páginas legales incluidas

---

Desarrollado con ❤️ por [.js agency](https://jsagency.com)