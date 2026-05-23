// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chancystone.github.io',
  base: '/chancy_homepage',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
