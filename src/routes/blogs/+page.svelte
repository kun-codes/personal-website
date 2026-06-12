<script lang="ts">
	import { resolve } from '$app/paths';
	import { SvelteURLSearchParams } from 'svelte/reactivity';
	import BlogCard from '$lib/components/blog-card.svelte';
	import BlogTag from '$lib/components/blog-tag.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	const tagFilterHref = (tag: string) => {
		const params = new SvelteURLSearchParams();
		params.set('tag', tag);
		params.set('page', '1');
		return `${resolve('/blogs')}?${params.toString()}`;
	};
	const pageQuery = (target: number) => {
		const params = new SvelteURLSearchParams();
		if (data.selectedTag) params.set('tag', data.selectedTag);
		if (target > 1) params.set('page', String(target));
		const qs = params.toString();
		return qs ? `?${qs}` : '';
	};

</script>

<div class="standard-dialog min-w-0!">
	<ul role="menu-bar" class="flex flex-wrap justify-center">
		<li role="menu-item" tabindex="0" aria-haspopup="false">
			<a href={resolve('/')}>home</a>
		</li>
		<li role="menu-item" tabindex="0" aria-haspopup="false">
			<a href={resolve('/#contact-me')}>contact</a>
		</li>
	</ul>
</div>

<div>
	<h2>Blog</h2>
	<p>Welcome to my blog! Thoughts on things I'm building and learning.</p>

	<div class="flex flex-wrap items-center gap-1.5 mt-2 mb-4">
		<span class="text-sm font-bold mr-1">Filter by tag:</span>
		<BlogTag label="all" href={resolve('/blogs')} active={data.selectedTag === null} />
		{#each data.allTags as tag (tag)}
			<BlogTag
				label={tag}
				href={tagFilterHref(tag)}
				active={data.selectedTag === tag}
			/>
		{/each}
	</div>

	{#if data.posts.length === 0}
		<p>No posts found.</p>
	{:else}
		<ul class="list-none p-0 m-0 flex flex-col gap-3">
			{#each data.posts as post (post.slug)}
				<BlogCard {post} />
			{/each}
		</ul>
	{/if}

	<div class="flex justify-between items-center mt-4">
		{#if data.page <= 1}
			<button class="btn" disabled>Previous</button>
		{:else}
			<a href="{resolve('/blogs')}{pageQuery(data.page - 1)}" class="btn">Previous</a>
		{/if}
		<span class="text-sm">Page {data.page} of {data.pageCount}</span>
		{#if data.page >= data.pageCount}
			<button class="btn" disabled>Next</button>
		{:else}
			<a href="{resolve('/blogs')}{pageQuery(data.page + 1)}" class="btn">Next</a>
		{/if}
	</div>
</div>
