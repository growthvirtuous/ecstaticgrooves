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
          { type: "string", name: "author", label: "Autore / handle · data", required: true }
        ]
      }
    ]
  }
});
