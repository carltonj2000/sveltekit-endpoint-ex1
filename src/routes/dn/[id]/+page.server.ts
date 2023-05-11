async function getImage(img: number) {
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/photos/${img}`
	);
	const image = await response.json();
	return image;
}

export async function load({ params }) {
	return { id: params.id, image: await getImage(params.id) };
}
