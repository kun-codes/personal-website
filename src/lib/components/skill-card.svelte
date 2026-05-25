<script lang="ts">
	let {
		name,
		imageUrl
	}: {
		name: string;
		imageUrl: string;
	} = $props();
</script>

<div class="window flex flex-col items-center min-w-0! m-1!">
	<div class="flex flex-col items-center justify-center gap-2 p-4">
		<img src={imageUrl} alt={name} class="w-16 h-16 object-contain" />
		<p class="m-0 text-sm text-center">{name}</p>
	</div>
</div>
