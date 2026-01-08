# 🚀 Professional Portfolio Website

A modern, responsive portfolio website built with React.js featuring smooth animations, dark/light mode toggle, and a clean professional design.

## ✨ Features

- **🎨 Modern UI/UX** - Clean, professional design with smooth animations using Framer Motion
- **🌓 Dark/Light Mode** - Toggle between dark and light themes
- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **⚡ Fast Performance** - Optimized React components and CSS
- **🔍 SEO Optimized** - Meta tags and semantic HTML for better search visibility
- **♿ Accessible** - Follows web accessibility best practices
- **📧 Contact Form** - Functional contact section (ready for backend integration)

## 🛠️ Tech Stack

- **Frontend Framework:** React.js 19
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Styling:** CSS3 with Custom Properties (Variables)
- **Build Tool:** Create React App

## 📂 Project Structure

```
portfolio-app/
├── public/
│   ├── index.html          # HTML template with SEO meta tags
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine instructions
├── src/
│   ├── components/
│   │   ├── Navbar/         # Navigation component
│   │   ├── Hero/           # Hero/landing section
│   │   ├── About/          # About me section
│   │   ├── Skills/         # Skills & technologies
│   │   ├── Projects/       # Project showcase
│   │   ├── Contact/        # Contact form
│   │   └── Footer/         # Footer component
│   ├── App.js              # Main app component
│   ├── App.css             # App-level styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles & CSS variables
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-app.git
   cd portfolio-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

## 📝 Customization

### Personal Information
Update your information in these files:

1. **Hero Section** (`src/components/Hero/Hero.js`)
   - Your name and tagline
   - Social media links

2. **About Section** (`src/components/About/About.js`)
   - Bio and background
   - Technologies list

3. **Skills Section** (`src/components/Skills/Skills.js`)
   - Skill categories and proficiency levels

4. **Projects Section** (`src/components/Projects/Projects.js`)
   - Featured and other projects
   - GitHub and live demo links

5. **Contact Section** (`src/components/Contact/Contact.js`)
   - Contact information
   - Social links

6. **SEO & Meta Tags** (`public/index.html`)
   - Title, description, and Open Graph tags

### Styling
- **Colors:** Modify CSS variables in `src/index.css`
- **Fonts:** Update Google Fonts link in `public/index.html`

## 🏗️ Building for Production

```bash
npm run build
```

This creates an optimized build in the `build/` folder.

## 🌐 Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Deploy with default settings

### GitHub Pages
1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/portfolio-app",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📬 Contact

**Your Name**
- Email: your.email@example.com
- LinkedIn: [yourusername](https://linkedin.com/in/yourusername)
- GitHub: [@yourusername](https://github.com/yourusername)

---

⭐ Star this repo if you found it helpful!
