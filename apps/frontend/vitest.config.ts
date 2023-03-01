/// <reference types="vite/client" />
/// <reference types="vitest" />
/// <reference types="vitest/globals" />

import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'

const customElements = ['image-overlay', 'price-block', 'product-card-slim']

export default defineConfig({
	build: {
		sourcemap: true,
	},

	plugins: [
		AutoImport({
			imports: ['vue', 'pinia'],
		}),
		vue({
			template: {
				compilerOptions: {
					isCustomElement: (tag) => customElements.includes(tag),
				},
			},
		}),
	],

	resolve: {
		alias: {
			'@/': resolve(__dirname, '/'),
		},
	},

	test: {
		environment: 'jsdom',
		exclude: ['node_modules'],
		globals: true,
		setupFiles: './test/test.config.ts',
	},
})
