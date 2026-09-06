# Ecstatic Grooves — sito Astro

Sito multipagina in **Astro**, bilingue IT/EN, pronto per la pubblicazione su **Netlify**.
Questa è la **Fase 1**: la conversione del template in un progetto Astro vero (design, contenuti, rotte reali per SEO). La **Fase 2** aggiunge le collection di contenuti e il CMS **Tina** perché Holly possa modificare tutto da sola.

## Avvio in locale
```bash
npm install
npm run dev      # apri http://localhost:4321
npm run build    # genera il sito statico in /dist
```

## Struttura
- `src/pages/` — una pagina = una rotta reale: `/`, `/esperienza`, `/chi-siamo`, `/blog`, `/eventi`, e i 3 articoli sotto `/blog/...`
- `src/layouts/Base.astro` — testa, meta/SEO, script (toggle lingua, FAQ, condivisione)
- `src/components/Nav.astro`, `Footer.astro` — navigazione e piè di pagina
- `src/styles/global.css` — tutto il design (palette, font, layout)
- `public/logo.svg` — il logo
- `netlify.toml` — configurazione di pubblicazione

## Pubblicazione (GitHub → Netlify)
1. Crea un repository su GitHub e caricaci questa cartella (senza `node_modules` e `dist`).
2. Su Netlify: **Add new site → Import from Git**, scegli il repo. Netlify legge `netlify.toml` (build: `npm run build`, publish: `dist`). Deploy.
3. Dominio: **Domain settings → Add custom domain** `ecstaticgrooves.com`, poi punta il DNS da GoDaddy a Netlify (Netlify ti dà i record esatti).

## Fase 2 — contenuti editabili + Tina (prossimo passo)
Oggi i testi vivono dentro le pagine `.astro`. Per farli modificare a Holly senza codice, in Fase 2 spostiamo i contenuti più editati (eventi, testimonial, articoli, foto) in **collection** di contenuti e colleghiamo **Tina**: Holly entra in un pannello visivo, modifica, salva → Tina scrive su GitHub → Netlify ripubblica. Vedi `tina/config.ts` per lo schema di riferimento.

## Note
- Immagini e video sono **segnaposto grafici** (SVG viola) + il video hero da Mixkit: vanno sostituiti con foto/video reali vostri (in Fase 2 diventano caricabili dal CMS).
- Il cambio lingua è lato client con memoria (localStorage). In Fase 2 possiamo passare a URL separati per lingua (`/en/...`) per una SEO ancora migliore.
