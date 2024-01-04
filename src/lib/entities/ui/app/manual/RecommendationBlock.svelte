<script>
	export let recommendation, link;
</script>

<a
	rel="noopener noreferrer"
	href="{link}/{recommendation.id}"
	class="m-2 inline-flex items-center  text-sm text-violet-400"
>
	<div
		class="container  mx-auto grid max-w-2xl grid-cols-12 rounded-lg border-2 border-violet-700 bg-gray-900 shadow-md shadow-violet-700"
	>
		<div
			class=" col-span-full rounded-lg bg-gray-700 bg-cover bg-no-repeat lg:col-span-4"
			style="background-image: url({recommendation.img}); background-position: center center; background-size: cover;"
		/>
		<div class="col-span-full row-span-full flex flex-col p-6 lg:col-span-8 lg:p-10">
			<h1 class="text-3xl font-semibold">{recommendation.title}</h1>
			<p class="flex-1 pt-2">
				{recommendation.shortDesc}
			</p>
			<div class="flex flex-row items-center pt-2 pb-6">
				<span class="mr-2 inline-flex items-center space-x-2 text-sm text-violet-400"
					>Read more</span
				>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					class="h-4 w-4"
				>
					<path
						fill-rule="evenodd"
						d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
		</div>
	</div>
</a>
