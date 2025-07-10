import { createFileRoute } from '@tanstack/react-router'

import '../styles/gallery.css'

import Card from '../components/Card'

import data from '../data.json'

export const Route = createFileRoute('/gallery/')({
	component: Gallery,
})

function Gallery() {

	return (
		<>
			<h1>Gallery Page</h1>
			<div className='gallery'>
				{data.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</div>
		</>
	)
}