# Home Improvement Services Website

A modern, SEO-optimized website for home improvement and installation services in Hyderabad & Secunderabad.

## Features

- ✅ **Modern UI/UX**: Clean, premium, responsive design
- ✅ **Hero Slider**: 8 slides (one per category) with clickable navigation
- ✅ **Category Pages**: SEO-optimized pages for all 9 service categories
- ✅ **Product Pages**: Detailed product pages with images and descriptions
- ✅ **Local SEO**: Optimized for Hyderabad & Secunderabad with all major localities
- ✅ **Floating Buttons**: Call and WhatsApp buttons for easy contact
- ✅ **AI Chatbot**: Placeholder ready for GPT integration
- ✅ **Sitemap**: Auto-generated sitemap.xml for search engines
- ✅ **Trust Features**: Warranty, free installation, same-day delivery, 24/7 support
- ✅ **Experience Stats**: Years in industry, happy clients, projects completed

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## Getting Started

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## Project Structure

```
├── app/
│   ├── category/
│   │   └── [slug]/
│   │       ├── page.tsx          # Category pages
│   │       └── [productSlug]/
│   │           └── page.tsx      # Product pages
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Homepage
│   └── sitemap.ts                # Sitemap generator
├── components/
│   ├── CategoryContent.tsx       # Category page content
│   ├── Chatbot.tsx               # AI chatbot placeholder
│   ├── ExperienceStats.tsx       # Stats section
│   ├── FloatingButtons.tsx       # Call/WhatsApp buttons
│   ├── Footer.tsx                # Footer component
│   ├── Header.tsx                # Header/Navigation
│   ├── HeroSlider.tsx            # Hero slider component
│   ├── ProductContent.tsx        # Product page content
│   ├── ServicesGrid.tsx          # Services grid
│   └── TrustFeatures.tsx         # Trust features section
└── lib/
    └── categories.ts              # Category data and utilities
```

## Service Categories

1. Ceiling Cloth Drying Hangers
2. Wall Mounted Cloth Hangers
3. Invisible Grills
4. Pigeon Safety Nets
5. Bamboo / Roller Blinds
6. Shoe Racks
7. Anti Bird Spikes
8. Mosquito Nets
9. Outdoor & Indoor Gaming Nets

## Service Areas

We provide services across ALL areas of Hyderabad and Secunderabad, including:

- Kompally, ECIL, Kukatpally, Hitech City, Gachibowli
- Madhapur, Miyapur, Ameerpet, Begumpet, Banjara Hills
- Jubilee Hills, Manikonda, Uppal, LB Nagar, Tarnaka
- Alwal, Bowenpally, Trimulgherry, Sainikpuri, Malkajgiri
- And all other areas in Hyderabad & Secunderabad

## SEO Features

- ✅ Proper meta titles and descriptions
- ✅ H1/H2/H3 heading structure
- ✅ Local SEO keywords integration
- ✅ Sitemap.xml generation
- ✅ SEO-friendly URLs
- ✅ Structured data ready

## Customization

### Update Contact Information

Edit the phone number and WhatsApp number in:
- `components/FloatingButtons.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/CategoryContent.tsx`
- `components/ProductContent.tsx`

### Update Domain for Sitemap

Edit `app/sitemap.ts` and update the `baseUrl` variable with your actual domain.

### Add/Modify Categories

Edit `lib/categories.ts` to add new categories or modify existing ones.

### Integrate AI Chatbot

The chatbot component is ready for GPT integration. See `components/Chatbot.tsx` for instructions.

## Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://www.homesolutions.in
NEXT_PUBLIC_PHONE=+916309484800
NEXT_PUBLIC_WHATSAPP=916309484800
```

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## License

This project is proprietary and confidential.

