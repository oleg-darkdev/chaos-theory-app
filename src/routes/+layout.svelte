<script>
	// import AOS from 'aos';
	// import 'aos/dist/aos.css';
	import { onMount } from 'svelte';
	import '../app.css';
	onMount(() => {
		// AOS.init();
	});
</script>

<main class="main-bg">
	<slot />
</main>

<style>
  :global(.main-bg) {
    background-color: #080606;
  }
</style>
