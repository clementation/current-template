import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

import '../styles/about.css';
import Button from '../components/Button';
import RabbitGame from '../components/RabbitGame';

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	return (
		<div className="auto-wrapper double-gap padding">
			<div className="auto-wrapper flex-column padding align-center">
				<RabbitGame />
			</div>
			<div className="auto-wrapper flex-column padding">
				<div className="text-wrapper">
					<h1>Lets go down the rabbit hole</h1>
					<p>Hi, I’m Connor Kealey. I've found that Every project starts with a rabbit hole — a tangle of ideas, questions, and possibilities. My job is to dive in, sort through the maze, and bring back something clear, crafted, and ready to show off. </p>
				</div>
				<div className="text-wrapper skills">
					<ul>
						<li> I build web apps</li>
						<li> develop branding</li>
						<li> create animations</li>
						<li> & make related materials</li>
					</ul>
				</div>

				<div className="auto-wrapper btn-wrapper">
					<Link to={"/work"}>
						<Button> See work </Button>
					</Link>
				</div>

				<div className="text-wrapper">
					<p>I'm avaliable for work so if you like what you see, please <Link to={"/contact"}>get in touch</Link>.</p>
				</div>

			</div>
		</div>
	)
}