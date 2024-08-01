import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import react from "@astrojs/react";
// import swup from "@swup/astro";

// https://astro.build/config
export default defineConfig({
    site: "https://azurecrystalz.github.io",
    image: {
        domains: ["f002.backblazeb2.com"],
    },
    integrations: [
        AutoImport({
            imports: [
                "./src/components/tl/chapter/StoryImg.astro",
                "./src/components/tl/chapter/Bubble.astro",
                "./src/components/tl/chapter/Narration",
                "./src/components/tl/chapter/Box.astro",
                "./src/components/tl/chapter/Diff.astro",
                "./src/components/tl/chapter/Name.astro",
                "./src/components/tl/chapter/Divider.astro",
                "./src/components/tl/chapter/Phone.astro",
                "./src/components/tl/chapter/Choice.astro",
                "./src/components/tl/chapter/Rain.astro",
            ],
        }),
        mdx(),
        sitemap(),
        icon(),
        react(),
        // swup(),
    ],
});
