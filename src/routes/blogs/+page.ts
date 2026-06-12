import { listPostSummaries, allTags } from '$lib/content/blogs/blog-loader';
import type { PageLoad } from './$types';

const PAGE_SIZE = 10;

const parsePage = (raw: string | null): number => {
	const parsed = Number.parseInt(raw ?? '1', 10);
	if (Number.isNaN(parsed) || parsed < 1) return 1;
	return parsed;
};

const filterByTag = (tag: string | null) => {
	const summaries = listPostSummaries();
	if (!tag) return summaries;
	return summaries.filter((post) => post.tags.includes(tag));
};

export const load: PageLoad = ({ url }) => {
	const tag = url.searchParams.get('tag');
	const selectedTag = tag && tag.trim() ? tag : null;

	const filtered = filterByTag(selectedTag);
	const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
	const page = Math.min(parsePage(url.searchParams.get('page')), pageCount);

	const start = (page - 1) * PAGE_SIZE;
	const posts = filtered.slice(start, start + PAGE_SIZE).map(
		({ dateTimestamp: _ts, ...rest }) => rest
	);

	return { posts, selectedTag, page, pageCount, pageSize: PAGE_SIZE, allTags };
};
