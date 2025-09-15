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

    const itemPath = `/work/${item.title}`

    return (

        <Link to={itemPath} >
            <motion.div 
                className="card"
                // className={`card${hovered ? " show-border" : ""}`}
                onMouseEnter={ !isMobile ? () => setHovered(true) : undefined } 
                onMouseLeave={ !isMobile ? () => setHovered(false) : undefined }
                initial={{ scale: 1 }}
                animate={{ scale: hovered ? 1.01 : 1 }}
                transition={{
                    ease: "easeInOut",
                    duration: 0.3
                }}
            >
                <div className="image-stack">
                    <motion.div
                        // className="image-wrapper"
                        // style={{ position: 'absolute', inset: 0 }}
                        // initial={false}
                        // animate={{ opacity: hovered ? 0 : 1 }}
                        // transition={{
                        //     ease: "easeInOut",
                        //     duration: 0.3
                        // }}
                    >
                        <LazyImage src={item.heroImage.src} alt={item.heroImage.src} />
                    </motion.div>
                    <motion.div
                        className="image-wrapper"
                        style={{ position: 'absolute', inset: 0 }}
                        initial={false}
                        animate={{ opacity: hovered ? 1 : 0 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.3
                        }}
                    >
                        <LazyImage src={item.hoverImage.src} alt={item.hoverImage.src} />
                    </motion.div>
                    
                </div>
                {/* <AnimatePresence>
                    { hovered && <CardTitle title={item.title} /> }
                </AnimatePresence> */}
            </motion.div>
        </Link>

    )
}


function CardTitle({ title }: { title: string }) {

    return (
        <motion.div 
                className='card-title'
                initial={{
                    scale: 0
                }}
                animate={{
                    scale: 1
                }}
                exit={{
                    scale: 0
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