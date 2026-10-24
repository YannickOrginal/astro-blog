# Projektkontext: Astro Blog

## Architektur & IT-Standards
- Framework: Astro 5
- Content Layer: Astro Content Collections (`src/content/blog/`)
- Styling: Tailwind CSS (Mobile-First, semantisches HTML, Dark-Mode-Support)
- Deployment-Ziel: Cloudflare Workers via GitHub CI/CD
- Qualitätsstandard: Strikte Typensicherheit, modulare Komponenten unter `src/components/`, saubere Trennung von Layout (`src/layouts/`) und Seiten (`src/pages/`).

## Entwicklungs-Server & Hintergrundprozesse
Wenn der Dev-Server gestartet oder geprüft werden soll, nutze immer den Background-Modus:
- Starten: `npx astro dev --background`
- Status prüfen: `npx astro dev status`
- Logs ansehen: `npx astro dev logs`
- Stoppen: `npx astro dev stop`

## Validierung vor Übergabe / Commit
Vor jedem Abschluss einer Aufgabe müssen folgende Befehle im Projektordner fehlerfrei durchlaufen:
1. Typ- & Astro-Check: `npx astro check`
2. Build-Verifizierung: `npm run build`

## Dokumentations-Referenzen
Ziehe diese Dokumentationen heran, bevor du an entsprechenden Bereichen arbeitest:
- Routing & Middleware: https://docs.astro.build/en/guides/routing/
- Astro-Komponenten: https://docs.astro.build/en/basics/astro-components/
- Framework-Komponenten (React/Vue/etc.): https://docs.astro.build/en/guides/framework-components/
- Content Collections: https://docs.astro.build/en/guides/content-collections/
- Styling & Tailwind: https://docs.astro.build/en/guides/styling/
- Internationalisierung (i18n): https://docs.astro.build/en/guides/internationalization/