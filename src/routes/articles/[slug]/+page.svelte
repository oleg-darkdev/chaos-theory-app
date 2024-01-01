<!-- <script>
	import {
		PageNavigation,
		DateTextBlock,
		StandartSection,
		ImageTextBlock,
		Hero,
		HeaderApp,
		SourcesList,
		Timeline,
		ReadMore,
		LoadingScreen
	} from '../../../lib/widgets';
	import { H1, H2, H3, P, Anchor, BigImg } from '../../../lib/shared';

	import { page } from '$app/stores';

	import { onMount } from 'svelte';
	import axios from 'axios';

	$: articleData = {};
	let error = null,
		response = '';

	let readMore = '',
		nav = '',
		map = '',
		publishedAt = '',
		timeToRead = '',
		banner = { data: { attributes: { url: '' } } },
		timeline = '',
		sections = '',
		sourcesList = '';

	const apiUrl = 'http://localhost:1337/api';

	const parseJSON = (resp) => (resp.json ? resp.json() : resp);

	const checkStatus = (resp) => {
		if (resp.status >= 200 && resp.status < 300) {
			return resp;
		}
		return parseJSON(resp).then((resp) => {
			throw resp;
		});
	};
	const headers = {
		'Content-Type': 'application/json'
	};

	async function fetchDataArtcile() {
		try {
			response = await axios.get(
				`${apiUrl}/articles?filters\[slug]\[$eq]=${$page.params.slug}&populate=deep`
			);
			articleData = response.data.data[0].attributes;

			// console.log($page.params.slug);

			nav = articleData.nav;
			banner = articleData.banner;
			sourcesList = articleData.sourceList;
			timeline = articleData.timeline;
			readMore = articleData.readMore;
			sections = articleData.sections;
			publishedAt = articleData.publishedAt;
			timeToRead = articleData.timeToRead;

			// console.log(articleData);
		} catch (e) {
			error = e;
		}
	}

	onMount(() => {
		fetchDataArtcile();
	});
</script>

<LoadingScreen {error} {response}>
	<Hero {banner} />

	<HeaderApp {timeToRead} {publishedAt}>
		<div class="mx-auto mb-8 flex w-full text-left">
			<div class="align-left relative mx-auto inline-flex items-center">
				<div class="text-left">
					<h1
						class="max-w-5xl text-2xl font-bold leading-none tracking-tighter text-neutral-100 md:text-5xl lg:max-w-5xl lg:text-4xl"
					>
						{articleData.titleArticle}
					</h1>

				</div>
			</div>
		</div>
	</HeaderApp>

	<PageNavigation {nav} />

	<Timeline {timeline} />

	<StandartSection>
		{#each sections as section}
			{#if section.__component == 'nav.anchor'}
				<a name={section.title} />
			{:else if section.__component == 'images.images'}
				<BigImg {section} />
			{:else if section.__component == 'text-elements.h2'}
				<h2 class="mt-20">{section.h2}</h2>
			{:else if section.__component == 'text-elements.h3'}
				<h3 class="mt-20">{section.h3}</h3>
			{:else if section.__component == 'text-elements.p'}
				<p class="">{section.p}</p>
			{:else if section.__component == 'date-components.date-numbers'}
				<DateTextBlock data={section} />
			{:else if section.__component == 'text-elements.right-image'}
				<ImageTextBlock data={section} />
			{/if}
		{/each}
	</StandartSection>

	<ReadMore {readMore} />

	<SourcesList {sourcesList} />
</LoadingScreen> -->
