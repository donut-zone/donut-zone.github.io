import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://donut-zone.github.io',
  base: '/donut-zone.github.io',
  integrations: [tailwind()]
});