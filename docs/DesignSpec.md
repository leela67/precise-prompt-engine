# Terranova Real Estate - Design Specification

## 1. Design Audit & Analysis

### 1.1 Global Design System

#### Typography
| Element | Font Family | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing |
|---------|-------------|--------|----------------|---------------|-------------|----------------|
| Display Heading | ui-serif, Georgia | 300 (Light) | 6rem (96px) | 4rem (64px) | 0.9 | -0.025em |
| Large Heading | ui-serif, Georgia | 300 (Light) | 3.75rem (60px) | 2.5rem (40px) | 1.1 | -0.025em |
| Medium Heading | ui-serif, Georgia | 400 (Normal) | 1.875rem (30px) | 1.5rem (24px) | 1.2 | -0.025em |
| Small Heading | Sans-serif system | 500 (Medium) | 1.25rem (20px) | 1.125rem (18px) | 1.3 | -0.025em |
| Body Large | Sans-serif system | 400 (Normal) | 1.125rem (18px) | 1rem (16px) | 1.6 | 0 |
| Body Text | Sans-serif system | 400 (Normal) | 1rem (16px) | 0.875rem (14px) | 1.5 | 0 |
| Caption | Sans-serif system | 400 (Normal) | 0.875rem (14px) | 0.75rem (12px) | 1.4 | 0 |
| Overline | Sans-serif system | 500 (Medium) | 0.75rem (12px) | 0.75rem (12px) | 1.4 | 0.1em |

#### Color Palette
| Token | HSL Values | Usage |
|-------|------------|-------|
| `--background` | 0 0% 100% | Main background |
| `--foreground` | 0 0% 7% | Primary text |
| `--text-primary` | 0 0% 7% | Main headings and content |
| `--text-secondary` | 0 0% 45% | Secondary text |
| `--text-muted` | 0 0% 65% | Captions and subtle text |
| `--text-inverse` | 0 0% 95% | White text on dark backgrounds |
| `--brand-primary` | 0 0% 7% | Brand black |
| `--brand-secondary` | 35 25% 65% | Warm accent |
| `--brand-accent` | 45 15% 85% | Light accent |
| `--surface` | 0 0% 98% | Section backgrounds |
| `--surface-elevated` | 0 0% 100% | Card backgrounds |
| `--interactive-primary` | 0 0% 7% | Primary buttons |
| `--interactive-secondary` | 0 0% 95% | Secondary buttons |
| `--interactive-border` | 0 0% 85% | Borders and dividers |

#### Spacing Scale
| Token | Value | Usage |
|-------|-------|-------|
| xs | 0.25rem (4px) | Icon gaps |
| sm | 0.5rem (8px) | Small gaps |
| md | 1rem (16px) | Standard spacing |
| lg | 1.5rem (24px) | Component spacing |
| xl | 2rem (32px) | Section spacing |
| 2xl | 3rem (48px) | Large section spacing |
| 3xl | 6rem (96px) | Hero spacing |

#### Layout & Grid
| Breakpoint | Width | Container Max-Width | Side Padding |
|------------|-------|-------------------|--------------|
| Mobile | <768px | 100% | 1.5rem (24px) |
| Tablet | 768px+ | 100% | 2rem (32px) |
| Desktop | 1024px+ | 1280px | 2rem (32px) |
| Large | 1440px+ | 1280px | 2rem (32px) |

#### Shadows & Effects
| Name | Value |
|------|-------|
| Card Shadow | 0 4px 12px 0 hsl(0 0% 0% / 0.1) |
| Elevated Shadow | 0 10px 25px 0 hsl(0 0% 0% / 0.1) |
| Hero Shadow | 0 25px 50px -12px hsl(0 0% 0% / 0.25) |

#### Border Radius
- Standard: 0.75rem (12px)
- Large: 1rem (16px)
- Extra Large: 1.5rem (24px)

### 1.2 Component Specifications

#### Header/Navigation
- **Height**: 72px
- **Background**: White with 95% opacity + backdrop blur
- **Logo**: 32px circular black icon with "T" + "Terranova" text
- **Navigation Items**: Right-aligned, 14px medium weight
- **Mobile**: Hamburger menu with overlay

#### Hero Section
- **Height**: 100vh (full viewport)
- **Background**: Full-width image with dark gradient overlay
- **Title**: Display typography in white
- **Buttons**: Primary (white bg) + Secondary (transparent with white border)
- **Scroll Indicator**: Animated scroll hint at bottom

#### Solution Cards
- **Layout**: 3-column grid on desktop, stacked on mobile
- **Aspect Ratio**: 4:5 (portrait)
- **Hover Effect**: Scale transform + content slide up
- **Overlay**: Gradient from transparent to dark

#### Property Cards
- **Layout**: 3-column grid
- **Image Aspect**: 4:3 landscape
- **Content**: Status badge, address, features, price
- **Hover**: Image scale + arrow translate

#### Stats Section
- **Numbers**: 60px font size with animated counters
- **Layout**: 3-column grid with center alignment
- **Animation**: Count-up effect on scroll

### 1.3 Responsive Behavior

#### Breakpoint Changes
| Component | Mobile (<768px) | Tablet (768px+) | Desktop (1024px+) |
|-----------|----------------|-----------------|-------------------|
| Hero Title | 4rem | 5rem | 6rem |
| Grid Layouts | 1 column | 2 columns | 3 columns |
| Section Padding | 3rem vertical | 4rem vertical | 6rem vertical |
| Button Size | Full width | Auto width | Auto width |

### 1.4 Animations & Interactions

#### Animation Specifications
| Element | Animation | Duration | Easing | Trigger |
|---------|-----------|----------|--------|---------|
| Page Load | Fade in + translateY | 0.6s | ease-out | On load |
| Cards Hover | Scale + Shadow | 0.3s | ease-out | Hover |
| Buttons Hover | translateY + Shadow | 0.2s | ease-out | Hover |
| Stats Counter | Count animation | 2s | ease-out | In viewport |
| FAQ Expand | Accordion | 0.2s | ease-out | Click |

## 2. Technical Implementation

### 2.1 Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + CSS Variables
- **Typography**: System fonts (ui-serif for headings, system-ui for body)
- **Icons**: Lucide React
- **Animations**: CSS transitions + React state

### 2.2 Component Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── SolutionsSection.tsx
│       ├── AboutSection.tsx
│       ├── StatsSection.tsx
│       ├── FeaturedListingsSection.tsx
│       ├── TestimonialSection.tsx
│       ├── BlogSection.tsx
│       ├── FAQSection.tsx
│       └── CTASection.tsx
├── assets/
│   └── hero-living-room.jpg
└── pages/
    └── Index.tsx
```

### 2.3 Design System Implementation
- **CSS Variables**: All colors defined in `index.css` as HSL values
- **Tailwind Config**: Extended with design tokens and utilities
- **Component Classes**: Utility classes for buttons, cards, typography
- **Responsive**: Mobile-first approach with consistent breakpoints

### 2.4 Performance Optimizations
- **Images**: Responsive sizing with srcset
- **Animations**: GPU-accelerated transforms
- **Bundle**: Tree-shaken imports
- **CSS**: Optimized with Tailwind purge

## 3. Content Structure

### 3.1 Page Sections (Top to Bottom)
1. **Header**: Fixed navigation with logo and menu
2. **Hero**: Full-screen with background image and CTAs
3. **Solutions**: 3-card grid for services
4. **About**: Two-column layout with image and content
5. **Stats**: Animated counters with achievements
6. **Properties**: Featured listings grid
7. **Testimonial**: Centered client review
8. **Blog**: Latest articles grid
9. **FAQ**: Expandable questions
10. **CTA**: Final conversion section
11. **Footer**: Simple branding and attribution

### 3.2 Interactive Elements
- **Navigation**: Smooth scroll to sections
- **Buttons**: Hover animations with shadows
- **Cards**: Scale and translate effects
- **FAQ**: Accordion expand/collapse
- **Mobile Menu**: Slide-in overlay

## 4. Accessibility & SEO

### 4.1 Accessibility Features
- **Semantic HTML**: Proper heading hierarchy
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Focus management
- **Color Contrast**: WCAG AA compliance
- **Alt Text**: Descriptive image alternatives

### 4.2 SEO Optimization
- **Title Tags**: Descriptive and keyword-rich
- **Meta Descriptions**: Under 160 characters
- **Structured Data**: Real estate schema markup
- **Image Optimization**: Proper alt attributes
- **Mobile Responsive**: Mobile-first design

## 5. Quality Verification

### 5.1 Visual Accuracy
- ✅ Typography matches reference (serif headings, system body)
- ✅ Color palette implemented with design tokens
- ✅ Spacing and layout consistent across breakpoints
- ✅ Component styling matches reference design
- ✅ Hover states and animations implemented

### 5.2 Technical Quality
- ✅ Responsive design across all breakpoints
- ✅ Performance optimized with lazy loading
- ✅ Accessibility standards met
- ✅ SEO best practices implemented
- ✅ Clean, maintainable code structure

### 5.3 Implementation Status
- ✅ Design system established
- ✅ All components created and styled
- ✅ Responsive behavior implemented
- ✅ Animations and interactions added
- ✅ Content structure complete
- ✅ Performance optimized

## 6. Browser Support
- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+, Edge 88+
- **Mobile**: iOS 14+, Android Chrome 88+
- **Features**: CSS Grid, Flexbox, CSS Variables, Backdrop Filter