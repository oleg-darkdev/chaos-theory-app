<script>
	const links = [
		{
			title: 'App',
			link: '/app'
		},
		{
			title: 'About',
			link: '#about'
		},
    {
			title: 'Donate',
			link: '/'
		},
		{
			title: 'Other games',
			link: '/'
		}
		// {
		// 	title: '',
		// 	link: ''
		// },
		// {
		// 	title: '',
		// 	link: ''
		// },
		// {
		// 	title: '',
		// 	link: ''
		// }
	];
</script>

<header class="w-full">
	<nav class=" mx-auto max-w-2xl rounded-b-2xl bg-white shadow">
		<div class="container mx-auto flex items-center justify-center p-6 capitalize ">
			{#each links as link}
				<a
					href={link.link}
					class="mx-1.5 transform border-t-4 border-white  text-black transition-colors duration-300 hover:border-black hover:font-semibold sm:mx-6"
					>{link.title}</a
				>
			{/each}
		</div>
	</nav>
</header>
