<template>
	<header class="bg-white">
		<header class="the-header">
			<div class="container-width">
				<div class="the-header-container container-x-margins flex py-4">
					<div class="the-header__left flex">
						<div class="the-header__logo">
							<nuxt-link to="#">
								<img
									width="100"
									height="36"
									src="https://www.modelmanagement.com/_nuxt/img/logo.ceee3f9.svg"
									alt="ModelManagement.com"
								/>
							</nuxt-link>
						</div>
					</div>

					<div class="the-header__center">
						<ul>
							<li>
								<a href="#"> Features </a>
							</li>
							<li>
								<a href="#"> Company </a>
							</li>
							<li>
								<a href="#"> About us </a>
							</li>
						</ul>
					</div>

					<div class="the-header__right">
						<a href="#" class="text-sm font-semibold leading-6 text-gray-900">
							Log in <span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</div>
		</header>
	</header>
</template>

<style lang="scss" src="./TheHeader.scss"></style>
