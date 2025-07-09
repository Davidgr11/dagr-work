# Portafolio Profesional — David A. González R.

![Preview](https://dagr.work)

> **Software Engineer & Fullstack Developer**

Portafolio personal moderno, responsive y animado, ideal para mostrar tu experiencia, proyectos, certificaciones y logros. Incluye soporte multilenguaje (español/inglés), dark/light mode, animaciones de partículas y arquitectura escalable.

---

## 🚀 Tecnologías principales

- **HTML5, CSS3 (SASS), JavaScript (ES6+)**
- Arquitectura BEM para estilos
- Animaciones con [particles.js](https://vincentgarreau.com/particles.js/)
- Responsive Design (Mobile First)
- JSON para contenido multilenguaje

---

## 📁 Estructura del proyecto

```
assets/
  ├── icons/           # Íconos de tecnologías
  ├── projects/        # Imágenes de proyectos
  ├── preview.png      # Imagen de preview para el README
  └── favicon.svg      # Favicon SVG
scripts/
  ├── main.js          # Lógica principal (render, idioma, dark mode, animaciones)
  └── particles.js     # Librería de partículas
styles/
  ├── main.scss        # Estilos principales (SASS)
  ├── _variables.scss  # Variables de color, tipografía, etc.
  └── _mixins.scss     # Mixins reutilizables
index.html             # Página principal
README.md              # Este archivo
package.json           # Dependencias para SASS (opcional)
data/
  └── content.json     # Todo el contenido en ES/EN
```

---

## 🛠️ ¿Cómo usar?

1. **Clona el repositorio**
   ```bash
   git clone <repo-url>
   cd <carpeta>
   ```
2. **Instala SASS** (si quieres editar los estilos)
   ```bash
   npm install -g sass
   ```
3. **Compila los estilos**
   ```bash
   sass styles/main.scss styles/main.css --watch
   ```
4. **Abre `index.html` en tu navegador**
   - O sube el proyecto a Netlify, Vercel, GitHub Pages, etc.

---

## ✏️ Personalización

- **Edita tu información** en `data/content.json` (proyectos, certificaciones, logros, textos, etc.) en ambos idiomas.
- **Agrega tus imágenes** en `assets/projects/` y tus íconos en `assets/icons/`.
- **Cambia los colores** en `styles/_variables.scss`.
- **Reemplaza el favicon** en `assets/favicon.svg` si lo deseas.
- **Agrega o quita secciones** fácilmente editando el JSON y los componentes en JS.

---

## 🌐 Multilenguaje

Todo el contenido se gestiona desde `data/content.json` y puedes alternar entre español e inglés con el botón superior.

---

## ☁️ Despliegue rápido

- **Netlify**: Solo arrastra la carpeta al dashboard de Netlify.
- **Vercel**: Sube el repo y selecciona como proyecto estático.
- **GitHub Pages**: Sube el contenido y configura la rama como página.

---

## 👨‍💻 Autor y créditos

Desarrollado por **David A. González R.**

- [LinkedIn](https://www.linkedin.com/in/davidagr/)
- [GitHub](https://github.com/davidagr)

Inspirado en los mejores portafolios modernos y optimizado para destacar en procesos de selección de tecnología y software.

---

¡Éxito en tus aplicaciones y proyectos! 🚀 