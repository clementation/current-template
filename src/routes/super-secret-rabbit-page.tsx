import { createFileRoute } from '@tanstack/react-router'
import LazyImage from '../components/LazyImage'

import '../styles/gallery.css'
import '../styles/super-secret-rabbit-page.css'

export const Route = createFileRoute('/super-secret-rabbit-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return(

    <div className="auto-wrapper">
      <div className="auto-wrapper flex-column no-padding">
        <div className="image-wrapper me">
          <LazyImage src="/actually-me.jpg" alt="a cream colored bunny rabbit with circular glasses drawn on"/>
        </div>
        <div className="text-wrapper secondary">
          <h1>(actually me)</h1>
        </div>
      </div>
      <div className="auto-wrapper">
        <div className="text-wrapper">
          <h1>Rabbit photo gallery incoming</h1>
        </div>
      </div>
    </div>
  )
}
