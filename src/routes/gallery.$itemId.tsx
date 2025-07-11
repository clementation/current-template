import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import data from '../data.json'

import LazyImage from '../components/LazyImage'

export const Route = createFileRoute('/gallery/$itemId')({
	component: GalleryItem,
	loader: ({ params: { itemId } }) => fetchItem(itemId)
})

function GalleryItem() {
	const item = useLoaderData({ from: '/gallery/$itemId' })
    if (!item) return <div>Item not found</div>
	return (
		<>
			<h1>{item.title}</h1>
			<p>{item.description}</p>
			{item.images.map((image, index) => (
				<LazyImage key={index} src={image.src} alt={image.alt} />
			))}
		</>
	)
}

interface GalleryImage {
	src: string;
	alt: string;
}

interface GalleryItemData {
	title: string;
	description: string;
	images: GalleryImage[];
}

function fetchItem(itemId: string): GalleryItemData | undefined {
	return (data as GalleryItemData[]).find((i: GalleryItemData) => i.title === itemId);
}