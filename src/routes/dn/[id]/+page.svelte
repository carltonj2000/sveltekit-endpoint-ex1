<script lang="ts">
	export let data;
</script>

<h1>Single Image {data.id}</h1>
<img src={data.image.url} alt={data.image.title} />
