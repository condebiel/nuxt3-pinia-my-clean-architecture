<template>
	<main class="main">
		<TheHeader class="header-container" />

		<slot />
	</main>
</template>

<script lang="ts" setup>
import { TheHeader } from 'ui'

useHead({
	title: 'Model management',
	meta: [
		{
			name: 'description',
			content: 'Model management description',
		},
	],
	link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
})
</script>

<style lang="scss">
.main {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
}

.header-container {
	width: 100%;
	z-index: 3;
	background-color: get-color('white');
}
</style>
