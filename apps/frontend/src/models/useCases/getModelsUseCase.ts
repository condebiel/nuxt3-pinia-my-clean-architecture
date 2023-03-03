import { APIAxios } from '@/shared/AxiosFactory'

import type { ModelsState } from '../domain/ModelsState'
import type { Model } from '../domain/Model'

export const getModelsUseCase = async (): Promise<ModelsState> => {
	try {
		const stored: ModelsState = JSON.parse(
			localStorage.getItem('models-store') as string
		)

		if (stored !== null) {
			return stored
		}

		const { data } = await APIAxios.get('/models')
		const models = data as Model[]

		const modelsState: ModelsState = {
			kind: 'LoadedModelState',
			models: models,
		}

		localStorage.setItem('models-store', JSON.stringify(modelsState))

		return modelsState
	} catch (e: unknown) {
		return {
			kind: 'ErrorModelState',
		}
	}
}
