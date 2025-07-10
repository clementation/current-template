import { useState } from 'react'
import { useRouterState, Link } from "@tanstack/react-router";
import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive';

import '../styles/nav-tabs.css'

//Nav Tabs behavior:
// Displayes a list of navigation tabs to access the sites pages
// When user clicks on a tab, it becomes active and the navigator indicator moves

// Adding to this list will add a new tab to the navigation bar
// Make sure the location matches a file in the routes directory
let tabs = [
    { name: "Home", location: "/" },
    { name: "About", location: "/about" },
    { name: "Gallery", location: "/gallery" },
    { name: "Contact", location: "/contact" }
]

export default function NavTabs({ handleEscape }: { handleEscape?: () => void }) {

    // Use media query to determine if the device is mobile
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

    // Get the current router state to determine the active tab
    const routerState = useRouterState()

    // Initialize activeTab based on the current path
    // If the current path does not match any tab, default to the first tab
    let [activeTab, setActiveTab] = useState(() => {
        const currentPath = routerState.location.pathname
        const foundTab = tabs.find(tab => tab.location === currentPath)
        return foundTab ? foundTab.location : tabs[0].location
    })

    return (
        <div className='nav-tabs'
            style={{ flexDirection: isMobile ? 'column' : 'row' }}
        >
            {tabs.map((tab) => (
                <Link
                    key={tab.location}
                    onClick={() => {
                        setActiveTab(tab.location)
                        handleEscape?.() // Call handleEscape if provided
                    }}
                    to={tab.location}
                    className={`nav-tab ${activeTab === tab.location ? 'active-nav-tab' : ''}`}
                >
                    {activeTab === tab.location && (
                        <motion.div
                            className='navigator'
                            layoutId="navigator"
                            style={{ borderRadius: 999999 }}
                        />
                    )}
                    <span className='tab-label'>{tab.name}</span>
                </Link>
            ))}
        </div>
    )
}