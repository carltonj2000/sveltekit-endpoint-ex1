export async function load({ fetch }) {
	const response = await fetch(`/post/posts`);
	return { posts: await response.json() };
}
