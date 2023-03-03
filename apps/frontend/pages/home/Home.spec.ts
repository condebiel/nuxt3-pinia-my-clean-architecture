import { createTestingPinia } from '@pinia/testing'
import { render } from '@/test/test.utils'

import { ModelsState } from '@/src/models/domain/ModelsState'

import Home from './Home.vue'

describe('Home Page', () => {
	it('should render page title', () => {
		const modelsState: ModelsState = {
			kind: 'LoadingModelState',
		}
		const { getByText } = componentBuilder({ modelsState })

		expect(getByText('pages.home.welcome')).toBeVisible()
	})

	it('should render error message if something went wrong', () => {
		const modelsState: ModelsState = {
			kind: 'ErrorModelState',
		}
		const { getByText } = componentBuilder({ modelsState })

		expect(getByText('pages.home.loagingError')).toBeVisible()
	})

	it('should render two items with name to times per item', () => {
		const modelsState: ModelsState = {
			kind: 'LoadedModelState',
			models: [
				{ id: 'someId', name: 'Model', isModerated: false, avatar: '' },
				{ id: 'someId', name: 'Model', isModerated: false, avatar: '' },
			],
		}
		const { getAllByText } = componentBuilder({ modelsState })

		expect(getAllByText('Model')).toHaveLength(4)
	})
})

const componentBuilder = (state = {}) => {
	const component = render(Home, {
		global: {
			plugins: [
				createTestingPinia({
					initialState: {
						models: {
							...state,
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
