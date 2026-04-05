# SEO Action Plan — BOY NETTOYAGE PRO
**Generated:** 2026-03-30 | **Current score:** 34/100 | **Target:** 88/100

---

## CRITICAL — Do This Week

### 1. Fix "Eden Plaza Nettoyage" brand contamination
**Impact: CRITICAL | Time: 30 min**

Every one of your 25 service pages has the wrong company name in its `<title>` tag. Google is indexing "Eden Plaza Nettoyage" across your entire services section.

**Fix `app/services/[slug]/page.tsx` line ~20:**
```ts
// Before (WRONG):
title: `${service.title} | Eden Plaza Nettoyage - Nettoyage Professionnel au Maroc`,

// After (CORRECT):
title: `${service.title} | BOY NETTOYAGE PRO - Nettoyage Professionnel au Maroc`,
```

**Also fix `lib/services-detail-data.ts`** — every `intro` field starts with "Eden Plaza Nettoyage intervient...". Replace all 25 occurrences with "BOY NETTOYAGE PRO intervient...".

---

### 2. Create `app/robots.ts`
**Impact: CRITICAL | Time: 20 min**

```ts
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/'],
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://boynettoyagepro.ma/sitemap.xml',
  }
}
```

---

### 3. Create `app/sitemap.ts`
**Impact: CRITICAL | Time: 1 hr**

```ts
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { ALL_SERVICES } from '@/lib/services-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://boynettoyagepro.ma'
  const serviceUrls = ALL_SERVICES.map((s) => ({
    url: `${base}/services/${s.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/services`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/qui-sommes-nous`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    ...serviceUrls,
  ]
}
```

---

### 4. Fix canonical & `metadataBase` in `app/layout.tsx`
**Impact: CRITICAL | Time: 30 min**

Add `metadataBase` and fix the OG URL:
```ts
export const metadata: Metadata = {
  metadataBase: new URL('https://boynettoyagepro.ma'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: 'https://boynettoyagepro.ma', // keep as absolute or let metadataBase resolve it
    // ... rest unchanged
  },
}
```

Add per-page canonicals to `app/services/[slug]/page.tsx`:
```ts
return {
  alternates: { canonical: `/services/${slug}` },
  // ... rest of metadata
}
```

---

### 5. Fix years-of-experience inconsistency
**Impact: HIGH | Time: 10 min**

In `lib/utils.ts`:
```ts
// Change:
export const YEARS_EXPERIENCE = "8+";
// To:
export const YEARS_EXPERIENCE = "10+";
```

In `components/about/KeyFigures.tsx`: remove the hardcoded `"10+"` string and use the `YEARS_EXPERIENCE` constant.

---

## HIGH — Fix Within 1 Week

### 6. Add LocalBusiness JSON-LD schema to `app/layout.tsx`
**Impact: HIGH | Time: 2 hr**

Create `app/components/SchemaScript.tsx`:
```tsx
// app/components/SchemaScript.tsx
export default function SchemaScript({ schema }: { schema: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

Add to `app/layout.tsx` inside `<head>`:
```tsx
import SchemaScript from '@/components/SchemaScript'

// In RootLayout, inside <html><head>:
<SchemaScript schema={[
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "CleaningService"],
    "@id": "https://boynettoyagepro.ma/#business",
    "name": "BOY NETTOYAGE PRO",
    "url": "https://boynettoyagepro.ma/",
    "telephone": ["+212661408577", "+212661538507", "+212522980621"],
    "email": "boynettoyagepro@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "30 rue Abou Ishak Chirazi, Etage 2",
      "addressLocality": "Casablanca",
      "addressRegion": "Casablanca-Settat",
      "postalCode": "20100",
      "addressCountry": "MA"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 33.5731, "longitude": -7.5898 },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "bestRating": "5",
      "reviewCount": "20000"
    },
    "slogan": "La propreté au service de votre confort et de votre image",
    "priceRange": "MAD",
    "areaServed": [
      { "@type": "City", "name": "Casablanca" },
      { "@type": "City", "name": "Rabat" },
      { "@type": "City", "name": "Marrakech" },
      { "@type": "Country", "name": "Maroc" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://boynettoyagepro.ma/#website",
    "name": "BOY NETTOYAGE PRO",
    "url": "https://boynettoyagepro.ma/",
    "inLanguage": "fr"
  }
]} />
```

---

### 7. Add `Service` + `BreadcrumbList` schema to service pages
**Impact: HIGH | Time: 2 hr**

In `app/services/[slug]/page.tsx`, inside `generateMetadata` or as a server component:
```tsx
<SchemaScript schema={[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://boynettoyagepro.ma/services/${service.slug}#service`,
    "name": service.title,
    "description": service.description,
    "provider": { "@id": "https://boynettoyagepro.ma/#business" },
    "areaServed": { "@type": "Country", "name": "Maroc" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://boynettoyagepro.ma/" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://boynettoyagepro.ma/services" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://boynettoyagepro.ma/services/${service.slug}` }
    ]
  }
]} />
```

---

### 8. Fix Twitter card and add OG image
**Impact: HIGH | Time: 30 min**

In `app/layout.tsx`:
```ts
twitter: {
  card: 'summary_large_image',
  title: 'BOY NETTOYAGE PRO | Nettoyage & Hygiène Professionnelle',
  description: 'Services premium de nettoyage à Casablanca et tout le Maroc.',
  images: ['https://boynettoyagepro.ma/og-image.jpg'],
},
openGraph: {
  // ... existing fields ...
  images: [{ url: 'https://boynettoyagepro.ma/og-image.jpg', width: 1200, height: 630 }],
},
```

Create an OG image (`1200×630px`) and place it at `public/og-image.jpg`.

---

### 9. Fix Footer internal links
**Impact: HIGH | Time: 30 min**

In `components/Footer.tsx`, change the services list to link to actual service pages:
```tsx
// Replace the static services array and href="/#services"
// with links to actual service slugs from ALL_SERVICES
import { ALL_SERVICES } from '@/lib/services-data'

const featuredServices = ALL_SERVICES.slice(0, 6)

// In JSX:
{featuredServices.map((service) => (
  <li key={service.id}>
    <Link href={`/services/${service.id}`} ...>
      {service.title}
    </Link>
  </li>
))}
```

---

### 10. Fix `tel:` href format to E.164
**Impact: MEDIUM | Time: 20 min**

In `lib/utils.ts`, ensure phone constants use E.164 without spaces:
```ts
export const PHONE_MAIN_HREF = "+212661408577";
export const PHONE_SECONDARY_HREF = "+212661538507";
export const PHONE_FIXED_HREF = "+212522980621";
```

Use these in `Footer.tsx` and `B2BContactSection.tsx` for `href="tel:{PHONE_MAIN_HREF}"`.

---

### 11. Set up Google Business Profile
**Impact: CRITICAL for local pack | Time: 2 hr**

1. Go to https://business.google.com and claim/create the listing
2. Category: "Entreprise de nettoyage" (primary) + "Service de dératisation" (secondary)
3. Add all 3 phone numbers, address, website URL, hours (24/7), and photos
4. Once verified, embed Google Maps in the contact section of the site
5. Add a "Voir nos avis Google" call-to-action button

---

## MEDIUM — Fix Within 1 Month

### 12. Convert components from `"use client"` to server components
**Impact: HIGH for crawlability | Time: 4–8 hr**

Remove `"use client"` from these components (they have no browser-only logic):
- `components/TestimonialsSection.tsx`
- `components/CTASection.tsx`
- `components/BeforeAfterSection.tsx` (make slider interactive part a small child component)
- `components/about/KeyFigures.tsx`
- `components/about/AboutTimeline.tsx`
- `components/TrustBar.tsx`

Keep `"use client"` only for:
- `components/Navbar.tsx` (scroll listener)
- `components/DevisForm.tsx` (form state)
- `components/ScrollReveal.tsx` (IntersectionObserver)
- `components/ServiceDetailPageContent.tsx` (FAQ accordion)

**Key refactor:** Make `ScrollReveal` wrap static server-rendered children rather than requiring parents to be `"use client"`:
```tsx
// ScrollReveal.tsx stays "use client"
// Parent components become server components
// ScrollReveal wraps their children as a thin client shell
```

---

### 13. Pre-optimize service images
**Impact: HIGH for performance | Time: 2 hr**

Convert all 24 PNG files in `public/services/` to WebP format:
- Target size: <100KB per image (current avg: ~2.3MB)
- Use `cwebp` CLI or Squoosh.app
- Example: `Dératisation.png` (3.5 MB) → `Dératisation.webp` (~80 KB) = 97.7% reduction
- Update image `src` references in `lib/services-data.ts` to `.webp` extensions

---

### 14. Replace Unsplash hero image with local branded asset
**Impact: MEDIUM for LCP + branding | Time: 1 hr**

Replace in `components/HeroSection.tsx`:
```tsx
// Before:
src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"

// After:
src="/images/hero-team.webp"
```

Use a real photo of your team or equipment for better brand authenticity.

---

### 15. Create `public/llms.txt`
**Impact: MEDIUM for AI search | Time: 1 hr**

```markdown
# BOY NETTOYAGE PRO

> Services premium de nettoyage professionnel à Casablanca et dans tout le Maroc.

BOY NETTOYAGE PRO est une entreprise de nettoyage et d'hygiène professionnelle basée à Casablanca, Maroc. Fondée en 2016, l'entreprise propose 25 services de nettoyage résidentiel, commercial et industriel, ainsi que la dératisation, désinsectisation et cristallisation du marbre.

## Contact
- Adresse : 30 rue Abou Ishak Chirazi, Etage 2, Maarif, Casablanca, Maroc
- Téléphone : +212 6 61 40 85 77
- Email : boynettoyagepro@gmail.com
- Disponibilité : 24h/24, 7j/7

## Services principaux
- /services/nettoyage-appartements-villas
- /services/nettoyage-bureaux
- /services/nettoyage-de-chantier
- /services/deratisation
- /services/cristallisation-marbre-parquet
- /services (liste complète des 25 services)

## À propos
- /qui-sommes-nous
```

---

## LOW — Backlog

| # | Task | Why |
|---|------|-----|
| 20 | Create `/faq` page with 10–15 Q&A in French | Highest AI citation yield per hour of work |
| 21 | Build `/nettoyage-casablanca` location page | #1 local organic ranking factor |
| 22 | Create Facebook Business Page + link from footer | Dominant trust signal in Morocco market |
| 23 | Add IndexNow key to `public/` + Vercel deploy hook | Instant Bing/Yandex indexing on deploy |
| 24 | Add `apple-touch-icon` + `manifest.json` + `theme-color` | Mobile home screen / PWA baseline |
| 25 | Add `AggregateRating` schema + link to Google Reviews | Make the "5/5" claim verifiable |

---

## Score Projection

| After completing... | Score |
|--------------------|-------|
| Tasks 1–5 (Critical) | ~48/100 |
| Tasks 1–11 (Critical + High) | ~65/100 |
| Tasks 1–19 (Critical + High + Medium) | ~78/100 |
| Tasks 1–25 (All) | ~88/100 |

---

*Action plan generated: 2026-03-30*
