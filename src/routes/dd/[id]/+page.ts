async function getPosts(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.json();
}

export async function load({ params }) {
  return { post: await getPosts(params.id) };
}
