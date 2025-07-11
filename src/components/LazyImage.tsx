import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"



// Make sure this component's parrent has relative positioning

type Props = {
    src: string
    alt: string
}
export default function LazyImage({ src, alt }: Props) {

    const [loaded, setLoaded] = useState(() => {
        const probe = new Image()
        probe.src = src
        return probe.complete && probe.naturalWidth > 0
    })

    return (
        <>
            <motion.img
                src={src}
                alt={alt}
                loading="lazy"
                onLoad={() => {
                    setLoaded(true)
                }}
            />
            <AnimatePresence>
                {!loaded &&
                    <motion.div className="image-skeleton"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            ease: "easeInOut",
                            duration: 0.5
                        }}
                    >
                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}