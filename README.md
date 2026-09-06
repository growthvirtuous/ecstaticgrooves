# Ecstatic Grooves — sito Astro + Tina

Sito multipagina in **Astro**, bilingue IT/EN, pubblicato su **Netlify**, con **Tina** come pannello di modifica per Holly.

## Stato attuale
- ✅ Sito Astro multipagina, pubblicato su Netlify.
- ✅ **Eventi** e **Testimonial** sono ora contenuti editabili (`src/content/events/`, `src/content/testimonials/`), non più testo fisso nelle pagine.
- ✅ Tina configurato per modificare questi due contenuti (`tina/config.ts`).
- ⏳ **Blog**: i 3 articoli restano per ora pagine di codice (`src/pages/blog/*.astro`), non ancora editabili da Tina — sono HTML bilingue complesso; renderli editabili in modo solido è un passo successivo, per non rischiare di rompere il sito.

## Avvio in locale
```bash
npm install
npm run dev      # richiede TINA_CLIENT_ID e TINA_TOKEN in un file .env per il pannello /admin
npm run build    # genera il sito statico in /dist
```

## Come attivare Tina (una tantum)

1. **Su Netlify**: Site configuration → Environment variables → aggiungi:
   - `TINA_CLIENT_ID` = il Client ID da TinaCloud (progetto "ecstaticgrooves")
   - `TINA_TOKEN` = il Token da TinaCloud (stessa pagina, sotto "Content API tokens" o generato al setup)
2. **Ripubblica il sito su Netlify** (un nuovo deploy, o un push su GitHub che lo attiva da solo). La build ora esegue `tinacms build && astro build`: con le variabili impostate, Tina genera da sé i file necessari (incluso `tina-lock.json`) e il pannello diventa attivo.
3. Vai su **`https://ecstaticgrooves.netlify.app/admin`**, accedi con l'account TinaCloud (lo stesso con cui hai creato il progetto). Da lì Holly potrà modificare eventi e testimonial senza toccare codice.

## Come modificare eventi e testimonial (per Holly)
Dal pannello `/admin`:
- **Eventi**: apri "Eventi", scegli la data, modifica titolo (IT/EN), luogo, o incolla il nuovo link Ticket Tailor. Salva → il sito si aggiorna da solo in un minuto.
- **Testimonial**: apri "Testimonial", modifica citazione e autore, o aggiungine di nuovi con "New Testimonial".

## Struttura
- `src/pages/` — una pagina = una rotta reale: `/`, `/esperienza`, `/chi-siamo`, `/blog`, `/eventi`, e i 3 articoli sotto `/blog/...`
- `src/content/events/`, `src/content/testimonials/` — contenuti editabili da Tina (JSON)
- `src/content.config.ts` — schema di validazione di questi contenuti
- `tina/config.ts` — configurazione del pannello Tina (collezioni, campi)
- `src/layouts/Base.astro` — testa, meta/SEO, script (toggle lingua, FAQ, condivisione)
- `src/components/Nav.astro`, `Footer.astro` — navigazione e piè di pagina
- `src/styles/global.css` — tutto il design (palette, font, layout)
- `public/logo.svg` — il logo
- `netlify.toml` — configurazione di pubblicazione

## Prossimi passi possibili
- Rendere editabili anche i testi delle pagine (Home, Esperienza, Chi siamo) e gli articoli del blog.
- Sostituire i segnaposto grafici (viola) con foto e video reali.
- Aggiungere `og:image` per-articolo per anteprime social migliori.
