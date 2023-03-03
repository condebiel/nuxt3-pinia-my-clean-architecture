import { createTestingPinia } from '@pinia/testing'

import { ModelsState } from '@/src/models/domain/ModelsState'
import { render } from '@/test/test.utils'

import Home from './Home.vue'

describe('Home Page', () => {
	it('should render page title', () => {
		const mockStore: ModelsState = {
			kind: 'LoadingModelState',
			total: 0,
		}
		const { getByText } = componentBuilder({ mockStore })

		expect(getByText('pages.home.welcome')).toBeVisible()
	})

	it.skip('should render error message if something went wrong', () => {
		const mockStore: ModelsState = {
			kind: 'ErrorModelState',
			total: 0,
		}
		const { getByText } = componentBuilder({ mockStore })

		expect(getByText('pages.home.loagingError')).toBeVisible()
	})
})

const componentBuilder = (store = {}) => {
	const component = render(Home, {
		global: {
			plugins: [
				createTestingPinia({
					initialState: {
						models: {
							...store,
						},
					},
				}),
			],
		},
	})

	return {
		...component,
	}
}
