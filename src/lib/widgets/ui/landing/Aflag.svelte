<script>
	export let persons;
</script>

<section class="items-centerpy-20  main-bg flex w-full  flex-col">
	{#each persons as person}
		<div class="group mx-auto flex h-auto w-full max-w-6xl flex-row  items-center justify-center ">
			<div class="h-screen w-6/12 border-r-4 px-10  py-16" style="border-color: {person.bgColor};">
				<h2 class="mb-2 text-6xl font-black  " style="color: {person.bgColor};">{person.title}</h2>
				<span
					class=" text-xl font-semibold uppercase  tracking-widest "
					style="color: {person.bgColor};"
					>anarchist
				</span>
				<div class="mt-6 mb-20 max-w-sm">
					{#each person.desc as desc}
						<p style="color: {person.bgColor}; " class='mb-2'>{desc}</p>
					{/each}
				</div>
				<div class="">
					<a
						href={person.link}
						style="background-color: {person.bgColor}; "
						class="hover:white flex w-full transform items-center justify-center  rounded-md px-10 py-4 text-center text-base font-medium text-white transition duration-500 ease-in-out "
						>More about this philosophy of anarchism
					</a>
				</div>
			</div>
			<div
				class="flex w-5/12 flex-col rounded-br-2xl rounded-tr-2xl  border-4 bg-black"
				style="border-color: {person.bgColor};"
			>
				<div class="relative right-44 h-full w-full">
					<img class="group:transition group:ease-in-out group:delay-550 group-hover:-translate-y-1 group-hover:scale-110 group:duration-600 h-full w-full" src="./images/persons/{person.img}" alt={person.title} />
				</div>
			</div>
		</div>
	{/each}

	<!-- <div class="h-40 w-2/12 bg-white" /> -->
</section>

<style>
</style>
