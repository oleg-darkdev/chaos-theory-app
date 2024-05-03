<script>
	import { i } from '@inlang/sdk-js';
	// import {HeadHrefLangs} from '$shared';

	import { persons, games } from '$lib/shared';

	import { Aflag, Countries, Footer, Header, Hero, SupportUs, OtherGames } from '$lib/widgets';
</script>


<svelte:head>
    <title>Boardgame: Philosophy of liberty</title>
    	<!-- <HeadHrefLangs /> -->

</svelte:head>


<!-- <Header /> -->

<div >

<Hero />

<Aflag {persons} />

<SupportUs />

<!-- <Countries /> -->

<!-- <OtherGames {games} /> -->
</div>

<Footer {games} {persons} />

