import { forwardRef, useContext, useRef } from 'react'
import { createRootRoute, Outlet, getRouterContext, useMatches, useMatch } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import { motion, AnimatePresence, useIsPresent } from 'motion/react'
import cloneDeep from 'lodash.clonedeep'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const Route = createRootRoute({

    component: () => {

        const matches = useMatches();
        const match = useMatch({ strict: false });
        const nextMatchIndex = matches.findIndex((d) => d.id === match.id) + 1;
        const nextMatch = matches[nextMatchIndex];

        return (
            <>
                <Navbar />
                    <div className='outlet-container' >
                        <AnimatePresence mode="wait">
                            <AnimatedOutlet key={nextMatch.id} />
                        </AnimatePresence>
                    </div>
                <Footer />
                <TanStackRouterDevtools />
            </>
        )   
    },
})


// This component allows animation between pages when switching routes
// The work around that enabled this was provided by Fauxparse. Link below:
// https://github.com/TanStack/router/discussions/823

const AnimatedOutlet = forwardRef<HTMLDivElement>((_, ref) => {
    
    const RouterContext = getRouterContext();
    const routerContext = useContext(RouterContext);
    const renderedContext = useRef(routerContext);
    const isPresent = useIsPresent();

    if (isPresent) {
        renderedContext.current = cloneDeep(routerContext);
    }

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
        <RouterContext.Provider value={renderedContext.current}>
            <Outlet />
        </RouterContext.Provider>
        </motion.div>
    );
});