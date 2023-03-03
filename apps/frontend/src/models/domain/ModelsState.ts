import type { Model } from './Model'

export interface LoadingModelState {
	kind: 'LoadingModelState'
	total: number
}

export interface LoadedModelState {
	kind: 'LoadedModelState'
	models: Model[]
	total: number
}

export interface ErrorModelState {
	kind: 'ErrorModelState'
	total: number
}

export type ModelsState = LoadingModelState | LoadedModelState | ErrorModelState
