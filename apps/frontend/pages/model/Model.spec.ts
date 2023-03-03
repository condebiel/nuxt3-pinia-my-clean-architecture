import { createTestingPinia } from '@pinia/testing'
import { render } from '@/test/test.utils'

import { ModelDetailState } from '@/src/models/domain/ModelDetailState'
import { ModelsState } from '@/src/models/domain/ModelsState'

import Model from './Model.vue'

describe('Model Page', () => {
	beforeAll(() => {
		vi.mock('@/src/models/useCases/getModelsUseCase.ts', () => {
			const getModelsUseCase = vi.fn()

			const modelsState: ModelsState = {
				kind: 'LoadedModelState',
				models: [
					{ id: 'someId', name: 'Model name 1', avatar: '' },
					{ id: 'anotherId', name: 'Model model name 2', avatar: '' },
				],
			}

			getModelsUseCase.mockResolvedValue(modelsState)

			return {
				getModelsUseCase,
			}
		})
	})

	it('should render model name', () => {
		const modelDetailState: ModelDetailState = {
			kind: 'LoadedModelDetailState',
			model: {
				id: 'someId',
				isModerated: false,
				name: 'Model name 1',
				avatar: '',
			},
		}
		const { getByText } = componentBuilder({ modelDetailState })

		expect(getByText('Model name 1')).toBeVisible()
	})

	it('should render edit name input', () => {
		const modelDetailState: ModelDetailState = {
			kind: 'EditModelDetailState',
			model: {
				id: 'someId',
				isModerated: false,
				name: 'Model name 1',
				avatar: '',
			},
		}
		const { getByRole } = componentBuilder({ modelDetailState })

		expect(getByRole('textbox')).toBeVisible()
	})
})

const componentBuilder = (state = {}) => {
	const component = render(Model, {
		global: {
			plugins: [
				createTestingPinia({
					initialState: {
						modelDetail: {
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
