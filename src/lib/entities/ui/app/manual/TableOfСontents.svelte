<script>
	export let toc;
</script>

<div class=" grid grid-cols-1 justify-center gap-1 sm:grid-cols-2 lg:grid-cols-3 ">
	{#each toc.data as navigation, index}
		<a
			rel="noopener noreferrer"
			href="{toc.link}{navigation.id}"
			class="group m-1 max-w-sm rounded-lg border-2 border-violet-700 bg-gray-900 shadow-md shadow-violet-700 hover:bg-violet-700 hover:no-underline focus:no-underline"
		>
			<img
				role="presentation"
				class="h-44 w-full rounded-lg bg-gray-500 object-cover"
				src={navigation.img}
				alt={navigation.id}
			/>
			<div class="space-y-2 p-6 group-focus:bg-violet-700 ">
				<h3 class="text-2xl font-semibold group-hover:underline group-focus:underline ">
					<span class="text-violet-700 group-hover:text-gray-100 group-focus:text-gray-100 "
						>#{index + 1}
					</span>
					{navigation.title}
				</h3>
				<p>{navigation.shortDesc}</p>
			</div>
		</a>
	{/each}
</div>
