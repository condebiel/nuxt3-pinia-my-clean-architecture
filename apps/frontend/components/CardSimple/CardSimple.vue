<template>
	<article class="card-simple">
		<div class="card-simple__image-wrapper">
			<img
				class="card-simple__image"
				:src="imageUrl"
				:data-src="imageUrl"
				:alt="name"
			/>

			<nuxt-link :to="url">
				<div class="card-simple__overlay" />
			</nuxt-link>

			<button class="card-simple__button" @click="$emit('add-to-cart')">
				<span class="text-medium" v-text="buttonText" />
			</button>
		</div>

		<div class="card-simple__info">
			<nuxt-link class="card-simple__name-wrapper mt-2" :to="url">
				<span class="text-medium two-lines" v-text="name" />
			</nuxt-link>
		</div>
	</article>
</template>

<script lang="ts" setup>
withDefaults(
	defineProps<{
		buttonText?: string
		imageUrl: string
		name?: string
		url?: string
	}>(),
	{
		buttonText: '',
		name: '',
		url: '',
	}
)
</script>

<style lang="scss" src="./CardSimple.scss"></style>
