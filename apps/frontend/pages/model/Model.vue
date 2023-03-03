<template>
	<div
		v-if="
			modelDetailState.kind === 'LoadedModelDetailState' ||
			modelDetailState.kind === 'EditModelDetailState'
		"
		class="model-detail page-container"
	>
		<div class="model-detail__avatar">
			<img :src="modelDetailState.model.avatar" />
		</div>
		<div class="model-detail__details">
			<div class="model-detail__wrapper">
				<h1
					v-if="modelDetailState.kind === 'LoadedModelDetailState'"
					v-text="modelDetailState.model.name"
				/>
				<div
					v-if="modelDetailState.kind === 'EditModelDetailState'"
					class="model-detail__editable-field"
				>
					<label for="name" v-text="$t('pages.modelDetail.editLabel')" />
					<input
						type="text"
						name="name"
						role="textbox"
						v-model="modelDetailState.model.name"
						placeholder="Name"
					/>
				</div>
				<CustomButton class="custom-button--primary" @click="editModel">
					<span
						v-if="modelDetailState.kind === 'LoadedModelDetailState'"
						v-text="$t('pages.modelDetail.edit')"
					/>
					<span
						v-if="modelDetailState.kind === 'EditModelDetailState'"
						v-text="$t('pages.modelDetail.save')"
					/>
				</CustomButton>
			</div>
			<ul class="model-detail__details-list">
				<li v-text="modelDetailState.model.age" />
				<li v-text="modelDetailState.model.eyes" />
				<li v-text="modelDetailState.model.gender" />
				<li v-text="modelDetailState.model.email" />
				<li v-text="modelDetailState.model.tags" />
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { CustomButton } from 'ui'
import { useRoute } from 'vue-router'

import { useModelDetailStore } from '@/src/models/stores/modelDetailStore'

const route = useRoute()
const modelDetailStore = useModelDetailStore()
const { modelDetailState } = storeToRefs(modelDetailStore)
const { editModel, getModel } = modelDetailStore

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

	&__wrapper {
		display: flex;
		justify-content: space-between;
		height: rem(60px);
	}

	&__editable-field {
		display: flex;
		flex-direction: column;
		font-weight: get-font-weight('medium');

		input {
			margin-top: rem(8px);
			border: 1px solid #ccc;
			padding: rem(8px);
		}
	}

	.custom-button--primary {
		max-width: rem(50px);
	}

	ul {
		li {
			margin: rem(8px) 0;
		}
	}
}
</style>
