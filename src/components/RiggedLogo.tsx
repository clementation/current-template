import { motion } from 'motion/react';

import '../styles/rabbit-game.css'

export default function RiggedLogo({ active, up, flip, updateRabbit }:RabbitProps){

    //if a rabbit is active it will wait for a random time interval before going up and coming back down
    // const [up, setUp] = useState(false)

    // useEffect(() => {
    //     if(caught){
    //         setUp(true)
    //     }
    //     else if(active){
    //         //wait for a random amount of time
    //         //setUp(true) for a random amount of time
    //         updateRabbit({ active: false })
    //     }
    // }, [active, caught])

    function handleClick(){
        if(up && active){
            updateRabbit({ caught: true })
        }
    }

    return(
        <div className="rigged-logo" onClick={handleClick} >
            <svg
                id="Layer_1" 
                data-name="Layer 1" 
                xmlns="http://www.w3.org/2000/svg" 
                width="76.291" 
                height="100" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 78 100"
            >
                <defs>
                    <style>{`
                        .logo {
                            fill: black;
                        }
                    `}</style>
                </defs>
                <ellipse className="hole logo" cx="38.384" cy="89.174" rx="38.146" ry="10.826"/>
            </svg>
            <motion.svg
                id="Layer_2" 
                data-name="Layer 2" 
                xmlns="http://www.w3.org/2000/svg" 
                width="76.291" 
                height="89" 
                xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 76.291 89"
            >
                <defs>
                    <style>{`
                        .cls-1 {
                            fill: none;
                        }

                        .logo {
                            fill: black;
                        }

                        .logo-fill {
                            fill: #fff;
                        }

                        .rabbit-group {
                            clip-path: url(#clippath);
                        }

                    `}</style>
                    <clipPath id="rabbit-clip" clipPathUnits="objectBoundingBox">
                    {/* rectangle that defines the cutoff line*/}
                    <rect x="0" y="0" width="100%" height="89" />
                    </clipPath>
                </defs>
                {/* <ellipse className="hole logo" cx="38.384" cy="89.174" rx="38.146" ry="10.826"/> */}
                <motion.g 
                    className="rabbit-group"
                    clipPath="url(#rabbit-clip)"
                    animate={{ y: up ? 0 : 100 }}    // down at 100px, up at 0
                    transition={{ 
                        duration: 0.4, 
                        ease: "easeInOut",
                        // repeat: Infinity,    // loop forever
                        // repeatType: "loop"
                    }}
                    style={{ 
                        scaleX: flip ? -1 : 1,
                        translateX: flip ? -8 : 0
                     }}
                >
                        <motion.path className="logo-fill" d="M59.943,89.075l-10.706-19.364h1.838c4.844,0,8.77-3.926,8.77-8.77v-8.335c0-12.112-9.819-21.931-21.931-21.931,0,0-3.817,0-6.321,0V11.119c0-4.417-3.581-7.997-7.998-7.997h-3.479v85.954h39.827Z"/>
                        <motion.path className="eye logo" d="M35.652,45.38h2.476c2.791,0,5.057,2.266,5.057,5.057v6.039c0,1.142-.927,2.068-2.068,2.068h-2.476c-2.791,0-5.057-2.266-5.057-5.057v-6.039c0-1.142.927-2.068,2.068-2.068Z"/>
                        <motion.path d="M64.319,60.94v-8.335c0-11.578-7.602-21.406-18.074-24.777L69.62.251h-14.589l-20.328,23.982v-13.114C34.702,5.201,29.887.387,23.97.387h-6.215v92.557h5.469V5.855h.746c2.902,0,5.263,2.362,5.263,5.264v23.656h9.056c9.83,0,17.83,7.999,17.83,17.83v8.335c0,2.57-2.089,4.661-4.657,4.669v-.002h-17.878v1.454c0,2.374,1.925,4.299,4.299,4.299h7.881l12.462,21.584h8.574l-11.407-19.758c5.173-1.669,8.927-6.525,8.927-12.247Z"/>
                </motion.g>
            </motion.svg>
        </div>
    )
}

type RabbitData = {
    caught: boolean,
    active: boolean,
    up: boolean,
    flip: boolean
}

type RabbitProps = RabbitData & {
  updateRabbit: (newData: Partial<RabbitData>) => void; // type the function
};
