<template>
	<div class="error-page">
		<p class="error-page__text" v-text="$t('pages.error404.pageNotFound')" />
	</div>
</template>

<script lang="ts" setup>
useHead({
	title: '404',
})
</script>
