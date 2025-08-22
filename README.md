# Terranova - Premium Real Estate Website

## Project Overview

A modern, responsive real estate website built for Terranova's Hyderabad Real Estate business. Features luxury property listings, agent information, and seamless user experience.

## Getting Started

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

## Technologies Used

This project is built with modern web technologies:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality UI components
- **Framer Motion** - Smooth animations
- **React Router** - Client-side routing

## Features

- **Property Listings**: Browse featured properties with local image galleries
- **Property Details**: Individual property pages with full image carousels and detailed information
- **Scroll Animations**: Smooth scroll-based image scaling effects using Framer Motion
- **Responsive Design**: Optimized for mobile, tablet, and desktop viewing
- **Dynamic Navigation**: Consistent header behavior with scroll-based visibility
- **Local Image Management**: High-quality property images stored locally for fast loading
- **SEO Optimized**: Semantic HTML structure and meta tag management
- **Performance Optimized**: Lazy loading, image optimization, and smooth animations

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Page sections (Hero, About, etc.)
│   ├── ui/              # Reusable UI components
│   ├── PropertyCarousel.tsx  # Image carousel for property details
│   └── ScrollScaleImage.tsx  # Scroll-based animation wrapper
├── data/
│   └── properties.ts    # Property data with local images
├── hooks/
│   └── useScrollDirection.ts # Scroll direction detection
├── pages/               # Route pages
└── lib/                # Utilities and helpers
```

## Adding New Properties

To add new properties to the website:

1. **Add Images**: Place property images in `/public/images/[property-id]/`
   - Use sequential naming: `1.jpg`, `2.jpg`, etc.
   - Recommended size: 1200x800px (3:2 aspect ratio)

2. **Update Data**: Add the property to `src/data/properties.ts`:
   ```typescript
   {
     id: "unique-property-id",
     title: "Property Title",
     address: "Full Address",
     bedrooms: 4,
     bathrooms: 3.5,
     price: "$1,500,000", // Optional - not shown on listings page
     images: [
       "/images/property-id/1.jpg",
       "/images/property-id/2.jpg",
     ],
     description: "Property description...",
     details: [
       { label: "Lot Size", value: "8,000 sq ft" },
     ],
   }
   ```

## Navigation Behavior

The header navigation adapts based on scroll position:

- **At top**: Transparent background with contrasting text
- **Scrolling down**: Header hides completely  
- **Scrolling up**: Header appears with white background

This behavior is controlled by `useScrollDirection` hook and the `initialTransparent` prop on Header component.
