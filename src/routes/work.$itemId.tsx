import { createFileRoute, useLoaderData } from '@tanstack/react-router'
import { useMediaQuery } from 'react-responsive';
import data from '../new-data.json'

import LazyImage from '../components/LazyImage'

export const Route = createFileRoute('/work/$itemId')({
	component: GalleryItem,
	loader: ({ params: { itemId } }) => fetchItem(itemId)
})

function GalleryItem() {
	const item = useLoaderData({ from: '/work/$itemId' })
    if (!item) return <div>Item not found</div>

	return (
		<div className="auto-wrapper flex-column double-gap">
			<div className="auto-wrapper justify-center align-center reverse-on-mobile double-gap">
				<div className="text-wrapper">
					<h1>{item.title}</h1>
					<p>{item.description}</p>
				</div>
				<div className="image-wrapper">
					<LazyImage src={item.heroImage.src} alt={item.heroImage.alt} />
				</div>
			</div>
			{item.sections.map((section, index) => (
				<Section key={index} section={section} />
			))}
		</div>
	)
}

function Section({section}){
	switch (section.type) {
		case 'image':
			return (
                //if there is no description the wrapper will display in column instead of row to give priority to the image
                <div className={`auto-wrapper justify-center align-center reverse-on-mobile double-gap ${section.description? `` : `flex-column-reverse`}`}>
                    {(section.heading || section.description) && (
						<div className="text-wrapper">
							{section.heading && <h2>{section.heading}</h2>}
							{section.description && <p>{section.description}</p>}
						</div>
					)}
                    <div className="image-wrapper">
						<LazyImage src={section.src} alt={section.alt} />
					</div>
                </div>
            )
		case 'gallery':
			// Use media query to determine if the device is mobile
    		const isMobile = useMediaQuery({ query: '(max-width: 768px)' })
			let width
			if(section.mobileWidth && isMobile){
				width = section.mobileWidth
			}else{
				width = section.width
			}

			return (
                //if there is no description the wrapper will display in column instead of row to give priority to the image
                <div className={`auto-wrapper justify-center align-center reverse-on-mobile double-gap ${section.description? `` : `flex-column-reverse`}`}>
                    {(section.heading || section.description) && (
						<div className="text-wrapper">
							{section.heading && <h2>{section.heading}</h2>}
							{section.description && <p>{section.description}</p>}
						</div>
					)}
                    <div className={`section-gallery ${width}`} >
						{section.images.map((image, index) => (
							<div className="gallery-section-image" key={index}>
								<LazyImage key={index} src={image.src} alt={image.alt} />
							</div>
						))}
					</div>
                </div>
            )
		default:
			return null
	}
}

interface image {
	src: string;
	alt: string;
}


interface GalleryItemData {
	title: string;
	description: string;
	heroImage: image;
}

function fetchItem(itemId: string): GalleryItemData | undefined {
	return (data as GalleryItemData[]).find((i: GalleryItemData) => i.title === itemId);
}