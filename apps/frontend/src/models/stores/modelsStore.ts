import { defineStore } from 'pinia'
import { ref, type Ref } from 'vue'

import type { ModelsState } from '../domain/ModelsState'
import { getModelsUseCase } from '../useCases/getModelsUseCase'

export const useModelsStore = defineStore('models', () => {
	const modelsState: Ref<ModelsState> = ref({
		kind: 'LoadingModelState',
		total: 0,
	} as ModelsState)

	const itemsPerPage = ref(20)
	const currentPage = ref(1)

	const paginatedData = computed(() => {
		if (modelsState.value.kind !== 'LoadedModelState') return

		return modelsState.value.models.slice(
			(currentPage.value - 1) * itemsPerPage.value,
			currentPage.value * itemsPerPage.value
		)
	})

	const nextPage = () => {
		if (modelsState.value.kind !== 'LoadedModelState') return

		const dataLength = modelsState.value.models.length
		if (currentPage.value !== Math.ceil(dataLength / itemsPerPage.value)) {
			currentPage.value += 1
		}
	}

	const backPage = () => {
		if (modelsState.value.kind !== 'LoadedModelState') return

		if (currentPage.value !== 1) {
			currentPage.value -= 1
		}
	}

	const goToPage = (numPage: number) => {
		currentPage.value = numPage
	}

	const getModels = async () => {
		modelsState.value = await getModelsUseCase()
	}

	return {
		backPage,
		currentPage,
		itemsPerPage,
		getModels,
		goToPage,
		modelsState,
		nextPage,
		paginatedData,
	}
})
