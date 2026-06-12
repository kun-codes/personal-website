<script lang="ts">
	import { resolve } from '$app/paths';
	import BlogTag from './blog-tag.svelte';
	import { formatDate } from '$lib/content/blogs/blog-loader';

	let {
		post
	}: {
		post: { title: string; slug: string; date: string; tags: string[]; description?: string };
	} = $props();

	const postHref = $derived(resolve('/blogs/[slug]', { slug: post.slug }));
	const blogsHref = resolve('/blogs');
	const tagFilterHref = (tag: string) =>
		`${blogsHref}?${new URLSearchParams({ tag }).toString()}`;
</script>

<li class="standard-dialog m-0! min-w-0!">
	<h1 class="dialog-text">
		<a href={postHref}>{post.title}</a>
	</h1>

	{#if post.description}
		<p class="dialog-text text-justify">{post.description}</p>
	{/if}

	<div class="text-right mt-2 mb-2">
		<a href={postHref} class="btn" aria-label="Read more about {post.title}"> Read more </a>
	</div>

	<div class="flex justify-between items-center">
		<span class="flex flex-wrap gap-1.5">
			{#each post.tags as tag (tag)}
				<BlogTag label={tag} href={tagFilterHref(tag)} small={true} />
			{/each}
		</span>
		<span>{formatDate(post.date)}</span>
	</div>
</li>
