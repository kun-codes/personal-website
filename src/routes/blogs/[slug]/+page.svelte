<script lang="ts">
	import { resolve } from '$app/paths';
	import { SvelteURLSearchParams } from 'svelte/reactivity';
	import BlogTag from '$lib/components/blog-tag.svelte';
	import MacWindow from '$lib/components/mac-window.svelte';
	import { getPostComponent, formatDate } from '$lib/content/blogs/blog-loader';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const Component = $derived(getPostComponent(data.post.slug));

	const allPostsHref = resolve('/blogs');
	const tagFilterHref = (tag: string) => {
		const params = new SvelteURLSearchParams();
		params.set('tag', tag);
		return `${allPostsHref}?${params.toString()}`;
	};
</script>

<MacWindow
	title={data.post.title}
	menus={[
		{ label: 'home', href: '/' },
		{ label: 'blogs', href: '/blogs' },
		{ label: 'contact', href: '/#contact-me' }
	]}
>
	<article class="text-justify">
		<header>
			<div class="flex flex-wrap-reverse items-center justify-between gap-1">
				<span class="order-2">{formatDate(data.post.date)}</span>
				<span class="order-1 flex flex-wrap gap-1.5">
					{#each data.post.tags as tag (tag)}
						<BlogTag label={tag} href={tagFilterHref(tag)} small={true}/>
					{/each}
				</span>
			</div>

		</header>

		<div class="separator mt-4 mb-4"></div>

		<div>
    		{#if Component}
    			<Component />
    		{:else}
    			<p>Post not found.</p>
    		{/if}
		</div>
	</article>

	<div class="separator mt-4 mb-4"></div>

	<div>
		<a href={resolve('/blogs')} class="btn">&larr; Back to all posts</a>
	</div>
</MacWindow>
