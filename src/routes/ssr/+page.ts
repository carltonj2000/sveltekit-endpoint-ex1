async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
}

let posts = getPosts();

export async function load() {
  return { posts };
}
