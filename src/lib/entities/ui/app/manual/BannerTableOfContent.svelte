<script>
	export let toc, page;
</script>

<div
	class="mx-auto block max-w-sm gap-3 rounded-xl border-2 border-violet-700 bg-gray-900 shadow-md shadow-violet-700 hover:no-underline focus:no-underline sm:max-w-full lg:grid lg:grid-cols-12"
>
	<img
		src={toc.img}
		alt="{page} banner"
		class="h-64 w-full rounded-lg bg-violet-700 object-cover sm:h-96 lg:col-span-7"
	/>
	<div class="px-auto space-y-2 p-6 lg:col-span-5">
		<h3 class="text-2xl font-semibold  sm:text-4xl">
			Opis {page} dostępnych w grze
		</h3>
		<ul class="grid grid-cols-2 gap-2">
			{#each toc.data.slice(0, 8) as item}
				<li class="-mt-2">
					<a class="hover:text-violet-700" href="{toc.link}{item.id}"
						><span class="text-violet-700">#{item.id}</span> {item.title}</a
					>
				</li>
			{/each}
		</ul>
		<!-- <a href="#all" class="btn-md btn  btn-wide bg-violet-700">show all</a> -->
	</div>
</div>
