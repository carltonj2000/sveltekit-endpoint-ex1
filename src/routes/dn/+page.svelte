<script lang="ts">
	export let data;
</script>

<h1>Defer Navigation</h1>
<section data-sveltekit-preload-data="off">
	{#if data}
		{#each data.images as image}
			<a href={`dn/${image.id}`}>
				<img src={image.thumbnailUrl} alt={image.title} />
			</a>
		{/each}
	{/if}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 0.2rem;
	}
</style>
