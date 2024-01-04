<script>
	import { countries } from '$lib/shared';

	let showCountriesList = false,
		showFnbGroups = false,
		showSambaGroups = false,
		showSquatsLisy = false;

	import {
		CountdownTimer,
		TextBlock,
		GameStepsBtns,
		FinalStepOnScreen,
		TimeCounterBlock
	} from '$lib/entities';

	import { HorisontalImage } from '$lib/shared';

	let step = 0,
		showMsg = false,
		time = 120;
</script>

{#if !step}
	<TextBlock
		title="Przedyskutujcie plan działania z pozostałymi graczami. "
		desc="Jak tylko naciśniesz przycisk start, gra się rozpoczyna i zaczyna się timer."
	>
		<HorisontalImage slot="img" img="./images/hero.png" alt=" Welcome banner" />
		<button slot="btn" class="btn-lg  btn mx-6 mt-4 max-w-2xl bg-violet-700" on:click={() => step++}
			>Rozpocząć grę</button
		>
	</TextBlock>

	<section class="flex min-h-screen items-center justify-center">
		<div class="max-w-md rounded-md border-2 border-white px-10 py-20 ">
			<h3
				on:click={() => (showCountriesList = !showCountriesList)}
				class="text-5xl font-bold text-white group-hover:text-black"
			>
				Show Countries list
			</h3>

			{#if showCountriesList}
				{#each countries as country}
					<div
						class="group flex w-full max-w-sm flex-row flex-wrap items-center   bg-black py-4 px-2 hover:bg-white "
					>
						<img
							src="./images/flags/{country.flag}"
							class="h-24 w-24 lg:mr-4"
							alt={country.title}
						/>

						<h3 class="text-5xl font-bold text-white group-hover:text-black">
							{country.title}
						</h3>
						<span>tile number: {country.id}</span>

						<!-- добавить кнопки показать инфо, сделать ненавязчивыми -->
						<span>fnb groups: {country.fnb.length}</span>
						<span>samba groups: {country.samba.length}</span>
						<span>squat groups: {country.squat.length}</span>
						<span>right radicals groups: {country.rightRadicals.length}</span>
						<span>theory groups: {country.theory.length}</span>
					</div>
				{/each}
			{/if}

			<!-- отрефакторить и сделать по образу и подобию самбу и сквоты -->
			<h3
				on:click={() => (showFnbGroups = !showFnbGroups)}
				class="text-5xl font-bold text-white group-hover:text-black"
			>
				Show Fnb groups
			</h3>

			{#if showFnbGroups}
				{#each countries as country}
					<div
						class="group flex w-full max-w-sm flex-row flex-wrap items-center   bg-black py-4 px-2 hover:bg-white "
					>
						<img
							src="./images/flags/{country.flag}"
							class="h-24 w-24 lg:mr-4"
							alt={country.title}
						/>

						<h3 class="text-5xl font-bold text-white group-hover:text-black">
							{country.title}
						</h3>
						<span>fnb groups: {country.fnb.length}</span>
						{#each country.fnb as fnb}
							<p>{fnb.title}</p>
						{/each}
					</div>
				{/each}
			{/if}
		</div>
	</section>
{:else if step >= 1 && step <= 12}
	<TimeCounterBlock
		bind:showMsg
		title="Przedyskutujcie plan działania z pozostałymi graczami. "
		desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
	>
		<CountdownTimer slot="timer" bind:showMsg bind:time />
		<GameStepsBtns
			slot="btn"
			on:click={() => {
				step++;
				time = 120;
				showMsg = false;
			}}
			bind:step
			bind:showMsg
		/>
	</TimeCounterBlock>
{:else if step == 13}
	<FinalStepOnScreen
		title="Final  game"
		desc={[
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		]}
		btnText="Zacznij grę od nowa"
		on:click={() => {
			step = 0;
		}}
	/>
{/if}
