<script lang="ts">
	import { page } from '$app/stores';
	let randomNumber = 0;

	async function getRandomNumber() {
		const response = await fetch(`${$page.url.pathname}/random-number`);
		randomNumber = await response.json();
	}
</script>

<h1>Random Number</h1>
<h2>{randomNumber.toFixed(1)}</h2>

<button on:click={getRandomNumber}>Get New Random Number</button>
