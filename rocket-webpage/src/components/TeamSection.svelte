<script>
	export let teamMembers;
</script>

<div class="">
	<div class="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:pt-1">
		<div class="space-y-12">
			<div class="space-y-5 text-center sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
				<h2 class="text-3xl font-bold tracking-tight text-purple sm:text-4xl">Core Team</h2>
				<!-- <p class="text-xl text-gray-300">
					Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas
					vel mattis neque.
				</p> -->
			</div>
			<ul class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
				{#each teamMembers as member}
					<li
						class="rounded-lg bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-10 px-6 text-center xl:px-10 xl:text-left"
					>
						<div class="space-y-6 xl:space-y-10">
							<img
								class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
								src={member.imageUrl}
								alt=""
							/>
							<div class="space-y-2 xl:flex xl:items-center xl:justify-between">
								<div class="space-y-1 text-lg font-medium leading-6">
									<h3 class="text-white">
										{member.name} &nbsp;
										<span class="text-purple relative top-[1px]">{member.role}</span>
									</h3>
								</div>

								<ul class="flex justify-center items-center space-x-5">
									<!-- <li>
										<a href={member.facebookLink} class="text-gray-400 hover:text-gray-500">
											<span class="sr-only">Facebook</span>
											<svg
												class="h-6 w-6"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</li> -->
									<li>
										<a
											target="_blank"
											href={member.linkedInLink}
											class="text-gray-400 hover:text-gray-500"
										>
											<span class="sr-only">LinkedIn</span>
											<svg
												class="h-5 w-5"
												fill="currentColor"
												viewBox="0 0 20 20"
												aria-hidden="true"
											>
												<path
													fill-rule="evenodd"
													d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
													clip-rule="evenodd"
												/>
											</svg>
										</a>
									</li>
									<li>
										<div class="group relative">
											<div
												on:click={() => {
													navigator.clipboard.writeText(member.email);
												}}
												on:keydown
												class="text-gray-400 hover:text-gray-500"
											>
												<span class="sr-only">Instagram</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke-width="1.5"
													stroke="currentColor"
													class="w-6 h-6"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
													/>
												</svg>
											</div>
											<h1
												class="text-white bg-black p-4 text-center absolute z-50 left-10 bottom-1 whitespace-nowrap scale-0 group-focus:scale-100"
											>
												Copied!!!
											</h1>
											<h1
												class="text-white bg-black p-4 text-center absolute z-40 left-10 bottom-1 whitespace-nowrap scale-0 group-hover:scale-100 group-hover:animate-bounce"
											>
												Press To Copy Email
											</h1>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</div>
