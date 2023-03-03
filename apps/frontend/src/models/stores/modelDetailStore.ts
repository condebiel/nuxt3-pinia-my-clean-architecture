import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

import type { ModelDetailState } from '../domain/ModelDetailState'
import { getModelByIdUseCase } from '../useCases/getModelByIdUseCase'
import { updateModelsUseCase } from '../useCases/updateModelsUseCase'

export const useModelDetailStore = defineStore('modelDetail', () => {
	const modelDetailState: Ref<ModelDetailState> = ref({
		kind: 'LoadingModelDetailState',
	} as ModelDetailState)

	const getModel = async (modelId: string) => {
		modelDetailState.value = await getModelByIdUseCase(modelId)
	}

	const updateStatus = () => {
		if (modelDetailState.value.kind === 'LoadedModelDetailState') {
			modelDetailState.value = {
				kind: 'EditModelDetailState',
				model: modelDetailState.value.model,
			}
		} else if (modelDetailState.value.kind === 'EditModelDetailState') {
			modelDetailState.value = {
				kind: 'LoadedModelDetailState',
				model: modelDetailState.value.model,
			}
		}
	}

	const editModel = async () => {
		if (modelDetailState.value.kind === 'EditModelDetailState') {
			await updateModelsUseCase(modelDetailState.value.model)
		}
		updateStatus()
	}

	return {
		editModel,
		getModel,
		modelDetailState,
	}
})
