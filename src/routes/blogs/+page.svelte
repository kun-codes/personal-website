<script lang="ts">
    import { resolve } from '$app/paths';
</script>

<div class="standard-dialog min-w-0! ">
	<ul role="menu-bar" class="flex flex-wrap justify-center">
		<li role="menu-item" tabindex="0" aria-haspopup="false"><a href={resolve("/")}>home</a></li>
		<li role="menu-item" tabindex="0" aria-haspopup="false"><a href={resolve("/#contact-me")}>contact</a></li>
	</ul>
</div>

<div>
	<h2>Blog</h2>
	<p>Welcome to my blog!</p>
</div>
