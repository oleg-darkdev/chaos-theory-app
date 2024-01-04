<script>
	import { countries } from '$lib/shared/';
</script>

<section class="w-full bg-black ">
	<!-- rounded-2xl border-4 border-neutral-400  -->
	<div
		class="mx-auto  max-w-6xl px-8 py-12"
		style="background-image: url(./images/countries-bg.svg)"
	>
		<h2 class="mb-6 text-center text-6xl font-black text-neutral-400">Extensions by countries</h2>
		<div class="mx-auto grid max-w-5xl grid-cols-2 justify-items-center gap-4 ">
			{#each countries as country}
				<div
					class="group flex w-full max-w-sm flex-row flex-wrap items-center   bg-black py-4 px-2 hover:bg-white "
				>
					<img src="./images/flags/{country.flag}" class="h-24 w-24 lg:mr-4" alt={country.title} />

					<h3 class="text-5xl font-bold text-white group-hover:text-black">
						{country.title}
					</h3>
				</div>
			{/each}
		</div>
	</div>
</section>
