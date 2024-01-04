<script>
	export let step, showMsg;
</script>

<div class="flex w-full flex-row flex-wrap justify-center">
	<button
		on:click
		class="btn-lg  btn mx-6 mt-4 max-w-2xl {showMsg ? 'bg-gray-900' : 'bg-violet-700'}"
		>{step < 1 ? 'Rozpocząć grę' : 'Następna runda'}</button
	>
</div>
