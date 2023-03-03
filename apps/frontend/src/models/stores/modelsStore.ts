import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

import { APIAxios } from '@/shared/AxiosFactory'

import type { ModelsState } from '../domain/ModelsState'
import { getModelsUseCase } from '../useCases/getModelsUseCase'

export const useModelsStore = defineStore('models', () => {
	const modelsState: Ref<ModelsState> = ref({
		kind: 'LoadingModelState',
		total: 0,
	} as ModelsState)

	const getModels = async () => {
		modelsState.value = await getModelsUseCase(APIAxios)
	}

		getModels,
		modelsState,
