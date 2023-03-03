import type { Model } from '../domain/Model'
import type { ModelsState } from '../domain/ModelsState'
import type { ModelDetailState } from '../domain/ModelDetailState'

import { getModelsUseCase } from './getModelsUseCase'

export const getModelByIdUseCase = async (
	modelId: string
): Promise<ModelDetailState> => {
	const modelsState: ModelsState = await getModelsUseCase()

	if (modelsState.kind !== 'LoadedModelState') {
		return {
			kind: 'ErrorModelDetailState',
		}
	}

	const model = modelsState.models.find((model: Model) => model.id === modelId)

	return {
		kind: 'LoadedModelDetailState',
		model,
	} as ModelDetailState
}
