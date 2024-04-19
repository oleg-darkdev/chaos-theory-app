import HeadHrefLangs from './ui/HeadHrefLangs.svelte';
import LocaleSwitcher from './ui/LocaleSwitcher.svelte';

// no svelte
import replaceLocaleInUrl from './utils/replaceLocaleInUrl.ts';

import { countries, locationsTocData, personsTocData, mainTocData, persons, games } from './data/';

import NavBtn from './ui/app/NavBtn.svelte';
import HorisontalImage from './ui/app/HorisontalImage.svelte';
import LevelCard from './ui/app/LevelCard.svelte';

export {
	replaceLocaleInUrl,
	HeadHrefLangs,
	LocaleSwitcher,
	NavBtn,
	HorisontalImage,
	LevelCard,
	countries,
	locationsTocData,
	personsTocData,
	mainTocData,
	persons,
	games
};
