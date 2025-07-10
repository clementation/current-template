import { createFileRoute, useParams } from '@tanstack/react-router'
import data from '../data.json'

export const Route = createFileRoute('/gallery/$itemId')({
  component: GalleryItem,
})

function GalleryItem() {  
  const { itemId } = useParams({ from: '/gallery/$itemId' })
  console.log('Item ID:', itemId)
  const item = data.find(i => i.title === itemId)
  if (!item) return <div>Item not found</div>
  return (
    <>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {item.images.map((image, index) => (
        <img key={index} src={image.src} alt={image.alt} />
      ))}
    </>
  )
}