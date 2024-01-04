<script>
	import { HorisontalImage } from '$lib/shared';

	export let desc, title;
</script>

<div class="mx-2 rounded-lg border-2 border-violet-700 shadow-md shadow-violet-700 ">
	<HorisontalImage slot="img" img="./images/hero.png" alt="Hello banner" />

	<div class="mx-auto max-w-screen-xl py-6 px-4 md:px-8 md:text-center">
		<div class="max-w-xl md:mx-auto">
			<h3 class=" text-2xl font-semibold text-gray-300 md:text-3xl lg:text-3xl xl:text-3xl ">
				{title}
			</h3>
			{#each desc as text}
				<p class="mt-3 text-gray-300">
					{text}
				</p>
			{/each}
		</div>
		<div class="mt-4 flex items-center justify-center">
			<button class="btn-lg  btn mx-6 mt-4 max-w-2xl bg-violet-700" on:click
				>Rozpocząć grę</button
			>
		</div>
	</div>
</div>
