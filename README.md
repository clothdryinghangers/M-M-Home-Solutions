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

**Note:** This is a Next.js application, not a traditional HTML/CSS/JS website. The structure is different:

### Key Files (Equivalent to traditional website):
- **`/app/page.tsx`** → Equivalent to `/index.html` (Main homepage)
- **`/app/globals.css`** → Equivalent to `/style.css` (Global styles)
- **`/components/`** → Equivalent to `/script.js` (React components with JavaScript)
- **`/public/images/`** → Your images folder (61 images committed)

### Complete Structure:

```
├── app/                          # Main application files
│   ├── page.tsx                  # Homepage (like index.html)
│   ├── globals.css               # Global styles (like style.css)
│   ├── layout.tsx                # Root layout wrapper
│   ├── about/page.tsx            # About page
│   ├── contact/page.tsx          # Contact page
│   ├── category/
│   │   └── [slug]/
│   │       ├── page.tsx          # Category pages
│   │       └── [productSlug]/
│   │           └── page.tsx      # Product pages
│   ├── api/inquiry/route.ts      # API endpoint
│   ├── sitemap.ts                # Sitemap generator
│   └── robots.ts                 # Robots.txt
├── components/                    # React components (like script.js)
│   ├── Header.tsx                # Navigation header
│   ├── Footer.tsx                # Footer
│   ├── HeroSlider.tsx            # Hero slider
│   ├── ServicesGrid.tsx          # Services grid
│   ├── CategoryContent.tsx       # Category page content
│   ├── ProductContent.tsx        # Product page content
│   ├── FloatingButtons.tsx       # Call/WhatsApp buttons
│   ├── ContentProtection.tsx     # Security protection
│   └── ... (other components)
├── public/                       # Static files
│   └── images/                   # All images (61 files)
│       ├── hero/                 # Hero slider images (9 files)
│       ├── products/             # Product images (36 files)
│       └── services/             # Service category images (9 files)
├── lib/
│   └── categories.ts             # Category data and utilities
├── package.json                  # Dependencies
├── next.config.js                # Next.js configuration
├── tailwind.config.js            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

### All Files Are Committed:
- ✅ 99 files total in Git
- ✅ 61 image files committed
- ✅ All components and pages
- ✅ Configuration files
- ✅ Documentation files

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
NEXT_PUBLIC_PHONE=+918790260037
NEXT_PUBLIC_WHATSAPP=918790260037
```

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## License

This project is proprietary and confidential.

