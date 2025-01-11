// @ts-check
import { defineConfig } from 'astro/config';
import db from '@astrojs/db';
import node from '@astrojs/node';
// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  security: {
		checkOrigin: true
	},
  integrations: [ db()],
  vite: {
		optimizeDeps: {
			exclude: ["astro:db"]
		}
	}

});