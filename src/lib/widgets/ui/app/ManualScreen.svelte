<script>
	import { TableOfСontents, RecommendationBlock } from '$lib/entities';
	import { mainTocData } from '$lib/shared';

	let reccomendations = [
		{
			title: 'synopsis',
			id: 'synopsis',
			img: '/images/manual/toc/toc_synopsis.png',

			shortDesc: 'Lorem ipsum is placeholder text commonly'
		}
	];

	$: toc = mainTocData;
</script>

<div class="container mx-auto max-w-6xl space-y-6 p-2 md:p-4 lg:p-6 xl:p-6 ">
	<!-- <TableOfСontents {toc} /> -->
</div>

<div class="mb-10">
	{#each reccomendations as recommendation}
		<!-- <RecommendationBlock link="" {recommendation} /> -->
	{/each}
</div>
