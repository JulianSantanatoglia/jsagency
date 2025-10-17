# .js agency - Guía de Marca

## 📋 Información General

**Nombre de la marca:** .js agency  
**Tagline:** "Soluciones digitales con otra perspectiva"  
**Ubicación:** Almería, España  
**Sector:** Agencia de desarrollo web, diseño y branding  
**Especialidades:** React, automatizaciones con IA, fotografía aérea  

---

## 🎨 Paleta de Colores

### Colores Primarios

| Color | Código HEX | RGB | Uso |
|-------|------------|-----|-----|
| **Primary** | `#2563EB` | rgb(37, 99, 235) | Color principal de la marca |
| **Secondary** | `#7C3AED` | rgb(124, 58, 237) | Color secundario, acentos |
| **Primary Dark** | `#0F172A` | rgb(15, 23, 42) | Textos principales, fondos oscuros |

### Colores de Acento

| Color | Código HEX | RGB | Uso |
|-------|------------|-----|-----|
| **Accent Cyan** | `#22D3EE` | rgb(34, 211, 238) | Color de marca principal, CTAs |
| **Accent Emerald** | `#10B981` | rgb(16, 185, 129) | Éxito, confirmaciones |

### Colores de Fondo

| Color | Código HEX | RGB | Uso |
|-------|------------|-----|-----|
| **Background Light** | `#F8FAFC` | rgb(248, 250, 252) | Fondo principal claro |
| **Background Dark** | `#0F172A` | rgb(15, 23, 42) | Fondo principal oscuro |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Fondo blanco puro |

### Escala de Grises

| Color | Código HEX | RGB | Uso |
|-------|------------|-----|-----|
| **Gray 50** | `#F8FAFC` | rgb(248, 250, 252) | Fondos muy claros |
| **Gray 100** | `#F1F5F9` | rgb(241, 245, 249) | Fondos claros |
| **Gray 200** | `#E2E8F0` | rgb(226, 232, 240) | Bordes claros |
| **Gray 300** | `#CBD5E1` | rgb(203, 213, 225) | Bordes |
| **Gray 400** | `#94A3B8` | rgb(148, 163, 184) | Textos secundarios |
| **Gray 500** | `#64748B` | rgb(100, 116, 139) | Textos secundarios |
| **Gray 600** | `#475569` | rgb(71, 85, 105) | Textos secundarios |
| **Gray 700** | `#334155` | rgb(51, 65, 85) | Textos secundarios |
| **Gray 800** | `#1E293B` | rgb(30, 41, 59) | Textos principales |
| **Gray 900** | `#0F172A` | rgb(15, 23, 42) | Textos principales |

### Colores de Texto

| Color | Código HEX | RGB | Uso |
|-------|------------|-----|-----|
| **Text Primary** | `#0F172A` | rgb(15, 23, 42) | Textos principales |
| **Text Secondary** | `#64748B` | rgb(100, 116, 139) | Textos secundarios |

### Modo Oscuro

| Color | Código HEX | RGB | Uso |
|-------|------------|-----|-----|
| **Primary Dark Mode** | `#3B82F6` | rgb(59, 130, 246) | Primary en modo oscuro |
| **Secondary Dark Mode** | `#8B5CF6` | rgb(139, 92, 246) | Secondary en modo oscuro |
| **Background Dark Mode** | `#0F172A` | rgb(15, 23, 42) | Fondo modo oscuro |
| **Surface Dark Mode** | `#1E293B` | rgb(30, 41, 59) | Superficies modo oscuro |
| **Text Primary Dark** | `#F8FAFC` | rgb(248, 250, 252) | Texto principal modo oscuro |
| **Text Secondary Dark** | `#CBD5E1` | rgb(203, 213, 225) | Texto secundario modo oscuro |

---

## 🔤 Tipografía

### Familias de Fuentes

#### Fuente Display (Títulos)
- **Familia:** `'Outfit', 'Inter', system-ui, -apple-system, sans-serif`
- **Pesos disponibles:** 300, 400, 500, 600, 700, 800, 900
- **Uso:** Títulos principales, headers, elementos destacados
- **Importación:** Google Fonts

#### Fuente Body (Texto)
- **Familia:** `'Inter', system-ui, -apple-system, sans-serif`
- **Pesos disponibles:** 300, 400, 500, 600, 700
- **Uso:** Texto del cuerpo, párrafos, contenido general
- **Importación:** Google Fonts

### Jerarquía Tipográfica

#### Títulos
- **H1:** `font-display`, `font-weight: 600`, responsive (2.5rem - 6rem)
- **H2:** `font-display`, `font-weight: 600`, responsive (2rem - 4rem)
- **H3:** `font-display`, `font-weight: 600`, responsive (1.5rem - 2.5rem)
- **H4-H6:** `font-display`, `font-weight: 600`

#### Texto del Cuerpo
- **Párrafos:** `font-body`, `font-weight: 400`
- **Texto secundario:** `font-body`, `color: var(--color-text-secondary)`

### Clases de Utilidad

```css
.font-display { font-family: var(--font-family-display); }
.font-body { font-family: var(--font-family-body); }
```

---

## 🎭 Logo y Marca

### Logo Principal
- **Formato:** Texto tipográfico
- **Composición:** `.js` + `agency`
- **Estilo:** `.js` en `text-slate-900` (negro), `agency` en `text-accent-cyan` (cyan)
- **Tipografía:** Outfit, font-weight: bold para `.js`, semibold para `agency`
- **Tamaño:** `text-2xl` (responsive)

### Variaciones de Logo
- **Archivos disponibles:**
  - `logo-js-agency.svg` - Logo principal
  - `logo-js-agency-variations.svg` - Variaciones
  - `logo-js-agency-footer.svg` - Versión footer
  - `logo js agency.ai` - Archivo fuente Illustrator

---

## 🎨 Efectos Visuales

### Gradientes

#### Gradiente Principal (Hero)
```css
background: linear-gradient(to right, 
  from-slate-900 via-slate-700 to-accent-cyan)
```

#### Gradiente CTA
```css
background: linear-gradient(to right, 
  from-accent-cyan to-cyan-500)
```

#### Gradiente Animado
```css
.gradient-animate {
  background-size: 200% 200%;
  animation: gradientShift 8s ease infinite;
}
```

### Sombras

#### Sombras de Tarjetas
```css
shadow-lg shadow-cyan-500/30
shadow-xl shadow-cyan-500/40
```

#### Sombras de Hover
```css
hover:shadow-md hover:shadow-gray-100/50
```

### Efectos de Hover

#### Hover Lift
```css
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

#### Transformaciones
```css
hover:-translate-y-1
hover:scale-105
```

---

## 🎬 Animaciones

### Transiciones Base
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
```

### Animaciones Personalizadas

#### Fade In Up
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

#### Fade In Left
```css
@keyframes fadeInLeft {
  from { opacity: 0; transform: translateX(-30px); }
  to { opacity: 1; transform: translateX(0); }
}
```

#### Fade In Right
```css
@keyframes fadeInRight {
  from { opacity: 0; transform: translateX(30px); }
  to { opacity: 1; transform: translateX(0); }
}
```

### Clases de Animación
- `.animate-fade-in-up`
- `.animate-fade-in-left`
- `.animate-fade-in-right`

---

## 📱 Responsive Design

### Breakpoints
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

### Tipografía Responsive
- **H1 Mobile:** 2.5rem, line-height: 1.1
- **H2 Mobile:** 2rem, line-height: 1.2
- **H3 Mobile:** 1.5rem, line-height: 1.3

---

## ♿ Accesibilidad

### Colores de Foco
```css
*:focus {
  outline: 2px solid var(--color-accent-cyan);
  outline-offset: 2px;
}
```

### Soporte para Alto Contraste
```css
@media (prefers-contrast: high) {
  .text-slate-600 { color: var(--color-text-primary); }
}
```

### Soporte para Movimiento Reducido
```css
@media (prefers-reduced-motion: reduce) {
  * { animation-duration: 0.01ms !important; }
}
```

---

## 🎯 Uso de Colores por Sección

### Header
- **Fondo:** `bg-white/90 backdrop-blur-md`
- **Borde:** `border-gray-200`
- **Logo:** `.js` en `text-slate-900`, `agency` en `text-accent-cyan`

### Hero
- **Título:** Gradiente `from-slate-900 via-slate-700 to-accent-cyan`
- **Subtítulo:** `text-slate-600`
- **CTA:** Gradiente `from-accent-cyan to-cyan-500`

### Tarjetas de Servicios
- **Fondo normal:** `bg-white/70 backdrop-blur-sm`
- **Fondo hover:** `bg-white`
- **Bordes:** `border-gray-100` → `border-gray-200`

### Footer
- **Fondo:** `bg-slate-900`
- **Texto:** `text-slate-300`

---

## 🛠️ Implementación Técnica

### Variables CSS
```css
:root {
  --color-primary: #2563EB;
  --color-secondary: #7C3AED;
  --color-accent-cyan: #22D3EE;
  --color-accent-emerald: #10B981;
  --font-family-display: 'Outfit', 'Inter', system-ui, -apple-system, sans-serif;
  --font-family-body: 'Inter', system-ui, -apple-system, sans-serif;
}
```

### Clases de Utilidad Tailwind
```css
.text-primary { color: var(--color-primary); }
.text-secondary { color: var(--color-secondary); }
.text-accent-cyan { color: var(--color-accent-cyan); }
.bg-primary { background-color: var(--color-primary); }
.bg-secondary { background-color: var(--color-secondary); }
.bg-accent-cyan { background-color: var(--color-accent-cyan); }
```

---

## 📋 Checklist de Marca

### ✅ Elementos Implementados
- [x] Paleta de colores completa
- [x] Tipografías definidas (Outfit + Inter)
- [x] Logo tipográfico
- [x] Efectos visuales (gradientes, sombras)
- [x] Animaciones suaves
- [x] Modo oscuro
- [x] Responsive design
- [x] Accesibilidad (WCAG 2.1 AA)
- [x] Variables CSS organizadas

### 🎨 Archivos de Diseño
- [x] `logo js agency.ai` - Archivo fuente Illustrator
- [x] `logo-js-agency.svg` - Logo principal
- [x] `logo-js-agency-variations.svg` - Variaciones
- [x] `logo-js-agency-footer.svg` - Versión footer

---

## 📞 Contacto

**Agencia:** .js agency  
**Ubicación:** Almería, España  
**Especialidades:** Desarrollo web, diseño, branding, React, IA, fotografía aérea  
**Website:** [jsagency.com](https://jsagency.com)

---

*Esta guía de marca fue generada automáticamente basándose en el código fuente del proyecto .js agency.*
