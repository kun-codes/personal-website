import { getPost, listPostSummaries } from '$lib/content/blogs/blog-loader';
import { error } from '@sveltejs/kit';
import type { PageLoad, EntryGenerator } from './$types';

export const entries: EntryGenerator = () => {
	return listPostSummaries().map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) {
		error(404, `Post "${params.slug}" not found`);
	}
	return { post };
};
