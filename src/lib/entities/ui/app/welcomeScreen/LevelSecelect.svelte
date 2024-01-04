<script>
	import { LevelCard } from '$lib/shared';

	const levelsList = [
		{
			title: 'Easy',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
			id: 1,
			settings: {
				timer: '',
				color: '',
				experiments: '',
				resources: ''
			}
		},
		{
			title: 'Medium',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
			id: 2,
			settings: {
				timer: '',
				color: '',
				experiments: '',
				resources: ''
			}
		},
		{
			title: 'hard',
			desc: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.',
			id: 3,
			settings: {
				timer: '',
				color: '',
				experiments: '',
				resources: ''
			}
		}
	];

	let selectedMode;

	// save on store
	function selectMode(levelInfo) {
		selectedMode = levelInfo;
		step++;
	}

	export let step;
</script>

<div class="mx-2 flex h-full flex-col items-center justify-center md:mx-auto">
	<h3 class="lg:text-3xl md:text-3xl xl:text-3xl text-2xl font-semibold text-gray-300">Wybór poziomu trudności</h3>
	<div class="flex flex-row flex-wrap items-center ">
		{#each levelsList as levelInfo}
			<LevelCard on:click={() => selectMode(levelInfo)} {levelInfo} />
		{/each}
	</div>
</div>
