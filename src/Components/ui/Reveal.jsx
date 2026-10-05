/**The reveal effect makes each section appear with an animation when you scroll to it, 
* instead of everything being visible from the start.
**/

import { useEffect, useState, useRef } from "react";

function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...rest }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const element = ref.current         // ref.current = this div.
        if (!element) return undefined

        // IntersectionObserver: is a browser tool that tells you when an element enters or leaves the screen.
        const observer = new IntersectionObserver(([entry]) => {        
            if (entry.isIntersecting) {
                setVisible(true)
                observer.unobserve(entry.target)        // unobserve: tells the guard to stop watching. That's why the animation plays only once. If you scroll back up and down, it doesn't replay.
            }
        },
        {
            threshold: 0.08,                    // means trigger when 8% of the element is visible, not just 1 pixel.
            rootMargin: '0px 0px -8px 0px',     
        },)

        observer.observe(element)
        return () => observer.disconnect()
    }, [])

    return (
        <Tag
            ref={ref}
            className={`section-reveal ${visible ? 'section-reveal-visible' : ''} ${className}`}
            style={{ '--reveal-delay': `${delay}ms` }}
            {...rest}
        >
            {children}
        </Tag>
    )
}

export default Reveal;