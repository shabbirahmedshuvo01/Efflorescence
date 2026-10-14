# Efflorescence — Luxury Florist Website Prototype

An editorial, responsive website redesign for **Efflorescence**, an award-winning independent florist studio based in Barrow-in-Furness, Cumbria.

## Overview

This repository contains the homepage prototype showcasing bespoke wedding floristry, hand-tied gift bouquets, seasonal floral workshops, and compassionate bereavement tributes.

* **Studio Location:** 4 Napier Street, Barrow-in-Furness, Cumbria, LA14 5SZ
* **Primary Palette:** Botanical Forest Green (`#263B2D`), Warm Linen (`#FBF9F5`), Soft Eucalyptus (`#8A9A86`), Terracotta (`#C48273`), and Deep Charcoal (`#242220`).
* **Typography:** Cormorant Garamond (editorial serif headings) and Plus Jakarta Sans (clean geometric body).

## Technology Stack

* **Framework:** [Next.js](https://nextjs.org/) 16 (App Router with Turbopack)
* **Library:** [React](https://react.dev/) 19
* **Language:** [TypeScript](https://www.typescriptlang.org/) 5 (Strict mode)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
* **Icons:** [Lucide React](https://lucide.dev/)

## Project Structure

```
├── public/                 # Static public assets & favicons
├── src/
│   ├── app/                # App router (layout.tsx, page.tsx, globals.css)
│   ├── components/
│   │   ├── layout/         # AnnouncementBar, Navbar, Footer
│   │   ├── sections/       # Hero, Trust, FeaturedProducts, Weddings,
│   │   │                   # Workshops, Bereavement, Parties, About, Contact
│   │   └── ui/             # Button, Badge, ProductCard, PackageCard
│   ├── data/               # Business information, products, navigation, workshops
│   └── types/              # TypeScript interface definitions
├── next.config.ts          # Next.js configuration & security headers
├── tsconfig.json           # TypeScript configuration
└── package.json            # Scripts & project dependencies
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev -- -p 3001
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 3. Verification & Build Commands
```bash
# Type check
npx tsc --noEmit

# Code linting
npm run lint

# Production build
npm run build
```

## Security & Architecture Highlights

* **Server Components by Default:** Layout and static narrative sections are rendered server-side. `"use client"` is isolated to interactive components (category filtering, mobile drawer, interactive enquiry form).
* **Hardened Headers:** Configured `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`, and `poweredByHeader: false`.
* **Zero External Tracking:** No unverified third-party analytics, payment scripts, or external iframe dependencies.
* **Accessible & Motion-Aware:** Accessible skip link, clear `focus-visible` ring indicators, semantic HTML5 landmarks, and full `@media (prefers-reduced-motion: reduce)` support.

## Prototype Boundaries

This build is a front-end client presentation prototype. In this phase:
* Cart and quick-order interactions trigger local prototype preview states; checkout and payment processing are not connected to a live merchant account.
* Studio enquiry forms simulate submission feedback without transmitting personal customer data.
* Business claims and pricing reflect public studio information and require final client sign-off before full production launch.
# Efflorescence
