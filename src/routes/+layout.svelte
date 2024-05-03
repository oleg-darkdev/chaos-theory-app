<script lang="ts">
	import '../app.postcss';

	import { language } from '@inlang/sdk-js';
	import {  LocaleSwitcher} from '$shared/';

	export let data;
</script>

	<!-- <a href="/{language}">
		<h1>Home</h1>
	</a> -->

	<!-- <LocaleSwitcher /> -->

<main class="main-bg">
	<slot />
</main>

<style>
  :global(.main-bg) {
    background-color: #080606;
  }
</style>



