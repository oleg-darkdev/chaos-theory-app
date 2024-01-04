<!-- <script>
	import { StepElement } from '$lib/shared';
	$: stepsLength = steps.length - 1;

	export let steps;
</script>

<div
	class="mx-2 rounded-lg border border-violet-700 px-4 py-4 shadow-md shadow-violet-700 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-4"
>
	<h3 class="text-center text-2xl font-semibold text-gray-100 sm:text-4xl">
		Kroki przygotowania do gry
	</h3>
	<div class="mx-auto grid max-w-2xl">
		{#each steps as step, idStep}
			<StepElement {step} {idStep} {stepsLength} />
		{/each}

		<slot />
	</div>
</div> -->
