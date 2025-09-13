import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from '@tanstack/react-router'; // Adjust import based on your routing library
import { useMediaQuery } from 'react-responsive';

import LazyImage from './LazyImage';

import '../styles/card.css';

// Card Behavior:
// Displays the cover image of a subject in the gallery
// Hovering reveals the title of the subject
// Clicking navigates to the subject's detail page

export default function Card({ item }: { item: any }) {

    const [ hovered, setHovered ] = useState(false)

    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    const itemPath = `/gallery/${item.title}`

    return (

        <Link to={itemPath} >
            <motion.div 
                className={`card${hovered ? " show-border" : ""}`}
                onMouseEnter={ !isMobile ? () => setHovered(true) : undefined } 
                onMouseLeave={ !isMobile ? () => setHovered(false) : undefined }
            >
                {/* <img src={item.images[0].src} alt={item.images[0].alt} loading='lazy'/> */}
                <LazyImage src={item.heroImage.src} alt={item.heroImage.src} />
                <AnimatePresence>
                    { hovered && <CardTitle title={item.title} /> }
                </AnimatePresence>
            </motion.div>
        </Link>

    )
}


function CardTitle({ title }: { title: string }) {

    return (
        <motion.div 
                className='card-title'
                initial={{
                    height: 0,
                    opacity: 0
                }}
                animate={{
                    height: "auto",
                    opacity: 1
                }}
                exit={{
                    height: 0,
                    opacity: 0
                }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.3
                }}
            >
                <motion.h3>
                    {title}
                </motion.h3>
        </motion.div>
    )
}