import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'a3c6636393c79d19a6848a50c7e7f516a61c87d3', queries,  });
export default client;
  