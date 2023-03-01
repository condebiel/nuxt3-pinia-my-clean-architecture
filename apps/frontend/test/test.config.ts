import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/vue'
import matchers from '@testing-library/jest-dom/matchers'
import '@testing-library/jest-dom'

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers)

// mock Nuxt composables
vi.mock('@/.nuxt/imports', () => ({
	definePageMeta: vi.fn(),

	defineI18nRoute: vi.fn(),

	useHead: vi.fn(),

	useNuxtApp: () => ({
		$bus: {
			$emit: vi.fn(),
		},
	}),

	useAsyncData: async (fn: Function) => {
		await fn()
	},

	useRouter: () => ({
		push: () => vi.fn(),
	}),
}))

vi.mock('vue-router', () => ({
	useRoute: () => {
		return {
			params: {},
		}
	},
}))

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
	cleanup()
})
