// Tina CMS — schema di RIFERIMENTO per la Fase 2.
// Diventa attivo quando i contenuti vengono spostati in src/content (collection).
// Docs: https://tina.io/docs
import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.GITHUB_BRANCH || "main",
  clientId: process.env.TINA_CLIENT_ID || "", // da Tina Cloud
  token: process.env.TINA_TOKEN || "",         // da Tina Cloud
  build: { outputFolder: "admin", publicFolder: "public" },
  media: { tina: { mediaRoot: "uploads", publicFolder: "public" } },
  schema: {
    collections: [
      {
        name: "event",
        label: "Eventi",
        path: "src/content/events",
        format: "json",
        fields: [
          { type: "string", name: "day", label: "Giorno (es. 19)" },
          { type: "string", name: "monthLabel", label: "Etichetta (es. Sab · Set)" },
          { type: "string", name: "title", label: "Titolo (es. Rising Harvest Moon)" },
          { type: "string", name: "venue", label: "Luogo" },
          { type: "string", name: "ticketUrl", label: "Link biglietti (Ticket Tailor)" },
        ],
      },
      {
        name: "testimonial",
        label: "Testimonial",
        path: "src/content/testimonials",
        format: "json",
        fields: [
          { type: "string", name: "quote", label: "Citazione", ui: { component: "textarea" } },
          { type: "string", name: "author", label: "Autore / handle" },
          { type: "string", name: "date", label: "Data" },
        ],
      },
      {
        name: "article",
        label: "Articoli del blog",
        path: "src/content/blog",
        format: "md",
        fields: [
          { type: "string", name: "category", label: "Categoria" },
          { type: "string", name: "titleIt", label: "Titolo (IT)" },
          { type: "string", name: "titleEn", label: "Titolo (EN)" },
          { type: "image", name: "cover", label: "Foto di copertina" },
          { type: "rich-text", name: "bodyIt", label: "Testo (IT)" },
          { type: "rich-text", name: "bodyEn", label: "Testo (EN)" },
        ],
      },
    ],
  },
});
