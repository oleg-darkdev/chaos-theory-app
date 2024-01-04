<script>
	export let text, activeScreen;
</script>

<button  on:click class={text === activeScreen? 'active bg-gray-900': ''}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class="h-5 w-5"
		fill="none"
		viewBox="0 0 24 24"
		stroke="currentColor"
	>
		<slot />
	</svg>
	<span class="btn-nav-label">{text}</span>
</button>
