import { createFileRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'

import '../styles/about.css';
import Button from '../components/Button';

export const Route = createFileRoute('/')({
	component: Index,
})

function Index() {
	return (
		<div className="auto-wrapper double-gap">
			<div className="auto-wrapper flex-column">
				<div className="text-wrapper">
					<h1>About Page</h1>
				</div>
				<div className="image-wrapper pfp">
					<img src="/bunny.jpg" alt="a bunny with glasses drawn on" />
				</div>
				<div className="text-wrapper secondary">
					<h1>(not actually me)</h1>
				</div>
			</div>
			<div className="auto-wrapper flex-column">
				<div className="text-wrapper">
					<h1>Lets go down the rabbit hole</h1>
					<p>Hello there, I appreciate you stopping by. My name is Connor Kealey and I'd like to get to know you. What I do begins with a handshake and ends with someing you'll want to show off. Between A and B is a maze full of ideas about your business, and questions about how you'll show your clients. </p>
				</div>
				<div className="text-wrapper skills">
					<ul>
						<li> I build web apps</li>
						<li> develop branding</li>
						<li> & make related materials</li>
					</ul>
				</div>

				<div className="auto-wrapper btn-wrapper">
					<Link to={"/contact"}>
						<Button> See work </Button>
					</Link>
				</div>

				<div className="text-wrapper">
					<p>I'm avaliable for work so if you like what you see please <Link to={"/contact"}>get in touch</Link>.</p>
				</div>

			</div>
		</div>
	)
}