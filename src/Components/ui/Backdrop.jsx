// CSS can't know where the mouse is

import { useEffect, useRef } from "react";

function Backdrop() {
    const ref = useRef(null);
    
    useEffect(() => {
        const element = ref.current
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (!element || reduceMotion) return undefined

        let frame = 0
    
        const handleMove = (event) => {
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => {
                element.style.setProperty('--mx', `${event.clientX}px`)
                element.style.setProperty('--my', `${event.clientY}px`)
            })
        }

        window.addEventListener('pointermove', handleMove, {passive: true})

        return () => {
            window.removeEventListener('pointermove', handleMove)
            cancelAnimationFrame(frame)
        }
    }, [])

    return (
        <div ref={ref} className="page-backdrop" aria-hidden="true">
            <div className="page-backdrop__glow" />
        </div>
    )
}

export default Backdrop;