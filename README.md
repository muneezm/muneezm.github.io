# Muneez Moidu - Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, professional experience, and technical projects. Built with Next.js 15, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.14-38B2AC?style=for-the-badge&logo=tailwind-css)

## About

Professional portfolio of **Muneez Moidu**, a Cybersecurity Analyst and SIEM Expert based in Dubai, UAE. Currently working at The Fifth Element, specializing in threat detection, security protocols, and SIEM management.

### Key Highlights
- **4+ Years** of cybersecurity experience
- **15+ Projects** completed successfully
- **CompTIA A+ & Security+** certified
- **100+ Threats** mitigated and analyzed

## Features

### Modern Design
- **Responsive Design** - Optimized for all devices
- **Dark Theme** - Professional cybersecurity aesthetic
- **Smooth Animations** - Enhanced user experience with Framer Motion
- **Glassmorphism Effects** - Modern UI with backdrop blur
- **Interactive Elements** - Hover effects and micro-interactions

### Performance
- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Optimized Images** - Next.js image optimization
- **Fast Loading** - Optimized bundle size and performance

### Sections
- **Hero Section** - Professional introduction with animated stats
- **About** - Background, education, and certifications
- **Experience** - Professional timeline with detailed roles
- **Projects** - Featured cybersecurity and development projects
- **Skills** - Animated progress bars for technical skills
- **Contact** - Professional contact form and information

### Animations
- **Reveal on Scroll** - Smooth entrance animations
- **Staggered Animations** - Sequential element reveals
- **Progress Bars** - Animated skill level indicators
- **Shimmer Effects** - Polished visual feedback
- **Hover Interactions** - Engaging micro-animations

## Tech Stack

### Frontend
- **Next.js 15.2.4** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5.9.3** - Type-safe JavaScript
- **Tailwind CSS 4.1.14** - Utility-first CSS framework

### UI Components
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library
- **Class Variance Authority** - Component styling utilities

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **pnpm** - Fast package manager

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muneezm/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Run development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
muneez-portfolio/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # Reusable React components
│   ├── ui/               # UI component library
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── reveal-on-view.tsx
│   └── skills-section.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── styles/               # Additional stylesheets
└── package.json          # Project dependencies
```

## Customization

### Colors
The portfolio uses a cybersecurity-inspired color palette defined in `app/globals.css`:

```css
:root {
  --primary: oklch(0.985 0 0);      /* White/Primary */
  --secondary: oklch(0.269 0 0);    /* Dark Gray */
  --accent: oklch(0.269 0 0);       /* Accent Color */
  --background: oklch(0.145 0 0);   /* Dark Background */
}
```

### Animations
Custom animations are defined in `app/globals.css`:
- `float` - Floating elements
- `glow` - Glowing effects
- `shimmer` - Progress bar shimmer
- `pulse-glow` - Pulsing glow effects

### Content
Update personal information in:
- `app/page.tsx` - Hero section and stats
- `components/about-section.tsx` - About content
- `components/experience-section.tsx` - Work experience
- `components/projects-section.tsx` - Project showcase
- `components/skills-section.tsx` - Technical skills

## Contact Information

- **Email**: [muneezmoidu@gmail.com](mailto:muneezmoidu@gmail.com)
- **LinkedIn**: [muneez-moidu-62426b16b](https://www.linkedin.com/in/muneez-moidu-62426b16b/)
- **GitHub**: [muneezm](https://github.com/muneezm)
- **Location**: Sharjah, UAE

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to [Vercel](https://vercel.com)
3. Deploy automatically on push

### Other platforms
- **Netlify**: Connect GitHub repository
- **Railway**: Deploy with `railway up`
- **Docker**: Use included Dockerfile

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- **Next.js Team** - Amazing React framework
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide** - Beautiful icon library
- **Vercel** - Deployment platform

---

**Built with ❤️ by Muneez Moidu** | Cybersecurity Analyst & SIEM Expert

*Protecting digital assets through advanced threat detection and security expertise.*
