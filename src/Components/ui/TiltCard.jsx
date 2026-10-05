import { useEffect, useRef } from "react";

function TiltCard({ children, max = 3, className = '' }) {
    const ref = useRef(null);
    const frame = useRef(0);

    useEffect(() => () => cancelAnimationFrame(frame.current), [])

    // Only on real mouse devices, and not if the user disabled animations
    const canTilt = () => window.matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches

    const handleMove = (event) => {
        const element = ref.current
        if(!element || !canTilt()) return

        // Mouse position inside the card: 0 = left/top, 1 = right/bottom
        const rect = element.getBoundingClientRect()
        const x = (event.clientX - rect.left) / rect.width
        const y = (event.clientY - rect.top) / rect.height
    
        cancelAnimationFrame(frame.current)
        frame.current = requestAnimationFrame(() => {
            element.classList.remove('is-idle')
            // Side under the mouse goes back
            element.style.setProperty('--rx', `${((0.5 - y) * 2 * max).toFixed(2)}deg`)
            element.style.setProperty('--ry', `${((x - 0.5) * 2 * max).toFixed(2)}deg`)
            // element.style.setProperty('--tz', '-20px')
            // Opposite side stays in place (it becomes the pivot)
            element.style.setProperty('--ox', `${((1 - x) * 100).toFixed(1)}%`)
            element.style.setProperty('--oy', `${((1 - y) * 100).toFixed(1)}%`)
            // Light follows the mouse
            element.style.setProperty('--px', `${(x * 100).toFixed(1)}%`)
            element.style.setProperty('--py', `${(y * 100).toFixed(1)}%`)
        })
    }

    const handleLeave = () => {
        const element = ref.current
        if (!element) return
        cancelAnimationFrame(frame.current)
        element.classList.add('is-idle')
        element.style.setProperty('--rx', '0deg')
        element.style.setProperty('--ry', '0deg')
        element.style.setProperty('--tz', '0px')
        element.style.setProperty('--ox', '50%')
        element.style.setProperty('--oy', '50%')
    }

    return (
        <div ref={ref} className={`tilt ${className}`} onPointerMove={handleMove} onPointerLeave={handleLeave}>
            <div className="tilt__inner">{children}</div>
        </div>
    )

}

export default TiltCard