import { useRef } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import emailjs from '@emailjs/browser';

import '../styles/contact.css';

export const Route = createFileRoute('/contact')({
	component: Contact,
})

function Contact() {

	const form = useRef<HTMLFormElement>(null);

	function sendEmail(event: React.FormEvent<HTMLFormElement>) {
	event.preventDefault();

	emailjs
	  .sendForm('contact_form', 'template_ez74gjh', form.current!, {
		publicKey: 'UUUX95lcolcHglqyA',
	  })
	  .then(
		() => {
		  console.log('SUCCESS!');
		},
		(error) => {
		  console.log('FAILED...', error.text);
		},
	  );
		};

	return (
		<div className="auto-wrapper flex-column">
			<div className="text-wrapper">
				<h1>What's on your mind?</h1>
			</div>
			<form ref={form} className="contact-form" onSubmit={sendEmail}>
				<div className='form-row'>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" required />
				</div>
				<div className='form-row'>
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" required />
				</div>
				<div className='form-row'>
					<label htmlFor="subject">Subject</label>
					<input type="text" id="subject" name="subject" required />
				</div>
				<div className='form-row'>
					<label htmlFor="message">Message</label>
					<textarea id="message" name="message" rows={4} required />
				</div>
				<button className='submit-button' type="submit">Send</button>
			</form>

		</div>
	)
}