<script>
	export let title, desc, showMsg;
</script>

<div class="mx-4 ">
	{#if showMsg}
		<div
			class="relative flex max-w-md flex-col  items-center gap-4 rounded-md border-2 border-red-700 bg-red-700 p-4 p-6 shadow-md shadow-red-700 sm:py-8 sm:px-12"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 512 512"
				class="h-40 w-40 shrink-0 fill-current dark:text-violet-400"
			>
				<path
					d="M68.328,383.063a31.654,31.654,0,0,1,.207-32.118l50.883-86.406,11.516,50.76,31.207-7.08L138.257,202.944,32.983,226.828l7.08,31.207,53.149-12.058L40.96,334.707a64,64,0,0,0,55.149,96.476h82.435l32-32H96.109A31.655,31.655,0,0,1,68.328,383.063Z"
				/>
				<path
					d="M283.379,79.762l53.747,91.268-49.053-7.653-4.934,31.617L389.8,211.635l16.64-106.66-31.617-4.933-8.873,56.87L310.954,63.524a64,64,0,0,0-110.3,0l-39.939,67.82,10.407,45.39,57.106-96.972a32,32,0,0,1,55.148,0Z"
				/>
				<path
					d="M470.65,334.707l-47.867-81.283-41.148-6.812,61.441,104.333A32,32,0,0,1,415.5,399.183H304.046l38.359-38.358L319.778,338.2l-76.332,76.332,76.332,76.333,22.627-22.628-37.052-37.051H415.5a64,64,0,0,0,55.149-96.476Z"
				/>
			</svg>
			<h2 class="text-center text-3xl font-black leading-tight tracking-wide">
				Kończy się czas na rundę
			</h2>
			<p class=" text-center text-2xl font-semibold  text-gray-900">
				Otwórz kartę wydarzenia i naciśnij przycisk, aby rozpocząć rundę.
			</p>
			<!-- <ol class="text-center" type="i">
				<li>
					<span class="text-2xl font-bold">1. Przesuń wskaźnik kalendarza o 1 cyfrę dalej.</span>
				</li>
				<li>
					<span class="text-2xl font-bold">2. </span>
				</li>
			</ol>
      			<p class="text-2xl flex-1 font-black text-center text-gray-900">
        Zostało {12 - step} rund
			</p> -->
			<div class="mt-4 flex items-center gap-3 md:justify-center">
				<slot name="btn" />
			</div>
		</div>
	{:else}
		<div class="mb-4 h-full rounded-lg border-2 border-violet-700 p-4  shadow-md shadow-violet-700">
			<slot name="timer" />
		</div>

		<div class=" h-full rounded-lg border-2 border-violet-700  shadow-md shadow-violet-700">
			<div class="py-6">
				<div class="mx-auto max-w-screen-xl px-4 md:px-8 md:text-center">
					<div class="max-w-xl md:mx-auto">
						<h3 class="text-center text-3xl font-semibold text-gray-300 sm:text-4xl">{title}</h3>
						<p class="mt-3 text-center text-gray-300">
							{desc}
						</p>
					</div>
				</div>
			</div>
		</div>
	{/if}
</div>
