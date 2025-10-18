# Artofdent Website - Professional Dental Care in Malmö

A modern, SEO-optimized website for Artofdent and ABC Tandklinikgruppen dental clinics in Malmö, Sweden. Built with Next.js 14, TypeScript, and Tailwind CSS, featuring a headless CMS with Sanity.

## 🏥 Project Overview

This website serves two dental clinics under one professional brand experience:
- **Artofdent Malmö** - Primary clinic
- **ABC Tandklinikgruppen** - Partner clinic

### Key Features
- 🎨 **Professional Design** - Inspired by Aqua Dental's clean, modern aesthetic
- 🏥 **Clinic Selector** - Seamless switching between clinics
- 📱 **Responsive Design** - Mobile-first approach with perfect desktop experience
- 🔍 **SEO Optimized** - Local search optimization for Malmö keywords
- 🌐 **Multi-language Ready** - Swedish primary, Danish expansion ready
- 📊 **Analytics Ready** - Google Analytics 4 & Tag Manager integration
- ♿ **Accessible** - WCAG AA compliant
- ⚡ **Performance First** - Lighthouse score ≥90

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account (for CMS)

### Installation

1. **Clone and install dependencies:**
```bash
cd artofdent-website
npm install
```

2. **Environment Setup:**
```bash
cp env.example .env.local
```

3. **Configure environment variables:**
```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Analytics
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Site URLs
NEXT_PUBLIC_SITE_URL=https://artofdent.se
NEXT_PUBLIC_SITE_URL_DK=https://artofdent.dk
```

4. **Start development server:**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the website.

## 🏗️ Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **CMS:** Sanity (headless)
- **Icons:** Heroicons
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)
- **Analytics:** Google Analytics 4 + GTM

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── boka-tid/          # Booking page
│   ├── behandlingar/      # Treatments pages
│   ├── klinik/           # Individual clinic pages
│   └── layout.tsx        # Root layout
├── components/           # Reusable components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── ClinicSelector.tsx # Clinic selection modal
│   ├── ServicesGrid.tsx # Services overview
│   └── Footer.tsx       # Site footer
├── lib/                 # Utilities and configurations
│   └── sanity.ts       # Sanity client and queries
sanity/                  # Sanity CMS schema
├── schemas/            # Content type definitions
│   ├── clinic.ts      # Clinic content type
│   ├── service.ts     # Service content type
│   ├── teamMember.ts  # Team member content type
│   └── ...
```

## 🎯 SEO & Local Search Optimization

### Target Keywords
- `tandläkare malmö`
- `tandimplantat malmö` 
- `akut tandvård malmö`
- `tandblekning malmö`
- `tandvård malmö`

### SEO Features
- ✅ Structured data (LocalBusiness, Dentist schema)
- ✅ Optimized meta titles and descriptions
- ✅ XML sitemap generation
- ✅ Robots.txt configuration
- ✅ Hreflang for Swedish/Danish versions
- ✅ Local business schema for each clinic
- ✅ FAQ schema implementation

## 🏥 Clinic Management

### Adding a New Clinic
1. Create clinic entry in Sanity CMS
2. Add clinic data to `ClinicSelector.tsx`
3. Create clinic-specific page in `/klinik/[slug]`
4. Update footer with clinic information

### Booking Integration
- Supports multiple booking providers (Doctena, TimeCenter)
- Fallback to custom contact form
- Clinic-specific booking URLs
- Email notifications to clinic staff

## 🌐 Multi-language Support

### Swedish (Primary)
- Domain: `artofdent.se`
- Language code: `sv-SE`
- Default content language

### Danish (Expansion)
- Domain: `artofdent.dk` 
- Language code: `da-DK`
- Highlights transport reimbursement for Danish patients
- Hreflang implementation ready

## 📊 Analytics & Tracking

### Google Analytics 4 Events
- `page_view` - Page visits
- `booking_initiated` - Booking form started
- `booking_completed` - Booking form submitted
- `contact_form_submitted` - Contact form submissions
- `phone_call_click` - Phone number clicks

### Google Tag Manager
- Container ready for additional tracking
- Conversion tracking setup
- Custom event definitions

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel:**
```bash
npm install -g vercel
vercel
```

2. **Configure environment variables in Vercel dashboard**

3. **Set up custom domains:**
   - `artofdent.se` (primary)
   - `artofdent.dk` (Danish version)

### Manual Deployment
```bash
npm run build
npm run start
```

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # TypeScript checking

# Testing
npm run test         # Run tests
npm run test:e2e     # End-to-end tests with Playwright
```

## 📝 Content Management

### Sanity Studio
Access the CMS at: `https://your-project.sanity.studio`

### Content Types
- **Clinics** - Clinic information, location, staff
- **Services** - Treatment descriptions, pricing
- **Team Members** - Staff profiles, specialties
- **Blog Posts** - SEO content, news updates
- **Testimonials** - Patient reviews
- **FAQs** - Common questions by category

## 🎨 Design System

### Colors
- **Primary Blue:** `#0ea5e9` (Aqua Dental inspired)
- **Accent Gold:** `#f59e0b` (CTA buttons)
- **Coral Red:** `#ef4444` (Emergency/urgent)
- **Neutral Grays:** `#737373` to `#171717`

### Typography
- **Font:** Inter (Google Fonts)
- **Headings:** Bold, large scale
- **Body:** Regular, optimized for readability

## 🔒 Security & Privacy

- GDPR compliant cookie management
- Secure form submissions
- Environment variable protection
- Input sanitization
- HTTPS enforcement

## 📱 Performance

### Lighthouse Targets
- **Performance:** ≥90
- **Accessibility:** ≥90  
- **Best Practices:** ≥90
- **SEO:** ≥90

### Optimizations
- Image optimization with Next.js Image
- Font optimization with Google Fonts
- Code splitting and lazy loading
- Critical CSS inlining

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📞 Support

For technical support or questions:
- **Email:** dev@artofdent.se
- **Documentation:** Check `/docs` folder
- **Issues:** GitHub Issues tab

## 📄 License

This project is proprietary software for Artofdent and ABC Tandklinikgruppen.

---

**Built with ❤️ for professional dental care in Malmö**
