import { createFileRoute } from '@tanstack/react-router'

import '../styles/gallery.css'

import Card from '../components/Card'

import data from '../new-data.json'

export const Route = createFileRoute('/work/')({
	component: Gallery,
})

function Gallery() {

	return (
		<>
			<h1>Here's what I've made</h1>
			<div className='gallery'>
				{data.map((item, index) => (
					<Card key={index} item={item} />
				))}
			</div>
		</>
	)
}