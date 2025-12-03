# Aiana Builders - Real Estate Website

A modern, professional real estate website for Aiana Builders, featuring all services, property listings, and enquiry forms.

## Features

- 🏠 **Complete Website Structure**: Home, About, Services, Gallery, Residential, Commercial, Renting, and Contact pages
- 🎨 **Modern Design**: Professional real estate color scheme with blue and gold accents
- 🎭 **3D Background**: Interactive 3D building animation in the background
- 💧 **Watermark**: Subtle watermark branding throughout the site
- 📱 **Responsive Design**: Fully responsive across all devices
- 📝 **Enquiry Form**: Professional contact form with validation
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal performance
- 🎯 **Smooth Animations**: Framer Motion animations for enhanced UX

## Technology Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Three Fiber** - 3D graphics
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── commercial/     # Commercial properties page
│   ├── contact/        # Contact page with enquiry form
│   ├── gallery/        # Property gallery page
│   ├── residential/   # Residential properties page
│   ├── renting/        # Rental properties page
│   ├── services/       # Services page
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Footer.tsx      # Footer component
│   ├── Background3D.tsx # 3D background animation
│   ├── Watermark.tsx   # Watermark component
│   └── ...             # Other components
└── ...
```

## Color Scheme

The website uses a professional real estate color palette:

- **Primary Blue**: `#0ea5e9` - Trust and professionalism
- **Estate Dark**: `#1a365d` - Stability and reliability
- **Accent Gold**: `#d4af37` - Luxury and premium
- **Light Accents**: Various shades for depth and contrast

## Pages

1. **Home** - Hero section, services overview, popular projects, exclusive deals
2. **About** - Company history, expertise, statistics
3. **Services** - Detailed service offerings
4. **Gallery** - Property photo gallery with filters
5. **Residential** - Residential property listings
6. **Commercial** - Commercial property listings
7. **Renting** - Rental property listings with filters
8. **Contact** - Enquiry form and contact information

## Customization

### Update Contact Information

Edit `components/ContactInfo.tsx` and `components/Footer.tsx` to update contact details.

### Modify Colors

Update the color scheme in `tailwind.config.js` and `app/globals.css`.

### Add Properties

Update property data in respective component files (e.g., `components/ResidentialProjects.tsx`).

## License

All rights reserved with Aiana Builders and Promoters Pvt. Ltd.

