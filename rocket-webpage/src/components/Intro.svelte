<script>
	import Phone from './Phone.svelte';
</script>

<div class="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
	<div class="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
		<img class="sm:w-80" src="/logo.png" alt="Your Company" />
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
			About SkillFindr
		</h1>
		<p class="mt-6 text-lg leading-8 text-gray-300">
			In the online education sphere, students face obstructive paywalls, fragmented apps, scattered
			resources which leads to a reduction in productive learning. This limits the access to quality
			education and learning. SkillFindr is an app hosting carefully selected E-Learning content
			sourced from all across the web, personalised to your preferences.
		</p>
		<p class="mt-6 text-lg leading-8 text-dark-purple">
			Join our Discord server to get early access to the app and be a part of the community.
		</p>
		<div class="my-8 grid grid-cols-5 gap-4">
			<!-- <a href="/" class=""><img class="w-48" src="/google-play-badge.png" alt="Your Company" /></a> -->
			<!-- <a href="/" class=""><img class="w-44" src="/app-store-badge.svg" alt="Your Company" /></a> -->
		    <a target="_blank" href="https://discord.gg/Ca25VhBg">
				<svg
				class="h-14 w-14"
				fill="currentColor"
				viewbox="0 0 24 24"
				style="color: #7289da"
				xmlns="http://www.w3.org/2000/svg"
				fill-rule="evenodd"
				clip-rule="evenodd"
			>
				<path
					d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"
				/>
			</svg>
			</a>

			<a target="_blank" href="https://instagram.com/skill_findr?igshid=MzRlODBiNWFlZA==">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-14 w-14"
				fill="currentColor"
				style="color: #c13584"
				viewBox="0 0 24 24"
			>
				<path
					d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
				/>
			</svg>
			</a>

			<a target="_blank" href="https://youtube.com/@SkillFindr?si=cxopCpKvNWOQDENq">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-14 w-14"
				fill="currentColor"
				style="color: #ff0000"
				viewBox="0 0 24 24"
			>
				<path
					d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
				/>
			</svg>
			</a>

			<a target="_blank" href="https://x.com/skillfindrapp?t=HDxFRKHc24_xx3p-F2Y3qA&s=08">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-14 w-14"
				fill="currentColor"
				style="color: #1da1f2"
				viewBox="0 0 24 24"
			>
				<path
					d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
				/>
			</svg>
			</a>

			<a target="_blank" href="https://www.linkedin.com/showcase/skillfindrapp/">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-14 w-14"
				fill="currentColor"
				style="color: #0077b5"
				viewBox="0 0 24 24"
			>
				<path
					d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
				/>
			</svg>
			</a>
		</div>
	</div>
	<div
		class="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32"
	>
		<Phone />
	</div>
</div>
