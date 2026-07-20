<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	import "@sakun/system.css"
	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="flex justify-center p-2 lg:p-4 lg:px-0">
	<div class="w-full lg:w-3/4">
		{@render children()}
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
