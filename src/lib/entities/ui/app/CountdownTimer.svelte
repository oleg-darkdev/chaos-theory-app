<script>
	import { tweened } from 'svelte/motion';
	$: timer = tweened(time);

	$: minutes = Math.floor($timer / 60);
	$: minname = minutes > 1 ? 'mins' : 'min';
	$: seconds = Math.floor($timer - minutes * 60);

	const interval = setInterval(() => {
		if ($timer > 0) $timer--;
		if ($timer == 0) {
			clearInterval(interval);
			showMsg = true;
		}
	}, 1000);

  export let showMsg, time;
</script>

<div class="flex flex-row flex-wrap items-center justify-center ">
	<span style="font-size: 100px;" class="font-mono align-center countdown font-black ">
		<span style="--value:{minutes};" />:<span style="--value:{seconds};" />
	</span>
</div>
