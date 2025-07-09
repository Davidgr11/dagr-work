# Professional Portfolio — David A. González R.

[PREVIEW](https://dagr.netlify.app)

> **Software Engineer & Fullstack Developer**

Modern, responsive, and animated personal portfolio — perfect for showcasing your experience, projects, certifications, and achievements. Includes multilingual support (Spanish/English), dark/light mode, particle animations, and scalable architecture.

---

## 🚀 Main Technologies

- **HTML5, CSS3 (SASS), JavaScript (ES6+)**
- BEM architecture for styles
- Animations with [particles.js](https://vincentgarreau.com/particles.js/)
- Responsive Design (Mobile First)
- JSON for multilingual content

---

## 📱 Responsive Design
![Responsively](/assets/responsively.png)

---

## ✅ Great Performance

PageSpeed Insights: [AQUÍ](https://pagespeed.web.dev/analysis/https-dagr-netlify-app/3nzhdhfvsk?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=en-US&utm_source=lh-chrome-ext)

![Lighthouse](/assets/lighthouse.png)
---

## 📁 Project Structure

```
assets/
  ├── icons/           # Technology icons
  ├── projects/        # Project images
  ├── preview.png      # Preview image for the README
  └── favicon.svg      # SVG Favicon
scripts/
  ├── main.js          # Main logic (render, language, dark mode, animations)
  └── particles.js     # Particle library
styles/
  ├── main.scss        # Main styles (SASS)
  ├── _variables.scss  # Color, typography variables, etc.
  └── _mixins.scss     # Reusable mixins
index.html             # Main page
README.md              # This file
package.json           # SASS dependencies (optional)
data/
  └── content.json     # All content in ES/EN
```

---

## 🛠️ How to Use

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd <folder>
   ```
2. **Install SASS** (if you want to edit styles)
   ```bash
   npm install -g sass
   ```
3. **Compile styles**
   ```bash
   sass styles/main.scss styles/main.css --watch
   ```
4. **Open `index.html` in your browser**
   - Or deploy the project to Netlify, Vercel, GitHub Pages, etc.

---

## 🌐 Multilanguage

All content is managed from `data/content.json` and you can switch between Spanish and English with the top button.

---

## 👨‍💻 Author & Credits

Developed by **David A. González R.**

- [LinkedIn](https://www.linkedin.com/in/davidagr/)
- [GitHub](https://github.com/davidagr)

