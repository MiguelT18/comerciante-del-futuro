// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    icon({
      include: {
        ic: [
          "twotone-rocket-launch",
          "twotone-storefront",
          "baseline-whatsapp",
        ],
        "icon-park-twotone": ["trend", "check-one"],
        "ant-design": ["thunderbolt-twotone"],
        mdi: ["register"],
        bxs: ["up-arrow"],
      },
    }),
  ],
});
