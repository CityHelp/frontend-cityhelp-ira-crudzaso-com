# CityHelp 

<div align="center">

![CityHelp Banner](https://img.shields.io/badge/CityHelp-Road%20Safety-blue?style=for-the-badge)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.9-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

**A modern, AI-powered citizen platform for reporting and tracking road hazards in Medellín, Colombia.**

</div>

---

## 📋 Table of Contents

- [🌟 Overview](#-overview)
- [🛠 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
  - [Build](#build)
  - [Linting](#linting)
- [📁 Project Structure](#-project-structure)
- [🧩 Components](#-components)
  - [Core Components](#core-components)
  - [UI Components (Radix-based)](#ui-components-radix-based)
- [🌍 Internationalization](#-internationalization)
  - [Usage](#usage)
  - [Supported Languages](#supported-languages)
- [🎨 Styling](#-styling)
  - [Tailwind CSS](#tailwind-css)
  - [Custom Animations](#custom-animations)
  - [CSS Variables](#css-variables)
- [👥 Team Members](#-team-members)
- [📄 License](#-license)

---

## 🌟 Overview

**CityHelp** is a cutting-edge web application designed to empower citizens of Medellín to report road hazards such as potholes, dangerous curves, and other safety concerns in real-time. The platform leverages artificial intelligence to process and prioritize reports, creating a safer urban environment through community engagement.

### Key Objectives

- 🚨 Enable real-time reporting of road hazards
- 📊 Provide data-driven insights through interactive metrics
- 🤝 Foster community collaboration for urban safety
- 🎯 Utilize AI for intelligent hazard detection and prioritization
- 📱 Deliver a responsive, accessible user experience

---

## 🛠 Tech Stack

### Core Framework

- **[Next.js 16.0.3](https://nextjs.org/)** - React framework with App Router
- **[React 19.2.0](https://reactjs.org/)** - UI library
- **[TypeScript 5.x](https://www.typescriptlang.org/)** - Type-safe JavaScript

### Styling & UI

- **[Tailwind CSS 4.1.9](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible component primitives
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **[class-variance-authority](https://cva.style/)** - Component variant management
- **[tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate)** - Animation utilities

### Forms & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Performant form management
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Additional Libraries

- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[date-fns](https://date-fns.org/)** - Date utility library
- **[recharts](https://recharts.org/)** - Charting library for metrics visualization
- **[embla-carousel-react](https://www.embla-carousel.com/)** - Carousel component
- **[sonner](https://sonner.emilkowal.ski/)** - Toast notifications

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (v18.x or higher)
- **npm** (v9.x or higher) or **pnpm** (v8.x or higher)
- **Git**

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/CityHelp/frontend-cityhelp-ira-crudzaso-com.git
cd landing-page
```

2. **Clean npm cache (if needed)**

```bash
npm cache clean --force
```

3. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

> **Note**: The `--legacy-peer-deps` flag is used to handle peer dependency conflicts with React 19.

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

👉 https://cityhelp.ira.crudzaso.com/

### Build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Linting

Run ESLint to check code quality:

```bash
npm run lint
```

---

## 📁 Project Structure

```
landing-page/
├── app/                      # Next.js App Router directory
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page component
├── components/              # React components
│   ├── ui/                  # Reusable UI components (Radix-based)
│   ├── footer.tsx           # Footer component
│   ├── hero.tsx             # Hero section with video and map
│   ├── metrics.tsx          # Metrics dashboard
│   ├── navbar.tsx           # Navigation bar
│   ├── problem-section.tsx  # Problem statement section
│   ├── theme-provider.tsx   # Theme context provider
│   └── what-is-cityhelp.tsx # About section
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and configurations
│   └── translations.tsx     # i18n implementation
├── public/                  # Static assets
│   ├── favicon.png          # Favicon
│   └── *.jpg                # Images and media
├── styles/                  # Additional stylesheets
├── components.json          # Shadcn UI configuration
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 🧩 Components

### Core Components

#### `<Navbar />`
- Responsive navigation bar with mobile menu
- Language switcher (English/Spanish)
- Smooth scroll navigation to sections
- Dark mode optimized

#### `<Hero />`
- Eye-catching hero section with background image
- Embedded promotional video placeholder
- Interactive Google Maps integration
- Call-to-action buttons with animations

#### `<WhatIsCityHelp />`
- Platform introduction and value proposition
- Feature highlights with icons
- Responsive grid layout

#### `<Metrics />`
- Real-time statistics dashboard
- Animated counters and charts
- Data visualization using Recharts

#### `<ProblemSection />`
- Problem statement and solution overview
- Visual storytelling elements

#### `<Footer />`
- Social media links
- Contact information
- Copyright and legal information

### UI Components (Radix-based)

Located in `components/ui/`, these include:
- Accordion, Alert Dialog, Avatar
- Button, Card, Checkbox
- Dialog, Dropdown Menu, Form
- Input, Label, Select
- Tabs, Toast, Tooltip
- And many more...

---

## 🌍 Internationalization

The application supports multiple languages through a custom translation system located in `lib/translations.tsx`.

### Usage

```tsx
import { useLanguage } from "@/lib/translations"

function MyComponent() {
  const { t, language, setLanguage } = useLanguage()
  
  return (
    <div>
      <h1>{t.heroTitle}</h1>
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('es')}>Español</button>
    </div>
  )
}
```

### Supported Languages

- 🇺🇸 English (`en`)
- 🇪🇸 Spanish (`es`)

---

## 🎨 Styling

### Tailwind CSS

The project uses **Tailwind CSS 4.1.9** with custom configurations:

- **Custom Colors**: Defined in `app/globals.css` using CSS variables
- **Dark Mode**: Implemented using `next-themes`
- **Animations**: Custom keyframe animations for smooth transitions
- **Responsive Design**: Mobile-first approach with breakpoints

### Custom Animations

Defined in `globals.css`:
- `hero-title` - Title entrance animation
- `slide-up` - Slide up with fade
- `pop-in` - Scale and fade entrance
- `glow-border` - Animated border glow
- `text-glow` - Text glow effect
- And more...

### CSS Variables

Theme colors are defined using HSL values in CSS variables:
```css
--background: 222.2 84% 4.9%;
--foreground: 210 40% 98%;
--primary: 217.2 91.2% 59.8%;
--accent: 217.2 32.6% 17.5%;
```

---

## 👥 Team Members

| Name | Role |
|------|------|
| **Andrés Restrepo** | Frontend Developer |
| **Juan Camilo Sánchez** | Backend Developer (Java) |
| **Juan José Hernández** | Backend Developer (C#) |
| **Santiago Restrepo** | Scrum Master |
| **Vanessa Gómez** | AI Developer |

---

## 📄 License

**Version 1.0**

---

<div align="center">

**Made with ❤️ for a safer Medellín**

[⬆ Back to Top](#cityhelp)

</div>



