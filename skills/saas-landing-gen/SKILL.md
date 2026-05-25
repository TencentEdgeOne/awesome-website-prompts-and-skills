---
name: saas-landing-gen
description: Generate a complete SaaS landing page with EdgeOne Pages deployment. Includes hero section, features, pricing, testimonials, and CTA sections. Supports React + Tailwind CSS, one-command deploy to EdgeOne Pages.
---

# SaaS Landing Page Generator Skill

## Trigger Words
- "帮我做一个 SaaS 落地页"
- "generate a saas landing page"
- "创建一个软件产品官网"
- "landing page for my saas"

## What This Skill Does
Generates a complete, production-ready SaaS landing page and deploys it to EdgeOne Pages in one flow.

Output: a hosted URL + full source code.

## Tech Stack
- Framework: React 18 + Vite
- Styling: Tailwind CSS
- Deployment: EdgeOne Pages (auto)
- Optional: Edge Functions for form handling

## Workflow

### Step 1: Gather Requirements
Ask the user (or infer from context):
1. Product name / brand
2. Tagline / one-liner
3. Key features (3-5)
4. Pricing tiers (optional)
5. Color scheme preference

If info is missing, use sensible defaults and proceed.

### Step 2: Generate the Code
Create a Vite + React + Tailwind project with the following structure:

```
saas-landing/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Features.jsx
│       ├── Pricing.jsx
│       ├── Testimonials.jsx
│       ├── CTA.jsx
│       └── Footer.jsx
└── public/
    └── favicon.svg
```

### Step 3: Deploy to EdgeOne Pages
After generating code, run:

```bash
# Install EdgeOne Pages CLI
npm install -g edgeone-pages-cli

# Deploy
edgeone-pages deploy . --name <project-name>
```

Or guide user to connect Git repo to EdgeOne Pages for auto-deploy.

## Code Templates

### package.json
```json
{
  "name": "saas-landing",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.33",
    "tailwindcss": "^3.4.1",
    "vite": "^5.0.0"
  }
}
```

### tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}
```

### src/App.jsx (Complete Example)
```jsx
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
```

### src/components/Hero.jsx (Key Section)
```jsx
import React from 'react'

export default function Hero({ productName = "Your SaaS", tagline = "The best solution for your business" }) {
  return (
    <section className="relative bg-gradient-to-br from-brand-600 to-brand-800 text-white py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">{productName}</h1>
        <p className="text-xl mb-8 text-brand-100">{tagline}</p>
        <div className="flex gap-4 justify-center">
          <button className="bg-white text-brand-700 px-8 py-3 rounded-lg font-semibold hover:bg-brand-50 transition">
            Get Started Free
          </button>
          <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
            See Demo
          </button>
        </div>
      </div>
    </section>
  )
}
```

## EdgeOne Pages Deployment

After code generation, ensure deployment by:

1. **Option A: CLI Deploy**
```bash
npx edgeone-pages-cli deploy . --name saas-landing-demo
```

2. **Option B: Git-based Deploy**
- Push code to GitHub
- Connect repo at EdgeOne Pages console
- Auto-deploy on push

3. **Verify deployment URL** and return to user.

## Best Practices
- Use semantic HTML for SEO
- Ensure mobile responsive (Tailwind classes)
- Add meta tags in `index.html`
- Optimize images (use SVG where possible)
- Include OG tags for social sharing

## Example Prompt to User
```
Create a SaaS landing page for [Product Name].
Tagline: [One line description]
Features: [Feature 1], [Feature 2], [Feature 3]
Pricing: Free / Pro ($29/mo) / Enterprise (contact)
Color scheme: [Blue/ Purple/ Green/ Custom]
Deploy to EdgeOne Pages.
```
