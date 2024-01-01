<script>
	export let persons;
</script>

<section class="items-centerpy-20  main-bg flex w-full  flex-col">
	{#each persons as person}
		<div class="group mx-auto flex h-auto w-full max-w-6xl flex-row  items-center justify-center ">
			<div class="h-screen w-6/12 border-r-4 px-10  py-16" style="border-color: {person.bgColor};">
				<h2 class="text-6xl font-black  " style="color: {person.bgColor};">{person.title}</h2>
<!-- сделать большими буквами, с расстоянием -->
				<span class="text-xl font-light  " style="color: {person.bgColor};">anarchist </span>
				{#each person.desc as desc}
					<p style="color: {person.bgColor};">{person.desc}</p>
				{/each}
			</div>
			<div
				class="flex w-5/12 flex-col rounded-br-2xl rounded-tr-2xl  border-4 bg-black"
				style="border-color: {person.bgColor};"
			>
				<div class="relative right-44 h-full w-full">
					<img class="h-full w-full" src="./images/persons/{person.img}" alt={person.title} />
				</div>
			</div>
		</div>
	{/each}

	<!-- <div class="h-40 w-2/12 bg-white" /> -->
</section>

<style>
</style>
