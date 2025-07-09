import { createFileRoute } from '@tanstack/react-router'

// import PageTransitionWrapper from '../components/PageTransitionWrapper'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return(
    // <PageTransitionWrapper>
      <div className="p-2">Hello from About!</div>
    // </PageTransitionWrapper>
  ) 
}