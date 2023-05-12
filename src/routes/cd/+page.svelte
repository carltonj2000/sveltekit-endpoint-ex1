<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Parent Of Child</h1>

<a href={`${$page.url.pathname}/child`}>Go to child route</a>
