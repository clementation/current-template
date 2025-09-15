import { useRef } from 'react';
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'motion/react';

import '../styles/contact.css';
import '../styles/button.css'

export const Route = createFileRoute('/contact')({
	component: Contact,
})

function Contact() {

	const [submitted, setSubmitted] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [clicked, setClicked] = useState(false);

	const form = useRef<HTMLFormElement>(null);

	function sendEmail(event: React.FormEvent<HTMLFormElement>) {
	event.preventDefault();

	emailjs
	  .sendForm('contact_form', 'template_ez74gjh', form.current!, {
		publicKey: 'UUUX95lcolcHglqyA',
	  })
	  .then(
		() => {
			setSubmitted(true)
			setClicked(false)
		  console.log('SUCCESS!')
		},
		(error) => {
		  console.log('FAILED...', error.text);
		},
	  );
		};

	return (
		<div className="auto-wrapper justify-center">

			<div className="auto-wrapper flex-column">
				<div className="text-wrapper">
					<h1>What's on your mind?</h1>
				</div>
				{
					submitted ? (
						<div className="text-wrapper">
							<h2>Thanks for reaching out!</h2>
						</div>
					) : (
							<form ref={form} className="contact-form" onSubmit={sendEmail}>
						<div className='form-row'>
							<label htmlFor="name">Name</label>
							<input
								type="text"
								id="name"
								name="name"
								required
								value={name}
								onChange={e => setName(e.target.value)}
							/>
						</div>
						<div className='form-row'>
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								name="email"
								required
								value={email}
								onChange={e => setEmail(e.target.value)}
							/>
						</div>
						<div className='form-row'>
							<label htmlFor="subject">Subject</label>
							<input
								type="text"
								id="subject"
								name="subject"
								required
								value={subject}
								onChange={e => setSubject(e.target.value)}
							/>
						</div>
						<div className='form-row'>
							<label htmlFor="message">Message</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								required
								value={message}
								onChange={e => setMessage(e.target.value)}
							/>
						</div>
						<motion.button
							className={`button${clicked ? ' clicked' : ''}`}
							type="submit"
							whileHover={{ scale: 1.07 }}
							onClick={() => {
								setClicked(true);
								setTimeout(() => setClicked(false), 500);
							}}
						>
							Send
						</motion.button>
					</form>
					)
				}
			</div>

			<div className="auto-wrapper flex-column">
				<div className="text-wrapper">
					<h1>Reach out later</h1>
				</div>
				<div className="text-wrapper">
					<h2><span className='line'>creations@</span><span className='line'>connorkealey.design</span></h2>
				</div>
				<div className="text-wrapper">
					<h2>971-238-6140</h2>
				</div>
				<div className="text-wrapper">
					<p>PO. Box 1246 <br /> Cannon Beach <br /> OR 97110 </p>
				</div>
			</div>

		</div>
	)
}

function form(){
	
}