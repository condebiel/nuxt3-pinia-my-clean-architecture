import type { Model } from '../domain/Model'
import type { ModelsState } from '../domain/ModelsState'

import { getModelsUseCase } from './getModelsUseCase'

export const updateModelsUseCase = async (editModel: Model): Promise<void> => {
	const modelsState: ModelsState = await getModelsUseCase()
	if (modelsState.kind !== 'LoadedModelState') return

	const modelsEdited = modelsState.models.map((model: Model) => {
		if (model.id === editModel.id) {
			return editModel
		}
		return model
	})

	const newState: ModelsState = {
		kind: 'LoadedModelState',
		models: modelsEdited,
	}

	localStorage.setItem('models-store', JSON.stringify(newState))
}
