<script>
	import {
		StepsList,
		TextBlock,
		StepsBtns,
		RolesSetup,
		LevelSecelect,
		FinalStepOnScreen
	} from '$lib/entities';

	import { HorisontalImage } from '$lib/shared';

	const gameSteps = [
		// {
		// 	title: 'TextBlock L.O.R.',
		// 	desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
		// 	img: ''
		// },
		{
			// игроки указывают количество участников - это повлияет на количество экспериментов и ресурсев
			// Игроки должны выбрать себе 1 персонажа, отложить его карточку в колоду проиществий.
			title: 'Wybór bohaterów',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: '/images/app/step_team.svg'
		},
		{
			title: 'Tworzenie mapy stacji MKS-14',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: '/images/app/step_map.svg'
		},
		{
			title: 'Wybór poziomu trudności',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: '/images/app/step_mode.svg'
		},
		{
			title: 'Przygotowanie kart eksperymentów',
			desc: 'Откройте 3 эксперимента из верха колоды экспериментов. Для вашего уровня сложности, на конец игры вам нужно выполнить экспериментов указанных ниже',
			img: '/images/app/step_experiments.svg'
		},
		{
			title: 'Dostarczanie surowców do ISS',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			img: '/images/app/step_resources.svg'
		}
	];

	let step = 1;
	export let activeScreen;
</script>

{#if step == 0}
	<TextBlock
		title="Witamy serdecznie na MKC-14"
		desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
	>
		<HorisontalImage slot="img" img="./images/hero.png" alt=" Welcome banner" />
		<StepsBtns slot="btn" bind:step />
	</TextBlock>
{:else if step >= 1 && step <= 6}
	{#if step == 1}
		<StepsList steps={gameSteps}>
			<StepsBtns bind:step />
		</StepsList>
	{:else if step == 2}
		<RolesSetup bind:step />
	{:else if step == 3}
		<TextBlock
			title="Przygotowanie mapy "
			desc="W każdej grze kolejność lokalizacji (z 2 po 6) na na stacji MKS-14 zmienia się losowo."
		>
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{:else if step == 4}
		<LevelSecelect bind:step />
	{:else if step == 5}
		<TextBlock
			title="'Dostarczanie surowców do ISS"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<HorisontalImage slot="img" img="" alt="Science banner" />
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{:else if step == 6}
		<TextBlock
			title="Przygotowanie kart eksperymentów"
			desc="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
		>
			<HorisontalImage slot="img" img="/images/manual/science_bg.png" alt="Science banner" />
			<StepsBtns slot="btn" bind:step />
		</TextBlock>
	{/if}
{:else}
	<FinalStepOnScreen
		title="Yay, prawie skończyliśmy przygotowania"
		desc={[
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
			'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
		]}
		on:click={() => {
			activeScreen = 'Rozgrywka';
			step = 1;
		}}
	/>
{/if}
