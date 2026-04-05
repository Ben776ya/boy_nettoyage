# Fix All Build Errors Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix every build error and ESLint error so `next build` and `eslint .` pass cleanly on a fresh clone (without Vercel env vars).

**Architecture:** The only runtime build error is Supabase crashing during static page collection because env vars are missing. We fix this by making the Supabase client creation safe when env vars are absent (fallback to empty strings with a warning). ESLint errors fall into two buckets: (1) `<a href="/#...">` used instead of `<Link>` for internal routes, and (2) unused imports. We also remove 4 orphaned component files that are never imported.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Supabase, ESLint

---

### Task 1: Make Supabase client safe when env vars are missing

**Files:**
- Modify: `lib/supabase.ts`

- [ ] **Step 1: Update `lib/supabase.ts` to handle missing env vars gracefully**

Replace the entire file content with:

```ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn(
    "Missing Supabase env vars (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY). " +
    "API routes that use Supabase will not work until they are set."
  );
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);
```

- [ ] **Step 2: Create `.env.example` for documentation**

Create file `.env.example`:

```
NEXT_PUBLIC_SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_PASSWORD=
```

- [ ] **Step 3: Verify build no longer crashes**

Run: `npx next build 2>&1 | tail -5`
Expected: Build completes (may show warnings about missing env, but no crash)

- [ ] **Step 4: Commit**

```bash
git add lib/supabase.ts .env.example
git commit -m "fix: handle missing Supabase env vars to allow build without .env.local"
```

---

### Task 2: Fix ESLint errors — replace `<a href="/#...">` with `<Link>`

Every `<a>` tag linking to an internal route (`/#devis`, `/#resultats`, `/#contact`, `/#services`) must use `<Link>` from `next/link`. The pattern is the same in every file: change `<a href="/#...">` to `<Link href="/#...">` and `</a>` to `</Link>`. Also add the `Link` import if not already present.

**Files:**
- Modify: `components/Navbar.tsx` (lines 88, 142)
- Modify: `components/ServicesCarousel.tsx` (line 158)
- Modify: `components/ServicesPageContent.tsx` (line 150)
- Modify: `components/B2BContactSection.tsx` (line 244)
- Modify: `components/about/AboutHeader.tsx` (line 74)
- Modify: `components/about/AboutCTA.tsx` (line 35)
- Modify: `components/about/KeyFigures.tsx` (line 99)

- [ ] **Step 1: Fix `components/Navbar.tsx`**

Line 88 — change:
```tsx
<a
  href="/#devis"
  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white text-sm font-medium shadow-lg shadow-green-cta/30 hover:shadow-xl hover:shadow-green-cta/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
>
  Devis gratuit
  <ArrowRight className="w-4 h-4" />
</a>
```
to:
```tsx
<Link
  href="/#devis"
  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white text-sm font-medium shadow-lg shadow-green-cta/30 hover:shadow-xl hover:shadow-green-cta/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine"
>
  Devis gratuit
  <ArrowRight className="w-4 h-4" />
</Link>
```

Line 142 — change:
```tsx
<a
  href="/#devis"
  onClick={() => setIsMobileMenuOpen(false)}
  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white text-sm font-medium shadow-lg"
>
  Devis gratuit
  <ArrowRight className="w-4 h-4" />
</a>
```
to:
```tsx
<Link
  href="/#devis"
  onClick={() => setIsMobileMenuOpen(false)}
  className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-gradient-to-r from-green-cta to-emerald-600 text-white text-sm font-medium shadow-lg"
>
  Devis gratuit
  <ArrowRight className="w-4 h-4" />
</Link>
```

- [ ] **Step 2: Fix `components/ServicesCarousel.tsx`**

Line 158 — change:
```tsx
<a
  href="/#devis"
  className={`group/btn w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine cursor-pointer`}
>
  Demander un devis
  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
</a>
```
to:
```tsx
<Link
  href="/#devis"
  className={`group/btn w-full py-3 rounded-xl bg-gradient-to-r ${service.color} text-white text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 btn-shine cursor-pointer`}
>
  Demander un devis
  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
</Link>
```

Also add `Link` import: change `import { ArrowRight, Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";` — `Link` is already imported from `next/link` on line 5, so no import change needed.

- [ ] **Step 3: Fix `components/ServicesPageContent.tsx`**

Line 150 — change:
```tsx
<a
  href="/#devis"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary-navy font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
>
  Demander un devis gratuit
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
```
to:
```tsx
<Link
  href="/#devis"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-primary-navy font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
>
  Demander un devis gratuit
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Link>
```

`Link` is already imported on line 4.

- [ ] **Step 4: Fix `components/B2BContactSection.tsx`**

Line 244 — change:
```tsx
<a
  href="/#devis"
  className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-bright-blue font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl whitespace-nowrap group"
>
  Demander un devis
  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
</a>
```
to:
```tsx
<Link
  href="/#devis"
  className="relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-bright-blue font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl whitespace-nowrap group"
>
  Demander un devis
  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
</Link>
```

Add `Link` import at the top of file. Add: `import Link from "next/link";`

- [ ] **Step 5: Fix `components/about/AboutHeader.tsx`**

Line 74 — change:
```tsx
<a
  href="/#devis"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-bright-blue text-white font-semibold shadow-lg shadow-bright-blue/30 hover:shadow-xl hover:shadow-bright-blue/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine group"
>
  Demander un devis
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</a>
```
to:
```tsx
<Link
  href="/#devis"
  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-bright-blue text-white font-semibold shadow-lg shadow-bright-blue/30 hover:shadow-xl hover:shadow-bright-blue/40 transition-all duration-300 hover:-translate-y-0.5 btn-shine group"
>
  Demander un devis
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</Link>
```

Add `Link` import: `import Link from "next/link";`

- [ ] **Step 6: Fix `components/about/AboutCTA.tsx`**

Read this file first, then replace the `<a href="/#devis">` with `<Link href="/#devis">` and add `Link` import.

- [ ] **Step 7: Fix `components/about/KeyFigures.tsx`**

Read this file first, then replace the `<a href="/#devis">` with `<Link href="/#devis">` and add `Link` import.

- [ ] **Step 8: Verify ESLint `no-html-link-for-pages` errors are gone**

Run: `npx eslint . 2>&1 | grep "no-html-link-for-pages"`
Expected: No output (all errors fixed)

- [ ] **Step 9: Commit**

```bash
git add components/Navbar.tsx components/ServicesCarousel.tsx components/ServicesPageContent.tsx components/B2BContactSection.tsx components/about/AboutHeader.tsx components/about/AboutCTA.tsx components/about/KeyFigures.tsx
git commit -m "fix: replace <a> with <Link> for internal routes (ESLint no-html-link-for-pages)"
```

---

### Task 3: Fix ESLint warnings — remove unused imports

**Files:**
- Modify: `components/AboutHeader.tsx` (root-level orphan — handled in Task 4)
- Modify: `components/ServicesSection.tsx` (line 10: unused `Shield`)
- Modify: `components/TestimonialsSection.tsx` (line 4: unused `COMPANY_NAME`)
- Modify: `components/about/AboutTimeline.tsx` (line 3: unused `Users`, `CheckCircle`)
- Modify: `lib/services-data.ts` (line 7: unused `Users`)

- [ ] **Step 1: Fix `components/ServicesSection.tsx` — remove unused `Shield` import**

Change line 10 from:
```tsx
import {
  Home,
  Building2,
  Factory,
  Hotel,
  Sparkles,
  Shield,
  Users,
  Wrench,
  ArrowRight,
  Check,
  Bug,
  Gem,
  CalendarDays,
} from "lucide-react";
```
to:
```tsx
import {
  Home,
  Building2,
  Factory,
  Hotel,
  Sparkles,
  Users,
  Wrench,
  ArrowRight,
  Check,
  Bug,
  Gem,
  CalendarDays,
} from "lucide-react";
```

- [ ] **Step 2: Fix `components/TestimonialsSection.tsx` — remove unused `COMPANY_NAME`**

Change line 4 from:
```tsx
import { TESTIMONIALS, COMPANY_NAME } from "@/lib/utils";
```
to:
```tsx
import { TESTIMONIALS } from "@/lib/utils";
```

- [ ] **Step 3: Fix `components/about/AboutTimeline.tsx` — remove unused `Users` and `CheckCircle`**

Read the file, then remove `Users` and `CheckCircle` from the lucide-react import.

- [ ] **Step 4: Fix `lib/services-data.ts` — remove unused `Users` import**

Change the import block (line 1-20) — remove `Users` from the lucide-react imports.

- [ ] **Step 5: Verify all ESLint warnings are gone**

Run: `npx eslint . 2>&1 | grep "no-unused-vars"`
Expected: No output (all warnings fixed, except possibly from orphaned files handled in Task 4)

- [ ] **Step 6: Commit**

```bash
git add components/ServicesSection.tsx components/TestimonialsSection.tsx components/about/AboutTimeline.tsx lib/services-data.ts
git commit -m "fix: remove unused imports (ESLint no-unused-vars)"
```

---

### Task 4: Delete orphaned component files

These 4 files in `components/` are never imported by any page or component. They appear to be older versions superseded by files in `components/about/`:

- `components/AboutHeader.tsx` (replaced by `components/about/AboutHeader.tsx`)
- `components/MissionSection.tsx` (not used anywhere)
- `components/Timeline.tsx` (replaced by `components/about/AboutTimeline.tsx`)
- `components/ValuesSection.tsx` (replaced by `components/about/AboutValues.tsx`)

- [ ] **Step 1: Confirm files are truly unused**

Run: `grep -r "from.*components/AboutHeader\|from.*components/MissionSection\|from.*components/Timeline\|from.*components/ValuesSection" --include="*.tsx" --include="*.ts" .`
Expected: No output (confirming no file imports these)

- [ ] **Step 2: Delete the orphaned files**

```bash
rm components/AboutHeader.tsx components/MissionSection.tsx components/Timeline.tsx components/ValuesSection.tsx
```

- [ ] **Step 3: Verify ESLint is now fully clean**

Run: `npx eslint .`
Expected: `0 problems` (or only remaining non-error warnings if any)

- [ ] **Step 4: Commit**

```bash
git add -u components/AboutHeader.tsx components/MissionSection.tsx components/Timeline.tsx components/ValuesSection.tsx
git commit -m "chore: remove orphaned component files (never imported)"
```

---

### Task 5: Final verification — full build passes

- [ ] **Step 1: Run full build**

Run: `npx next build 2>&1 | tail -10`
Expected: `✓ Compiled successfully` and `✓ Generating static pages` (build completes without errors)

- [ ] **Step 2: Run ESLint**

Run: `npx eslint .`
Expected: 0 errors, 0 warnings

- [ ] **Step 3: Run TypeScript check**

Run: `npx tsc --noEmit`
Expected: No output (clean)
