<!-- <script>
  import { checkTitleResource } from "$lib/shared";

	export let data;
</script>

<div class:hidden={!data.resources.length}>
	<h2 class="text-2xl font-semibold">Required Resources</h2>

	<div class="flex flex-row flex-wrap justify-center">
		{#each data.resources as resources}
			<div
				class="relative my-4 mx-1 h-32 w-32 rounded-lg border border-violet-700 shadow-md shadow-violet-700"
				class:hidden={resources.amount == 0}
			>
				<figure>
					<img style="opacity: 0.4;" class="rounded-lg" src={resources.img} alt={resources.title} />
					<figcaption class="text-center text-violet-700">{resources.title}</figcaption>
				</figure>

				<span
					class:hidden={checkTitleResource(resources.title)}
					class="absolute inset-x-10 inset-y-3 text-8xl font-numbers text-gray-100"> {resources.amount}</span
				>
			</div>
		{/each}
	</div>
</div> -->
