<script>
	export let games;
</script>



<section class="h-auto w-full bg-white py-20">
	<div class="mx-auto max-w-7xl ">
		<h2>See more games</h2>

		<div class="flex flex-row flex-wrap justify-center">
			{#each games as boardgame}
				<div
					class="main-bg mx-1 my-4 flex max-w-sm flex-col rounded-lg p-0 text-neutral-100 shadow-md"
				>
					<a href={boardgame.link}
						><img class="rounded-lg p-8" src={boardgame.img} alt={boardgame.title} /></a
					>
					<div class="px-5 pb-5">
						<a href={boardgame.link}
							><h5 class="text-xl font-semibold tracking-tight text-white">
								{boardgame.title}
							</h5></a
						>

						<div class="flex items-center justify-between">
							<span class="text-3xl font-bold text-white">${boardgame.price}</span>
							<a
								href="/"
								class="hover:bg-primary-700 focus-within:ring-primary-300 inline-flex  items-center justify-center rounded-lg bg-white px-5 py-2.5 text-center text-sm font-medium text-black focus-within:outline-none focus-within:ring-4"
								role="button">See more</a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
