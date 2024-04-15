<script>
	import { persons, games } from '$lib/shared';

	import { Aflag, Countries, Footer, Header, Hero, SupportUs, OtherGames } from '$lib/widgets';
</script>


<svelte:head>
    <title>Boardgame: Philosophy of liberty</title>
</svelte:head>


<Header />

<Hero />

<Aflag {persons} />

<SupportUs />

<!-- <Countries /> -->

<!-- <OtherGames {games} /> -->

<Footer {games} {persons} />

