# 🎨 Portfolio - Personal Developer Portfolio

A modern, interactive personal portfolio website showcasing projects, skills, and experience. Built with Next.js, React, TypeScript, and Tailwind CSS with smooth animations using Framer Motion.

## 🚀 Live Demo

[View Live Portfolio](https://sushversesai-pixel-portfolio.vercel.app)

## ✨ Features

- **Responsive Design** - Looks great on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Framer Motion for beautiful page transitions
- **Dark Mode** - Eye-friendly dark theme support
- **Projects Showcase** - Highlight your best work and projects
- **Skills Section** - Display technical skills and expertise
- **About Section** - Tell your story and background
- **Contact Information** - Easy ways for visitors to reach you
- **SEO Optimized** - Built-in SEO best practices
- **Performance** - Optimized for fast loading and smooth interactions
- **Modern Tech Stack** - Latest Next.js and React features

## 🛠 Tech Stack

- **Framework**: Next.js 16.2.3 - React-based framework
- **Language**: TypeScript - Type-safe development
- **Styling**: Tailwind CSS 4 - Utility-first CSS
- **Animations**: Framer Motion 12.38.0 - Smooth, interactive animations
- **Runtime**: React 19.2.4 - Latest React features
- **Code Quality**: Biomejs - Fast unified toolchain
- **Development**: Vite - Fast build tool

## 📋 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/sushversesai-pixel/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**:
   Visit `http://localhost:3000` to see your portfolio

## 💻 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Code linting with Biome
npm run lint

# Format code with Biome
npm run format
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── page.js           # Home page
│   ├── layout.js         # Root layout
│   └── globals.css       # Global styles
├── components/           # Reusable React components
│   ├── Hero.tsx          # Hero section
│   ├── Projects.tsx      # Projects showcase
│   ├── Skills.tsx        # Skills section
│   └── Contact.tsx       # Contact section
├── public/               # Static assets
│   └── images/           # Portfolio images
├── styles/              # CSS files
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
├── package.json         # Dependencies
└── README.md            # Documentation
```

## 🎯 Key Sections

### Hero Section
- Engaging introduction
- Call-to-action buttons
- Animated background or gradient

### Projects Showcase
- Project cards with descriptions
- Technology tags
- Links to live demos and repositories
- Project images/thumbnails

### Skills Section
- Technical skills categorization
- Programming languages
- Frameworks and libraries
- Tools and platforms

### About Section
- Personal background
- Professional journey
- Key achievements
- Interests and passions

### Contact Section
- Contact form
- Social media links
- Email and other communication methods

## 🎨 Customization

### Update Personal Information

Edit `app/page.js` to update:
- Your name and title
- Professional summary
- Contact information

### Add Your Projects

Update the projects data in `components/Projects.tsx`:

```typescript
const projects = [
  {
    title: "Your Project Title",
    description: "Project description",
    technologies: ["React", "TypeScript", "Tailwind"],
    link: "https://project-url.com",
    github: "https://github.com/username/project"
  },
  // Add more projects
];
```

### Customize Styling

#### Tailwind Configuration
Modify `tailwind.config.js` to customize:
- Color schemes
- Typography
- Spacing
- Breakpoints

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

#### Framer Motion Animations
Customize animations in component files:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

### Update Social Links

Update social media links in the contact section:

```typescript
const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourname" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourname" },
  { name: "Twitter", url: "https://twitter.com/yourname" },
];
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Deploy"

### Deploy to Other Platforms

#### Netlify
```bash
npm run build
# Deploy the 'out' folder to Netlify
```

#### AWS Amplify
```bash
npm install -g @aws-amplify/cli
amplify init
amplify publish
```

#### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

## 📊 Performance Optimization

- Image optimization with Next.js Image
- Code splitting and lazy loading
- Minification and compression
- CDN deployment
- Caching strategies

## 🔐 Security

- Content Security Policy (CSP)
- XSS protection
- CSRF prevention
- Secure headers configuration

## 📝 SEO Optimization

- Meta tags and OpenGraph data
- Sitemap generation
- robots.txt configuration
- Structured data/JSON-LD
- Mobile responsiveness

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a Pull Request

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Sai Susmitha**
- GitHub: [@sushversesai-pixel](https://github.com/sushversesai-pixel)
- Portfolio: [View Live](https://sushversesai-pixel-portfolio.vercel.app)

---

**Like this portfolio?** Please consider giving it a star! ⭐
