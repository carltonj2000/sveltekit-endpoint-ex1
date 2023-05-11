<script lang="ts">
	import { page } from '$app/stores';
	let url = (id: number) => `${$page.url.pathname}/${id}`;
</script>

<h1>Dynamic Data For ID</h1>

<ul>
	<li><a href={url(1)}>1</a></li>
	<li><a href={url(2)}>2</a></li>
	<li><a href={url(3)}>3</a></li>
	<li><a href={url(4)}>4</a></li>
</ul>
