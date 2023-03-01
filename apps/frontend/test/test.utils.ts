import { render as VTLrender, RenderOptions } from '@testing-library/vue'

export const render = (component: unknown, options?: RenderOptions) => {
	const defaultOptions = {
		global: {
			mocks: {
				$t: (msg: string) => msg,
			},

			stubs: {
				'nuxt-link': {
					template: '<a href="#"><slot /></a>',
				},
				transition: {
					template: '<div><slot /></div>',
				},
			},
			...options?.global,
		},

		props: {
			...options?.props,
		},

		slots: {
			...options?.slots,
		},
	}

	return VTLrender(component, {
		...defaultOptions,
	})
}
