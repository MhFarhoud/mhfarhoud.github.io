# MhFarhoud — Research & Technology Portfolio

A bilingual Persian / English portfolio built with React, TypeScript and the Next.js-compatible Vinext framework. Includes RTL/LTR layouts, research publications, expandable project studies, professional and teaching experience, recognition, an interactive research map and authentic profile links.

## Local development

```sh
npm install
npm run dev
```

## Content

Edit `data/profile.ts` to update biographical content, research, projects, experience and recognition. Layout and page sections live in `app/page.tsx`; the research map is in `components/research-network.tsx`. Visual tokens and responsive styles are in `app/globals.css`.

Content comes from the supplied résumé and design brief. LUXERA and the Computer Graphics diploma come from the design brief. No birth date, performance statistics, email address, LinkedIn profile or unpublished document scans were inferred. Project visuals are conceptual architecture diagrams, not performance results or screenshots.

Set `NEXT_PUBLIC_SITE_URL` to change the canonical origin when moving to a custom domain. Metadata and Person structured data are configured in the application. The current site uses private Sites hosting.

## Verification

`npx tsc --noEmit` checks TypeScript; `npm run build` creates production output. A local browser can be used to check language switching, project disclosures, mobile navigation and the research selector. Lighthouse target scores are design goals, not measured claims.
