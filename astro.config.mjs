import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config

// https://astro.build/config
import sanity from "astro-sanity";

// https://astro.build/config
export default defineConfig({
  site: "https://cypherqueenz.com",
  integrations: [
    image(),
    tailwind(),
    prefetch(),
    sitemap(),
    sanity({
      projectId: "k34rqpdo",
      dataset: "production_www",
      apiVersion: "2021-03-25",
      useCdn: true
    }),
    compress(),
  ],
});