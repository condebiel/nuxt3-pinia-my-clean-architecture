<template>
	<div
		v-if="modelDetailState.kind === 'LoadedModelDetailState'"
		class="model-detail page-container"
	>
		<div class="model-detail__avatar">
			<img :src="modelDetailState.model.avatar" />
		</div>
		<div class="model-detail__details">
			<h1 v-text="modelDetailState.model.name" />
			<ul class="model-detail__details-list">
				<li v-text="modelDetailState.model.age" />
				<li v-text="modelDetailState.model.eyes" />
				<li v-text="modelDetailState.model.name" />
				<li v-text="modelDetailState.model.gender" />
				<li v-text="modelDetailState.model.email" />
				<li v-text="modelDetailState.model.tags" />
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

import { useModelDetailStore } from '@/src/models/stores/modelDetailStore'

const route = useRoute()
const modelDetailStore = useModelDetailStore()
const { modelDetailState } = storeToRefs(modelDetailStore)
const { getModel } = modelDetailStore

defineI18nRoute({
	paths: {
		en: '/model/:modelId/',
	},
})

onBeforeMount(async () => {
	getModel(route.params.modelId as string)
})
</script>
<style lang="scss" scoped>
.model-detail {
	display: flex;

	ul {
		li {
			margin: 0.5rem 0;
		}
	}
}
</style>
