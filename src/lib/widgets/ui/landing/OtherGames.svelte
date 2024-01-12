<script>
	export let games;
</script>

<section class="h-auto w-full bg-gray-100 py-20 ">
	<div class="mx-auto max-w-6xl ">
		<h2 class="mb-6 text-center text-6xl font-black text-black">Other games</h2>

		<a name="other-games" />

		<div class="flex flex-row flex-wrap justify-center">
			{#each games as boardgame}
				<a href={boardgame.link}
					><img
						class="h-[350px] w-auto rounded-lg p-8 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
						src="./images/games/{boardgame.img}"
						alt={boardgame.title}
					/></a
				>
				<!-- <div
					class="main-bg mx-1 my-4 flex max-w-[270px] flex-col rounded-lg p-0 text-neutral-100 shadow-md"
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
								class=" inline-flex  items-center justify-center px-5 py-2.5 text-center text-sm font-medium text-white"
								role="button">See more</a
							>
						</div>
					</div>
				</div> -->
			{/each}
		</div>
	</div>
</section>
