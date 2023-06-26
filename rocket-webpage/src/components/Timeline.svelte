<script>
    let updates = [
        {
            title: 'Formed The Team',
            date: 'March 2023',
            description: 'Pellentesque feugiat ante at nisl efficitur, in mollis orci scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
        },
        {
            title: 'Lauching Discord Server',
            date: 'June 2023',
            description: 'Morbi vulputate aliquam libero non dictum. Aliquam sit amet nunc ut diam aliquet tincidunt nec nec dui. Donec mollis turpis eget egestas sodales.'
        },
        {
            title: 'Launching The App',
            date: 'August 2023',
            description: 'Suspendisse tincidunt, arcu nec faucibus efficitur, justo velit consectetur nisl, sit amet condimentum lacus orci nec purus. Mauris quis quam suscipit, vehicula felis id, vehicula enim.'
        }
    ]
</script>

<section class="dark dark:bg-gray-800 dark:text-gray-100">
    <div class="container max-w-5xl px-4 py-12 mx-auto">
      <div class="grid gap-4 mx-4 sm:grid-cols-12">
        <div class="col-span-12 sm:col-span-3">
          <div class="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-purple">
            <h3 class="text-3xl text-heading font-semibold">App Updates</h3>
            <!-- <span class="text-sm font-bold tracking-wider uppercase dark:text-gray-400">Vestibulum diam nunc</span> -->
          </div>
        </div>
        <div class="relative col-span-12 px-4 space-y-6 sm:col-span-9">
          <div class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-dark-purple">
            {#each updates as update}
                <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-purple">
                <h3 class="text-xl font-semibold tracking-wide text-heading">{update.title}</h3>
                <time class="text-xs tracking-wide uppercase dark:text-description">{update.date}</time>
                <p class="mt-3 text-dark-description">{update.description}</p>
                </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>