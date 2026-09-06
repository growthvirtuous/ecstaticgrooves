// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [
      {
        name: "event",
        label: "Eventi",
        path: "src/content/events",
        format: "json",
        fields: [
          { type: "string", name: "day", label: "Giorno (es. 19)", required: true },
          { type: "string", name: "monthLabel", label: "Etichetta (es. Sab \xB7 Set)", required: true },
          { type: "string", name: "titleIt", label: "Titolo \u2014 IT (es. Rising Harvest Moon)", required: true },
          { type: "string", name: "titleEn", label: "Titolo \u2014 EN", required: true },
          { type: "string", name: "venue", label: "Luogo", required: true },
          { type: "string", name: "ticketUrl", label: "Link biglietti (Ticket Tailor)", required: true }
        ]
      },
      {
        name: "testimonial",
        label: "Testimonial",
        path: "src/content/testimonials",
        format: "json",
        fields: [
          { type: "string", name: "quote", label: "Citazione", ui: { component: "textarea" }, required: true },
          { type: "string", name: "author", label: "Autore / handle \xB7 data", required: true },
          {
            type: "number",
            name: "rating",
            label: "Stelle (1-5)",
            required: true,
            ui: {
              validate: (value) => {
                if (value === void 0 || value === null) return;
                if (value < 1 || value > 5) return "Inserisci un numero da 1 a 5";
              }
            }
          }
        ]
      },
      {
        name: "siteImages",
        label: "Immagini del sito",
        path: "src/content/site",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          { type: "image", name: "heroPoster", label: "Home \u2014 copertina video hero" },
          { type: "image", name: "homeStory", label: "Home \u2014 foto della serata" },
          { type: "image", name: "experienceBody", label: "L'esperienza \u2014 corpo in movimento" },
          { type: "image", name: "experienceMusic", label: "L'esperienza \u2014 la console / DJ" },
          { type: "image", name: "aboutStory", label: "Chi siamo \u2014 foto Holly e Felippe" },
          { type: "image", name: "aboutEarthpercentBadge", label: "Chi siamo \u2014 badge EarthPercent" },
          { type: "image", name: "eventsLocation", label: "Eventi \u2014 foto OfficinAcrobatica" },
          { type: "image", name: "eventsFirstTime", label: "Eventi \u2014 foto sala / luogo" },
          { type: "image", name: "blogCoverPillar", label: "Blog \u2014 copertina \xABEcstatic Dance a Bologna\xBB" },
          { type: "image", name: "blogCoverHome", label: "Blog \u2014 copertina \xABRitrovare la strada di casa\xBB" },
          { type: "image", name: "blogCoverPlanet", label: "Blog \u2014 copertina \xABDanzare per il pianeta\xBB" }
        ]
      },
      {
        name: "homeText",
        label: "Testi \u2014 Home",
        path: "src/content/home",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false }
        },
        fields: [
          {
            type: "object",
            name: "hero",
            label: "Sezione principale (hero)",
            fields: [
              { type: "string", name: "eyebrowIt", label: "Occhiello \u2014 IT" },
              { type: "string", name: "eyebrowEn", label: "Occhiello \u2014 EN" },
              { type: "string", name: "titleIt", label: "Titolo \u2014 IT (pu\xF2 contenere <span class='serif-i'>...</span>)", ui: { component: "textarea" } },
              { type: "string", name: "titleEn", label: "Titolo \u2014 EN (pu\xF2 contenere <span class='serif-i'>...</span>)", ui: { component: "textarea" } },
              { type: "string", name: "subIt", label: "Sottotitolo \u2014 IT", ui: { component: "textarea" } },
              { type: "string", name: "subEn", label: "Sottotitolo \u2014 EN", ui: { component: "textarea" } },
              { type: "string", name: "ctaPrimaryIt", label: "Pulsante 1 \u2014 IT (es. Biglietti)" },
              { type: "string", name: "ctaPrimaryEn", label: "Pulsante 1 \u2014 EN" },
              { type: "string", name: "ctaSecondaryIt", label: "Pulsante 2 \u2014 IT" },
              { type: "string", name: "ctaSecondaryEn", label: "Pulsante 2 \u2014 EN" }
            ]
          },
          {
            type: "object",
            name: "whatWeDo",
            label: "Sezione \xABCosa facciamo\xBB",
            fields: [
              { type: "string", name: "eyebrowIt", label: "Occhiello \u2014 IT" },
              { type: "string", name: "eyebrowEn", label: "Occhiello \u2014 EN" },
              { type: "string", name: "titleIt", label: "Titolo \u2014 IT" },
              { type: "string", name: "titleEn", label: "Titolo \u2014 EN" },
              { type: "string", name: "leadIt", label: "Primo paragrafo \u2014 IT", ui: { component: "textarea" } },
              { type: "string", name: "leadEn", label: "Primo paragrafo \u2014 EN", ui: { component: "textarea" } },
              { type: "string", name: "bodyIt", label: "Secondo paragrafo \u2014 IT", ui: { component: "textarea" } },
              { type: "string", name: "bodyEn", label: "Secondo paragrafo \u2014 EN", ui: { component: "textarea" } },
              { type: "string", name: "linkTextIt", label: "Testo del link \u2014 IT" },
              { type: "string", name: "linkTextEn", label: "Testo del link \u2014 EN" }
            ]
          },
          {
            type: "object",
            name: "testimonials",
            label: "Sezione testimonianze (titolo)",
            fields: [
              { type: "string", name: "eyebrowIt", label: "Occhiello \u2014 IT" },
              { type: "string", name: "eyebrowEn", label: "Occhiello \u2014 EN" },
              { type: "string", name: "titleIt", label: "Titolo \u2014 IT" },
              { type: "string", name: "titleEn", label: "Titolo \u2014 EN" }
            ]
          },
          {
            type: "object",
            name: "newsletter",
            label: "Sezione newsletter",
            fields: [
              { type: "string", name: "eyebrowIt", label: "Occhiello \u2014 IT" },
              { type: "string", name: "eyebrowEn", label: "Occhiello \u2014 EN" },
              { type: "string", name: "titleIt", label: "Titolo \u2014 IT" },
              { type: "string", name: "titleEn", label: "Titolo \u2014 EN" },
              { type: "string", name: "bodyIt", label: "Testo \u2014 IT", ui: { component: "textarea" } },
              { type: "string", name: "bodyEn", label: "Testo \u2014 EN", ui: { component: "textarea" } },
              { type: "string", name: "emailPlaceholderIt", label: "Placeholder email \u2014 IT" },
              { type: "string", name: "emailPlaceholderEn", label: "Placeholder email \u2014 EN" },
              { type: "string", name: "buttonIt", label: "Pulsante \u2014 IT" },
              { type: "string", name: "buttonEn", label: "Pulsante \u2014 EN" },
              { type: "string", name: "noteIt", label: "Nota piccola \u2014 IT" },
              { type: "string", name: "noteEn", label: "Nota piccola \u2014 EN" }
            ]
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
