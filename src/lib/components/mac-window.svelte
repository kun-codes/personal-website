<script lang="ts">
	import { type Snippet } from 'svelte';
	import { resolve } from '$app/paths';
	import canvasPattern from '$lib/assets/canvas.png';

	type MenuLink = { label: string; href: string; external?: boolean };

	let {
		title = '',
		menus,
		details,
		children
	}: {
		title?: string;
		menus: MenuLink[];
		details?: Snippet;
		children?: Snippet;
	} = $props();

	const isExternal = (href: string, external?: boolean) =>
		external === true || /^https?:\/\//.test(href);
</script>

<div
	class="mac-window"
	style="--canvas-pattern: url({canvasPattern});"
>
	<div class="title-bar mac-menubar">
		<a class="apple" aria-label="Apple menu" href="/"></a>
		<ul class="mac-menu-bar" role="menubar">
			{#each menus as item (item.label)}
				<li role="menuitem">
					<a
						href={item.href}
						target={isExternal(item.href, item.external) ? '_blank' : undefined}
						rel={isExternal(item.href, item.external) ? 'noopener noreferrer' : undefined}
						>{item.label}</a
					>
				</li>
			{/each}
		</ul>
	</div>

	<div class="separator"></div>

	<div class="mac-inner">
		<div class="separator"></div>
		<div class="title-bar">
			<button class="close" aria-label="Close"></button>
			<h1 class="title">{title}</h1>
			<button class="resize" aria-label="Resize"></button>
		</div>
		<div class="separator"></div>

		<div class="mac-body">
			<div class="window-pane mac-pane">
				{#if children}
					{@render children()}
				{/if}
			</div>
		</div>

		{#if details}
			<div class="details-bar">
				{@render details()}
			</div>
		{/if}
	</div>
</div>

<style>
	.mac-window {
		position: relative;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		background-image: var(--canvas-pattern);
		background-repeat: repeat;
		border: 0.1em solid #000;
		border-radius: 1rem 1rem 0 0;
		overflow: hidden;
		margin: 0;
		min-width: 320px;
		max-height: 100%;
		height: calc(100vh - 2rem);
	}

	.mac-inner {
		position: relative;
		background-color: #fff;
		border: 0.1em solid #000;
		border-top: none;
		display: flex;
		flex-direction: column;
		flex: 1 1 auto;
		min-height: 0;
		margin: 3px;
	}

	.mac-menubar {
		background: #fff;
		display: flex;
		flex: none;
		align-items: center;
		height: 1.5rem;
		margin: 0;
		padding: 0.2rem 0.1rem;
	}

	.mac-menubar .apple {
		background: url("data:image/svg+xml;charset=utf-8,%3Csvg width='18' height='22' viewBox='0 0 9 11' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5 0h2v1H5zM4 1h2v1H4zM4 2h1v1H4zM1 3h3v1H1zM5 3h3v1H5zM0 4h9v1H0zM0 5h7v2H0zM0 7h9v2H0zM1 9h7v1H1zM2 10h2v1H2zM5 10h2v1H5z'/%3E%3C/svg%3E");
		background-repeat: no-repeat;
		border: none;
		display: inline-block;
		height: 22px;
		width: 18px;
		margin-right: 2px;
		margin-left: 0.2rem;
		cursor: pointer;
		padding: 0;
		transform: scale(0.5);
	}

	.mac-menu-bar {
		display: flex;
		align-items: center;
		list-style: none;
		margin: 0;
		padding: 0;
		background: #fff;
	}

	.mac-menu-bar li {
		padding: 0;
		font-family: Chicago_12, Chicago, sans-serif;
		font-size: 1rem;
		cursor: default;
	}

	.mac-menu-bar a {
		all: unset;
		display: block;
		padding: 0 6px;
		cursor: default;
		font: inherit;
		color: inherit;
		text-decoration: none;
	}

	.mac-menu-bar li:hover {
		background: #000;
		color: #fff;
	}

	.mac-body {
		display: flex;
		flex: 1 1 auto;
		min-height: 0;
	}

	.mac-pane {
		flex: 1 1 auto;
		font-size: 18px;
		letter-spacing: -0.025em;
		overflow-y: scroll;
		padding: 1rem 1rem;
	}

	.details-bar {
		padding-right: calc(1rem + 22px);
	}
</style>
