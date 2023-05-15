<script lang="ts">
	import { page } from '$app/stores';
	const api = (str: string) => `${$page.url.pathname}/posts${str}`;
	export let data;
	$: ({ posts } = data);
</script>

<h1>API Endpoint</h1>

<div>
	<a href={api('')} traget="_blank">Post API</a>
	<a href={api('?start=0&end=3')} traget="_blank">Post API with range</a>
	<a href={api('?start=0&end=4&userId=2')} traget="_blank"
		>Post API with range adn user</a
	>
</div>

<ul>
	{#each posts as { id, title }}
		<li>{title}</li>
		<!-- <li><a href={api(`/${id}`)}>{title}</a></li> -->
	{/each}
</ul>

<style>
	div {
		display: flex;
		flex-direction: column;
	}
</style>
