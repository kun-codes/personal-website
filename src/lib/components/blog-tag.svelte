<script lang="ts">
	let {
		label,
		href,
		active = false,
		small = false
	}: {
		label: string;
		href: string;
		active?: boolean;
		small?: boolean;
	} = $props();
</script>

<a
	{href}
	class="tag min-w-0 min-h-0 no-underline {active ? 'btn btn-default' : 'btn'} {small ? 'text-sm!' : ''}"
>
	{label}
</a>

<style>
	.tag {
		padding: 0 4px;
	}
</style>
