import { useState, useEffect } from "react"
import RiggedLogo from "./RiggedLogo"
import { Link } from "@tanstack/react-router"

import '../styles/rabbit-game.css'

export default function RabbitGame(){

    const rows = 4
    const columns = 5

    const totalRabbits = rows * columns

    // active rabits could start higher but needs to become 1 when totalClicked approaches total rabbits
    // const activeRabbits = 4



    const [rabbits, setRabbits] = useState(
        Array.from({ length: totalRabbits }, () => ({
            caught: false,
            active: false,
            up: false,
            flip: false
        }))
    )

    function updateRabbit(index:number, newState: RabbitUpdate) {
        setRabbits(rabbits =>
            rabbits.map((r, i) =>
                i === index ? { ...r, ...newState } : r
            )
        )
    }

    function fortyPercentChance() {
        return Math.random() < 0.4;
    }

    // function randomBetween(min: number, max: number) {
    //     return Math.random() * (max - min) + min;
    // }   

    useEffect(() => {
        const timer = setInterval(() => {
        setRabbits(rabbits =>
            rabbits.map(r => {
            // skip caught rabbits
            if (r.caught) return r

            // 10% chance to pop up
            if (!r.active && Math.random() < 0.1) {
                return { ...r, active: true, up: true, flip:fortyPercentChance() }
            }

            // if active, randomly hide again
            if (r.active && r.up && Math.random() < 0.6) {
                return { ...r, up: false, active: false }
            }

            return r
            })
        )
        }, 800) // tick every 800ms

        return () => clearInterval(timer)
    }, [])

    const caught = rabbits.filter(r => r.caught).length



    return(
        <>
            <div className="rabbit-game"
                style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${rows}, 1fr)`,
                    gridTemplateRows: `repeat(${columns}, 1fr)`,
                }}
            >
                {rabbits.map((rabbit, i) => (
                    <RiggedLogo
                        key={i}
                        {...rabbit}
                        updateRabbit={ newData => updateRabbit(i, newData)}
                    />
                ))}
            </div>
            <div className="game-text secondary">
                {
                    caught? 
                    ( caught === totalRabbits ?
                        <>
                            <h2>glad to see you like rabbits. <br /> you've earned this:</h2>
                            <Link to={"/super-secret-rabbit-page"}> super-secret-rabbit-page</Link>
                        </>
                        :
                        <h2>(you've got {caught}/{totalRabbits})</h2>
                    )
                    :
                    <h2>(how many can you catch?)</h2>
                }
			</div>
        </>
    )
}

type RabbitData = {
    caught: boolean,
    active: boolean,
    up: boolean,
    flip: boolean
}

type RabbitUpdate = Partial<RabbitData>