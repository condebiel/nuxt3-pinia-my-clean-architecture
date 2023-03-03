import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

import type { ModelDetailState } from '../domain/ModelDetailState'
import { getModelByIdUseCase } from '../useCases/getModelByIdUseCase'

export const useModelDetailStore = defineStore('modelDetail', () => {
	const modelDetailState: Ref<ModelDetailState> = ref({
		kind: 'LoadingModelDetailState',
	} as ModelDetailState)

	const getModel = async (modelId: string) => {
		modelDetailState.value = await getModelByIdUseCase(modelId)
	}

	return {
		getModel,
		modelDetailState,
	}
})
