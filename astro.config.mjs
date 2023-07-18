import { defineConfig } from "astro/config";
import purgecss from "astro-purgecss";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://gabelluardo.github.io",
  integrations: [
    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),
    purgecss({
      fontFace: true,
    }),
  ],
});
