<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<h1>Layout For Parent And Child</h1>

<pre>{JSON.stringify($page, null, 2)}</pre>
<slot />
