import type { Model } from './Model'

export interface LoadingModelDetailState {
	kind: 'LoadingModelDetailState'
}

export interface LoadedModelDetailState {
	kind: 'LoadedModelDetailState'
	model: Model
}

export interface ErrorModelDetailState {
	kind: 'ErrorModelDetailState'
}

export type ModelDetailState =
	| LoadingModelDetailState
	| LoadedModelDetailState
	| ErrorModelDetailState
