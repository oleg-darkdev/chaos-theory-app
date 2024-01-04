<script>
  export let levelInfo;
</script>

<div class="card card-height lg:w-96 xl:w-96 md:w-96 w-full m-2 bg-primary text-primary-content">
	<div class="card-body">
		<h2 class="card-title">{levelInfo.title}</h2>
		<p>{levelInfo.desc}</p>
		<div class="card-actions">
			<button on:click class="btn w-full">Select</button>
		</div>
	</div>
</div>


<style>
  .card-height {
    max-height: 250px;
    height: auto;
  }
</style>
