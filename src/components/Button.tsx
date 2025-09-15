import { useState } from "react"
import { motion } from 'motion/react';

import '../styles/contact.css';

export default function Button({children, onClick}: {children: React.ReactNode, onClick?: () => void}) {

    const [clicked, setClicked] = useState(false);

    return(
        <motion.button 
            className={`button${clicked ? ' clicked' : ''}`}
            whileHover={{ scale: 1.07 }}
            onClick={() => {
                if(onClick) onClick();
				setClicked(true);
				setTimeout(() => setClicked(false), 500);
		    }}
        >
            {children}
        </motion.button>
    )
}