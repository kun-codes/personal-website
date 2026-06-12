<script lang="ts">
	import { resolve } from '$app/paths';
	import { SvelteURLSearchParams } from 'svelte/reactivity';
	import BlogTag from '$lib/components/blog-tag.svelte';
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

<div class="standard-dialog min-w-0!">
	<ul role="menu-bar" class="flex flex-wrap justify-center">
		<li role="menu-item" tabindex="0" aria-haspopup="false">
			<a href={resolve('/')}>home</a>
		</li>
		<li role="menu-item" tabindex="0" aria-haspopup="false">
			<a href={resolve('/blogs')}>blogs</a>
		</li>
		<li role="menu-item" tabindex="0" aria-haspopup="false">
			<a href={resolve('/#contact-me')}>contact</a>
		</li>
	</ul>
</div>

<div>
	<article class="text-justify">
		<header>
			<h2 class="mb-1!">{data.post.title}</h2>

            <div class="flex flex-col items-start gap-1">
				<span>{formatDate(data.post.date)}</span>
			    <span class="flex flex-wrap gap-1.5">
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
</div>
