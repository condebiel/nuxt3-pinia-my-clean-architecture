import type { AxiosInstance } from 'axios'
import type { ModelsState } from '../domain/ModelsState'
import type { Model } from '../domain/Model'

export const getModelsUseCase = async (
	axios: AxiosInstance
): Promise<ModelsState> => {
	try {
		const stored: ModelsState = JSON.parse(
			localStorage.getItem('models-store') as string
		)

		if (stored !== null) {
			return stored
		}

		const { data } = await axios.get('/models')
		const models = data as Model[]

		const modelsState: ModelsState = {
			kind: 'LoadedModelState',
			models: models,
			total: models.length,
		}

		localStorage.setItem('models-store', JSON.stringify(modelsState))

		return modelsState
	} catch (e: unknown) {
		return {
			kind: 'ErrorModelState',
			total: 0,
		}
	}
}
