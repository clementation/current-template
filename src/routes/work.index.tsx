import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'

import '../styles/gallery.css'

import Card from '../components/Card'

// import data from '../new-data.json'

export const Route = createFileRoute('/work/')({
	component: Gallery,
})

function Gallery() {

	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		fetch('/data.json')
			.then((res) => res.json())
			.then((json) => setData(json))
			.catch((err) => console.error('Failed to fetch data:', err));
	}, []);

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