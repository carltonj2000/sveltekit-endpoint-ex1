<script lang="ts">
	export let data;
</script>

<h1>Universal Load Function</h1>

<p>
	Universal <em>load</em> functions return an object containing
	<b>any values</b> including Svelte components.
</p>

<svelte:component this={data.component} />
