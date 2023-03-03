import type { Model } from './Model'

export interface LoadingModelState {
	kind: 'LoadingModelState'
}

export interface LoadedModelState {
	kind: 'LoadedModelState'
	models: Model[]
}

export interface ErrorModelState {
	kind: 'ErrorModelState'
}

export type ModelsState = LoadingModelState | LoadedModelState | ErrorModelState
