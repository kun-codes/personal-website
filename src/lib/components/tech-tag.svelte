<script lang="ts">
	let { label }: { label: string } = $props();
</script>

<button
	class="btn tag text-xs min-w-0 min-h-0 border-2 pointer-events-none cursor-default"
	type="button"
>
	{label}
</button>

<style>
	.tag {
		padding: 0 4px;
	}
</style>
