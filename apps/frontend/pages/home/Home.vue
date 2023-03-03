<template>
	<div>
		<div class="products-list products page-container">
			<h1 class="products-list__heading" v-text="$t('pages.home.welcome')" />
			<div class="products-list__grid">
			<div
				v-if="modelsState.kind === 'ErrorModelState'"
				class="products-list__error"
			>
				<p v-text="$t('pages.home.loagingError')" />
			</div>

			<div
				v-if="modelsState.kind === 'LoadingModelState'"
				class="products-list__loading"
			>
				<img src="@/assets/img/loading-spinner.gif" />
			</div>

			<div
				v-if="modelsState.kind === 'LoadedModelState'"
				class="products-list__grid"
			>
				<CardSimple
					v-for="model in modelsState.models"
					:button-text="model.name"
					:image-url="model.avatar"
					:name="model.name"
					:url="`/models/${model.id}`"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { CustomButton } from 'ui'

import { useModelsStore } from '@/src/models/stores/modelsStore'
import CardSimple from '@/components/CardSimple/CardSimple.vue'

defineI18nRoute({
	paths: {
		en: '/',
		es: '/',
	},
})

const modelsStore = useModelsStore()
const { itemsPerPage, modelsState, paginatedData } = storeToRefs(modelsStore)
const { getModels, backPage, nextPage, goToPage } = modelsStore

onBeforeMount(async () => {
	await getModels()
})
</script>

<style lang="scss">
.products-list {
	$width: rem(160px);
	$width-desktop: rem(288px);

	&__heading {
		padding-bottom: rem(48px);
	}

	&__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax($width, 1fr));
		grid-auto-flow: dense;
		gap: rem(16px);

		@include mq($from: tablet) {
			grid-template-columns: repeat(auto-fill, minmax($width-desktop, 1fr));
		}
	}

	&__loading {
		text-align: center;
	}

	&__pagination {
		display: flex;
		justify-content: space-between;
		column-gap: 2rem;
	}
}
</style>
