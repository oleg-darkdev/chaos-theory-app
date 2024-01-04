<script>
	import { FooterApp, StartScreen, GameProgressScreen, ManualScreen } from '$lib/widgets/';

	let activeScreen = 'Rozpoczęcie';
</script>

<section class="content flex-1 overflow-y-scroll flex min-h-screen flex-col items-center  justify-center pt-10 pb-40">
	<div class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozgrywka'}>
		<StartScreen bind:activeScreen />
	</div>
	<div
		class="flex h-auto flex-col items-center justify-center pb-36 md:min-h-screen md:pb-14 lg:min-h-screen lg:pb-10 xl:min-h-screen xl:pb-10"
		class:hidden={activeScreen == 'Rozpoczęcie' || activeScreen == 'Rozgrywka'}
	>
		<ManualScreen />
	</div>
	<div
		class="flex h-full flex-col justify-center"
		class:hidden={activeScreen == 'Instrukcja' || activeScreen == 'Rozpoczęcie'}
	>
		<GameProgressScreen />
	</div>
</section>

<FooterApp bind:activeScreen />

