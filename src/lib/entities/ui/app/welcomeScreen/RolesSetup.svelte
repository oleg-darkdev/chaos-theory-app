<script>
	import { HorisontalImage } from '$lib/shared';
	const variantsPeoplesOnGame = [2, 3, 4],
		setupSteps = [
			'Wybierz postacie, jako które chciałbyś grać.',
			'Dodaj karty postaci do talii kart zdarzeń',
			'Wybierz ilość graczy'
		];
	let peoplesOnGame = 2;

	export let step;
</script>

<div class="mx-2 rounded-lg border-2 border-violet-700 shadow-md shadow-violet-700 ">
	<HorisontalImage img="./images/manual/persons_bg.png" alt="Roles banner" />

	<div class="mx-auto max-w-screen-xl py-6 px-4 md:px-8 md:text-center">
		<div class="mb-4 flex max-w-xl flex-col items-center md:mx-auto">
			<h3 class="text-3xl font-semibold text-gray-300 sm:text-4xl">Ustalenie liczby graczy</h3>
			<p class="mt-3 mb-6 text-gray-300">
				Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing
				industries for previewing layouts and visual mockups.
			</p>
			<ol class="text-start" type="i">
				{#each setupSteps as step, i}
					<li>
						<span class="text-violet-700">krok #{i + 1}: </span>
						{step}
					</li>
				{/each}
			</ol>
		</div>

		<div class="grid auto-cols-max grid-flow-col justify-center  gap-5 text-center">
			{#each variantsPeoplesOnGame as variant}
				<button
					on:click={() => {
						peoplesOnGame = variant;
						step++;
					}}
					class="rounded-box flex flex-col  items-center rounded-lg border-2 border-violet-700 bg-violet-700 p-2 text-neutral-content shadow-md shadow-violet-700  hover:bg-gray-100 hover:text-violet-900 "
				>
					<span class="font-mono countdown text-center text-5xl">
						{variant}
					</span>
					<span> players </span>
				</button>
			{/each}
		</div>
	</div>
</div>
