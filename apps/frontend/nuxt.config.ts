// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { defineNuxtConfig } from 'nuxt/config'
import { DEFAULT_LOCALE, LOCALES } from './config/i18n'

// if (!process.env.VITE_CTP_PROJECT_KEY) {
// 	console.error('🚫 You need to set the .env file')
// }

const { VITE_ALGOLIA_APP_ID, VITE_ALGOLIA_API_KEY } = process.env

export default defineNuxtConfig({
	alias: {
		'@/*': `./*`,
	},

	modules: [
		'@nuxt/devtools',
		'@nuxtjs/i18n',
		'@vueuse/nuxt',
		[
			'@pinia/nuxt',
			{
				autoImports: [
					'defineStore', // automatically imports `defineStore`
				],
			},
		],
	],

	debug: false,

	ignore: ['**/*.test.*', '**/*.spec.*'],

	i18n: {
		defaultLocale: DEFAULT_LOCALE,
		locales: LOCALES,
		langDir: '/locales',
	},

	css: ['@/assets/scss/main.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "ui/assets/scss/ui-tokens";',
				},
			},
		},
	},

	typescript: {
		typeCheck: true,
		strict: true,
	},
})
