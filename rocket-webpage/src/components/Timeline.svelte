<script>
	let updates = [
		{
			title: 'Discord Server',
			date: '27th June 2023',
			description:
				'Discord server is now live! Join us to get the latest updates and to chat with the community.'
		},
		{
			title: 'Product Release',
			date: '18th November 2023',
			description:
				'The app will be available for download on the App Store and Google Play Store. Very soon....'
		}
	];
</script>

<section class="dark dark:bg-gray-800 dark:text-gray-100">
	<div class="container max-w-5xl px-4 py-20 mx-auto">
		<div class="grid gap-4 mx-4 sm:grid-cols-12">
			<div class="col-span-12 sm:col-span-3">
				<div
					class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-purple"
				>
					<h3 class="text-3xl text-heading font-semibold">Timeline</h3>
					<!-- <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span> -->
				</div>
			</div>
			<div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div
					class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-dark-purple"
				>
					{#each updates as update}
						<div
							class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-purple"
						>
							<h3 class="text-xl font-semibold tracking-wide text-heading">{update.title}</h3>
							<time class="text-xs mt-1 tracking-wide uppercase dark:text-description"
								>{update.date}</time
							>
							<p class="mt-3 text-dark-description">{update.description}</p>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>
