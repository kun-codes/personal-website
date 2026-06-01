<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import "@sakun/system.css"
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex justify-center p-2 lg:p-4 lg:px-0">
	<div class="standard-dialog p-2! lg:p-6! w-full lg:w-3/4">
		{@render children()}
		<div class="details-bar mt-4">
			<span>© 2026 Bishwa Bhusan Saha</span>
			<span class="flex gap-4">
				<a href="https://github.com/kun-codes/personal-website/blob/main/LICENSE" class="underline">MIT</a>
			</span>
		</div>
	</div>
</div>

<style>
	:global(div.window) {
		font-family: Geneva;
		text-align: justify;
	}

	:global(.details-bar) {
		font-weight: normal;
    }

    :global(h2) {
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>
