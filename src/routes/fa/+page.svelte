<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
</script>

<h1>Form Actions</h1>

<form method="POST" use:enhance>
	{#if form?.invalid}
		<p class="error">Invalid credentials</p>
	{/if}
	<label for="email">
		Email: <input type="email" name="email" value={form?.email ?? ''} />
	</label>
	<label for="password">
		Password: <input
			type="password"
			name="password"
			value={form?.password ?? ''}
		/>
	</label>
	<button formaction="?/login">Log In</button>
	<button formaction="?/register">Register</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		width: min-content;
	}
	.error {
		color: red;
	}
</style>
