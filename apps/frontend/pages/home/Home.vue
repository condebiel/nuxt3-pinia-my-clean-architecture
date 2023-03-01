<template>
	<div>
		<p v-text="$t('pages.home.welcome')" />
	</div>
</template>

<script lang="ts" setup>
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
