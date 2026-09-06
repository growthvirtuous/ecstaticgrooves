import { defineConfig } from "tinacms";

const branch = process.env.GITHUB_BRANCH || process.env.HEAD || "main";

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID || process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
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
          { type: "string", name: "monthLabel", label: "Etichetta (es. Sab · Set)", required: true },
          { type: "string", name: "titleIt", label: "Titolo — IT (es. Rising Harvest Moon)", required: true },
          { type: "string", name: "titleEn", label: "Titolo — EN", required: true },
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
          { type: "string", name: "author", label: "Autore / handle · data", required: true },
          {
            type: "number",
            name: "rating",
            label: "Stelle (1-5)",
            required: true,
            ui: {
              validate: (value) => {
                if (value === undefined || value === null) return;
                if (value < 1 || value > 5) return "Inserisci un numero da 1 a 5";
              },
            },
          }
        ]
      },
      {
        name: "siteImages",
        label: "Immagini del sito",
        path: "src/content/site",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "image", name: "heroPoster", label: "Home — copertina video hero" },
          { type: "image", name: "homeStory", label: "Home — foto della serata" },
          { type: "image", name: "experienceBody", label: "L'esperienza — corpo in movimento" },
          { type: "image", name: "experienceMusic", label: "L'esperienza — la console / DJ" },
          { type: "image", name: "aboutStory", label: "Chi siamo — foto Holly e Felippe" },
          { type: "image", name: "aboutEarthpercentBadge", label: "Chi siamo — badge EarthPercent" },
          { type: "image", name: "eventsLocation", label: "Eventi — foto OfficinAcrobatica" },
          { type: "image", name: "eventsFirstTime", label: "Eventi — foto sala / luogo" },
          { type: "image", name: "blogCoverPillar", label: "Blog — copertina «Ecstatic Dance a Bologna»" },
          { type: "image", name: "blogCoverHome", label: "Blog — copertina «Ritrovare la strada di casa»" },
          { type: "image", name: "blogCoverPlanet", label: "Blog — copertina «Danzare per il pianeta»" }
        ]
      }
    ]
  }
});
