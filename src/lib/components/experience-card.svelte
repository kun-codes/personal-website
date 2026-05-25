<script lang="ts">
	import TechTag from './tech-tag.svelte';

	let {
		company,
		role,
		startDate,
		endDate,
		description,
		logoUrl,
		techStack = []
	}: {
		company: string;
		role: string;
		startDate: string;
		endDate: string;
		description: string[];
		logoUrl?: string;
		techStack?: string[];
	} = $props();
</script>

<div class="window my-2 !ml-0 !mr-0 !min-w-0">
	<div class="title-bar">
		<span class="title">{company}</span>
	</div>
	<div class="separator"></div>
	<div class="flex gap-5 p-4 items-start text-left">
		<div class="shrink-0 w-20 h-20">
			{#if logoUrl}
				<img src={logoUrl} alt="{company} logo" class="w-full h-full object-contain outer-border" />
			{:else}
				<div class="w-full h-full outer-border" style="background: linear-gradient(135deg, #fff 45%, #000 45%, #000 55%, #fff 55%)"></div>
			{/if}
		</div>

		<div class="flex-1 min-w-0">
			<p class="m-0 mb-0.5 ">{role}</p>
			<p class="m-0 mb-2 text-sm">{startDate} — {endDate}</p>
			<ul class="m-0 mb-2 pl-4 text-sm leading-relaxed list-disc">
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
		</div>
	</div>
</div>
