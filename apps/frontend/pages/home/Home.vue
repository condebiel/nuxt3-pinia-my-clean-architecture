<template>
	<div>
		<div class="products-list products page-container">
			<h1 class="products-list__heading" v-text="$t('pages.home.welcome')" />
			<div class="products-list__grid">
				<CardSimple
					v-for="i in 20"
					button-text="Current Name"
					image-url="https://picsum.photos/288"
					name="Current Name"
					url="/model/1"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import CardSimple from '@/components/CardSimple'

defineI18nRoute({
	paths: {
		en: '/',
		es: '/',
	},
})

useHead({
	title: 'Welcome page',
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
}
</style>
