import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useMediaQuery } from 'react-responsive';

import NavTabs from './NavTabs';

import '../styles/navbar.css';

//Navbar behavior:
//1. Default state when page is loaded and user is at the top of the page
//2. When user scrolls down past a certain threshold, navbar shrinks to a smaller size
//3. When user scrolls back to the top, navbar returns to default size
//4. In mobile view, user can click a button to expand the navbar to show more options
//5. When user clicks the button again, navbar collapses back to default sizeor small size if user has scrolled down

// Define allowed navState values
// Default - when Y scroll is less than scrollThreshold value
// Small - when Y scroll is greater than scrollThreshold value
// Expanded - when user expands navbar in mobile view
type navState = "default" | "small" | "expanded";

interface StateProps {
    navState: navState;
    setNavState: React.Dispatch<React.SetStateAction<navState>>;
    handleEscape: () => void;
}

export default function Navbar({}) {

    //Scroll threshold to trigger navbar size change
    const scrollThreshold: number = 70;

    //Determins the state of the navbar
    const [navState, setNavState] = useState<navState>("default");

    // Handle scroll event to toggle navbar size
    // Also checks threshold when closing expanded navbar in mobile view
    function handleEscape () {

        if (window.scrollY > scrollThreshold) { // User has scrolled down
            setNavState("small");
        } else { // User is at the top of the page
            setNavState("default");
        }
    }

    // Effect to handle scroll events and toggle navbar size
    useEffect(() => {

        if (navState === "expanded") return; // Skip if navbar is manually expanded

        window.addEventListener('scroll', handleEscape);
        return () => window.removeEventListener('scroll', handleEscape);
    }, []);

    // Key styles for chaning height of navbar when scrolling down
    const navbarStyle = {
        large: {
            height: "5rem",
            paddingTop: "1rem",
            paddingBottom: "1rem"
        },
        small: {
            height: "3rem",
            paddingTop: "0.75rem",
            paddingBottom: "0.75rem"
        }
    }

    // Use media query to determine if the device is mobile
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    return (
        <nav>
            <motion.div className='navbar-content'
                variants={navbarStyle}
                initial={navState === "default" || navState === "expanded" ? "large" : "small"}
                animate={navState === "default" || navState === "expanded" ? "large" : "small"}  
            >
                <div className='navbar-left'></div>
                <div className="navbar-logo">
                    <a href="/">
                        <img src={navState === "default" || navState === "expanded" ? "/logo.svg" : "/logo-small.svg"} alt="Logo" />
                    </a>
                </div>
                <div className='navbar-right'>
                    {isMobile ? <Burger navState={navState} setNavState={setNavState} handleEscape={handleEscape} /> : <NavTabs /> }
                </div>
            </motion.div>
            <AnimatePresence>
                {navState === "expanded" && <NavDropdown handleEscape={handleEscape} />}
            </AnimatePresence>
        </nav>
    )
}

function Burger({ navState, setNavState, handleEscape }:StateProps) {

    function handleClick(){
        if(navState != "expanded"){
            setNavState("expanded");
        }else{
            // If user has scrolled down, set to small, else set to default
            handleEscape();
        }
    }

    const topBun = {
        line: {
            y: 35,
            rotate: 0
        },
        x: {
            y: 47.5,
            rotate: 45
        }
    }

    const bottomBun = {
        line: {
            y: 55,
            rotate: 0
        },
        x: {
            y: 47.5,
            rotate: -45
        }
    }

    return (
        <div 
            className="burger" 
            onClick={handleClick}
        >
            <svg width="2rem" height="2rem" viewBox="0 0 100 100">
                <motion.rect
                    x="10"
                    width="80"
                    height="5"
                    style={{ originX: 0.5, originY: 0.5 }}
                    variants={topBun}
                    animate={navState === "expanded" ? "x" : "line"}
                />
                <motion.rect
                    x="10"
                    width="80"
                    height="5"
                    style={{ originX: 0.5, originY: 0.5 }}
                    variants={bottomBun}
                    animate={navState === "expanded" ? "x" : "line"}
                />
            </svg>
        </div>
    )
}

function NavDropdown({handleEscape}: { handleEscape?: () => void }) {

    return (
        <motion.div 
            className='nav-dropdown'
            initial={{height: 0}}
            animate={{height: "auto"}}
            exit={{height: 0, transition: { delay: 0.4, ease: "easeInOut", duration: 0.3 }}} // <-- add delay here
            transition={{
                ease: "easeInOut",
                duration: 0.3
            }}
        >
            <div className='dropdown-links'>
                <NavTabs handleEscape={handleEscape} />
            </div>
        </motion.div>
    )
}