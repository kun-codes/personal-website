export const formatDate = (value: string, monthFormat: 'short' | 'long' = 'short'): string =>
	new Date(value).toLocaleDateString('en-US', { year: 'numeric', month: monthFormat, day: 'numeric' });

export type BlogPost = {
	slug: string;
	title: string;
	date: string;
	description?: string;
	tags: string[];
};

export type BlogPostSummary = BlogPost & {
	dateTimestamp: number;
};

export type BlogPostModule = {
	default: import('svelte').Component;
	metadata?: {
		title?: string;
		date?: string;
		description?: string;
		tags?: string[];
	};
};

const modules = import.meta.glob<BlogPostModule>('./*.svx', { eager: true });

const slugFromPath = (path: string): string => {
	const fileName = path.split('/').pop() ?? '';
	return fileName.replace(/\.svx$/, '');
};

const posts: BlogPost[] = Object.entries(modules)
	.map(([path, mod]) => {
		const meta = mod.metadata ?? {};
		return {
			slug: slugFromPath(path),
			title: meta.title ?? slugFromPath(path),
			date: meta.date ?? new Date(0).toISOString(),
			description: meta.description,
			tags: meta.tags ?? []
		};
	})
	.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const listPosts = (): BlogPost[] => posts;

export const listPostSummaries = (): BlogPostSummary[] =>
	posts.map((post) => ({ ...post, dateTimestamp: new Date(post.date).getTime() }));

export const getPost = (slug: string): BlogPost | undefined =>
	posts.find((post) => post.slug === slug);

export const allTags: string[] = [...new Set(posts.flatMap((p) => p.tags))].sort();

export const getPostComponent = (slug: string): import('svelte').Component | undefined => {
	for (const [path, mod] of Object.entries(modules)) {
		if (slugFromPath(path) === slug) return mod.default;
	}
	return undefined;
};
