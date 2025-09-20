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
      <div className="auto-wrapper flex-column no-padding stay">
        <div className="text-wrapper secondary me">
          <h1>welcome</h1>
        </div>
        <div className="image-wrapper me">
          <LazyImage src="/actually-me.jpg" alt="a cream colored bunny rabbit with circular glasses drawn on"/>
        </div>
        <div className="text-wrapper secondary">
          <h1>(actually me)</h1>
        </div>
      </div>
      <div className="auto-wrapper flex-column gap">
        <div className="text-wrapper secondary">
          <h1>bunnies of cannon beach</h1>
        </div>
          <LazyImage src="./bunny-photos/bunny photos-1.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-2.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-3.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-4.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-5.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-6.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-7.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-8.jpg" alt="a really cute bunny" />
          <LazyImage src="./bunny-photos/bunny photos-9.jpg" alt="a really cute bunny" />
      </div>
    </div>
  )
}
