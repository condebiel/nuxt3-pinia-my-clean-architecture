<template>
	<button
		v-if="hasSlot()"
		:class="['custom-button', sizeClass]"
		v-bind="$attrs"
		:disabled="disabled"
		role="button"
		:size="size"
	>
		<slot v-if="!loading" />
		<span v-else class="custom-button--loading" :loading="loading" />
	</button>
</template>

<script>
export default {
	name: 'DcButton',

	props: {
		disabled: {
			type: Boolean,
			default: false,
		},

		loading: {
			type: Boolean,
			default: false,
		},

		size: {
			type: String,
			default: 'large',
			validator: (value) => ['small', 'medium', 'large'].includes(value),
		},
	},

	computed: {
		sizeClass() {
			return `custom-button--size-${this.size.trim()}`
		},
	},

	methods: {
		hasSlot() {
			return !!this.$slots.default
		},
	},
}
</script>

<style lang="scss" src="./CustomButton.scss"></style>
