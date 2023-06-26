<script>
	import Phone from './Phone.svelte';
</script>

<div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
	<div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
		<img class="h-20 w-20" src="/rocket-logo.svg" alt="Your Company" />
		<div class="mt-24 sm:mt-32 lg:mt-16">
			<a href="/" class="inline-flex space-x-6">
				<span
					class="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-purple ring-1 ring-inset ring-indigo-500/20"
					>What's new</span
				>
				<span
					class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300"
				>
					<span>About to launch v1.0</span>
					<!-- Heroicon name: mini/chevron-right -->
					<svg
						class="h-5 w-5 text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			</a>
		</div>
		<h1
			class="mt-10 text-4xl font-bold tracking-tight text-heading sm:text-6xl glitch"
			data-text="Problem Solution"
		>
			Problem solution
		</h1>
		<p class="mt-6 text-lg leading-8 text-gray-300">
			Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
			sunt amet fugiat veniam occaecat fugiat aliqua.
		</p>
		<div class=" flex items-center gap-x-6">
			<!-- <a href="/" class=""><img class="w-48" src="/google-play-badge.png" alt="Your Company" /></a> -->
			<!-- <a href="/" class=""><img class="w-44" src="/app-store-badge.svg" alt="Your Company" /></a> -->
			<a href="/" class=""><img class="w-44" src="/discord-logo.svg" alt="Your Company" /></a>
		</div>
	</div>
	<div
		class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
	>
		<Phone />
	</div>
</div>
