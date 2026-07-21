<script lang="ts">
	import TechTag from './tech-tag.svelte';

	let {
		title,
		description,
		imageUrl,
		techStack = [],
		githubUrl,
		demoUrl
	}: {
		title: string;
		description: string[];
		imageUrl?: string;
		techStack?: string[];
		githubUrl?: string;
		demoUrl?: string;
	} = $props();
</script>

<fieldset class="aspect-9/16 flex flex-col min-w-0 ">
	<legend class="px-2 font-bold">{title}</legend>

	<div class="aspect-video overflow-hidden shrink-0 border-1 border-black">
		{#if imageUrl}
			<img src={imageUrl} alt={title} class="w-full h-full object-cover" />
		{:else}
			<div
				class="w-full h-full"
				style="background: linear-gradient(135deg, #fff 45%, #ccc 45%, #ccc 55%, #fff 55%)"
			></div>
		{/if}
	</div>

	<div class="flex flex-col gap-2 pt-3 overflow-y-auto flex-1">
		<ul class="m-0 pl-4 text-sm leading-relaxed list-disc">
			{#each description as point (point)}
				<li>{point}</li>
			{/each}
		</ul>

		{#if techStack.length > 0}
			<div class="flex flex-wrap gap-1.5">
				{#each techStack as tech (tech)}
					<TechTag label={tech} />
				{/each}
			</div>
		{/if}

		<div class="flex gap-2 mt-auto">
			{#if githubUrl}
				<a
					href={githubUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn tag text-xs min-w-0 min-h-0"
				>
					GitHub
				</a>
			{/if}

			{#if demoUrl}
				<a
					href={demoUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="btn tag text-xs min-w-0 min-h-0"
				>
					Demo
				</a>
			{/if}
		</div>
	</div>
</fieldset>