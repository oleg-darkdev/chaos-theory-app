<script>
	const stepIncrease = () => step++;
	const stepDecrease = () => step--;

	export let step;
</script>

<div class="flex w-full flex-row flex-wrap justify-center">
	{#if step != 1}
		<button on:click={() => stepDecrease()} class="btn-outline btn-primary btn-lg btn mr-2"
			>Wracaj</button
		>
	{/if}

	<button on:click={() => stepIncrease()} class="btn-primary btn-lg btn">Dalej</button>
</div>
