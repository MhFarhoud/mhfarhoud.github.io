# MhFarhoud — Research & Technology Portfolio

A bilingual Persian / English portfolio built with React, TypeScript and Next.js, with a Vinext-compatible local preview. Includes RTL/LTR layouts, research publications, expandable project studies, professional and teaching experience, recognition, an interactive research map and authentic profile links.

## Local development

```sh
npm install
npm run dev
```

## Content

Edit `data/profile.ts` to update biographical content, research, projects, experience and recognition. Layout and page sections live in `app/page.tsx`; the research map is in `components/research-network.tsx`. Visual tokens and responsive styles are in `app/globals.css`.

Content comes from the supplied résumé and design brief. Project names and descriptions were corrected against the public GitHub READMEs of project-cassandra, PAB-Persian-AI-Benchmark and SPSR. Education is displayed as an associate degree only, as requested by the portfolio owner. No birth date, performance statistics, email address, LinkedIn profile or unpublished document scans were inferred. Project visuals are conceptual architecture diagrams, not performance results or screenshots.

Set `NEXT_PUBLIC_SITE_URL` to change the canonical origin when moving to a custom domain. Metadata and Person structured data are configured in the application. The primary public site is https://mhfarhoud.github.io. The earlier private Sites deployment is a separate snapshot.

## Verification

`npx tsc --noEmit` checks TypeScript; `npm run build:pages` creates the static GitHub Pages output in `out/`. A local browser can be used to check language switching, project disclosures, mobile navigation and the research selector. Lighthouse target scores are design goals, not measured claims.

## GitHub Pages

The `.github/workflows/pages.yml` workflow builds and deploys the portfolio on every push to `main`. Repository Settings → Pages must use **GitHub Actions** as the publishing source. No hosting token or API secret is required.

```sh
npm ci
npm run build:pages
```

The output is static HTML, CSS and JavaScript; no Node.js server is needed on GitHub Pages. Social profile URLs are maintained in `data/profile.ts`.
