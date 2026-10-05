import { useEffect, useState } from "react";
import { navItems, site } from '../../../Data/site'

function Navbar () {
    const [open, setOpen] = useState(false)     // mobile menu open or closed
    const [scrolled, setScrolled] = useState(false)     // page scrolled → navbar gets a background
    const [activeSection, setActiveSection] = useState('')

    // 1. Detect scroll: transparent at the top, solid after 16px
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 16)
        handleScroll()
        window.addEventListener('scroll', handleScroll, {passive: true})
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 2. Detect which section is on screen → highlight its link
    useEffect(() => {
        const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean)
        
        if(!sections.length) return undefined

        const observer = new IntersectionObserver((entries) => {
            const visible = entries 
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
            
            if (visible[0]) setActiveSection(visible[0].target.id)
        }, {
            rootMargin: '-25% 0px -60% 0px',
            threshold: [0, 0.25, 0.5],
        },)

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    // 3. Mobile menu: close with Escape, and when resizing to desktop
    useEffect(() => {
        if (!open) return undefined

        const handleKey = (event) => {
            if (event.key === 'Escape') setOpen(false)
        }
        const handleResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }

        window.addEventListener('keydown', handleKey)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('keydown', handleKey)
            window.removeEventListener('resize', handleResize)
        }
    }, [open])

    const solid = scrolled || open

    return (
        <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${solid ? 'border-b border-line bg-page/50 shadow-card backdrop-blur-md' : 'border-b border-transparent bg-transparent'}`}>
            <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5">
                {/* Logo */}
                <a href="#top" className="group inline-flex items-center gap-3" aria-label={`${site.name}, back to top`}>
                    <span className="grid size-9 place-items-center rounded-lg bg-ink font-display text-sm font-bold text-white transition group-hover:bg-accent">{site.initials}</span>
                    <span className="hidden leading-tight sm:block">
                        <span className="block font-display text-sm font-semibold text-ink">{site.name}</span>
                        <span className="block font-mono text-xs text-muted">{site.role}</span>
                    </span>
                </a>
                
                
                {/* Desktop links */}
                <div className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) => {
                        const active = activeSection === item.id
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                aria-current={active ? 'location' : undefined}
                                className={`relative px-3 py-2 text-sm font-medium transition-colors ${active ? 'text-accent' : 'text-body hover:text-ink'}`}
                            >
                                {item.label}
                                <span className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-accent transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`}/>
                            </a>
                        )
                    })}

                    <a
                        href={site.resume}
                        target="_blank"
                        rel="noreferrer"
                        className="ml-3 rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                    >
                        CV
                    </a>
                    <a
                        href={`mailto:${site.email}`}
                        className="ml-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-hover"
                    >
                        Let&apos;s talk
                    </a>
                </div>

                {/* Mobile burger button */}
                <button
                    type="button"
                    className="relative grid size-10 place-items-center rounded-lg border border-line bg-card md:hidden"
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                    aria-controls="mobile-menu"
                    onClick={() => setOpen((current) => !current)}    
                >
                    <span className={`absolute h-0.5 w-5 rounded bg-ink transition duration-300 ${open ? 'rotate-45' : '-translate-y-1.5'}`} />
                    <span className={`absolute h-0.5 w-5 rounded bg-ink transition duration-300 ${open ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`absolute h-0.5 w-5 rounded bg-ink transition duration-300 ${open ? '-rotate-45' : 'translate-y-1.5'}`} />
                </button>
            </nav>

            {/* Mobile menu */}
            <div id="mobile-menu"
                aria-hidden={!open}
                className={`overflow-hidden transition-all duration-300 md:hidden ${open ? 'max-h-128 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="mx-auto grid max-w-6xl gap-1 px-5 pb-5 pt-2">
                    {navItems.map((item) => {
                        const active = activeSection === item.id
                        return (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                tabIndex={open ? 0 : -1}
                                onClick={() => setOpen(false)}
                                className={`rounded-lg px-4 py-3 text-base font-medium transition ${active ? 'bg-accent-soft text-accent' : 'text-body hover:bg-card hover:text-ink'}`}
                            >
                                {item.label}
                            </a>
                        )
                    })}

                    <div className="mt-3 grid grid-cols-2 gap-2">
                        <a  href={site.resume}
                            target="_blank"
                            rel="noreferrer"
                            tabIndex={open ? 0 : -1}
                            className="rounded-full border border-line bg-card px-4 py-3 text-center text-sm font-semibold text-ink"
                        >
                            Download CV
                        </a>
                        <a href={`mailto:${site.email}`}
                        tabIndex={open ? 0 : -1}
                        className="rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
                        >
                            Let&apos;s talk
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar