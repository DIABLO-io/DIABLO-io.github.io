// Every section will have the same kind of header (kicker + title + intro)

import Reveal from "./Reveal";
function SectionHeader({kicker, title, children, className= ''}) {
    return (
        <Reveal className={className}>
            <p className="section-kicker">{kicker}</p>
            <h2 className="mt-4 max-w-2xl">{title}</h2>
            {children && <div className="mt-5 max-w-2xl space-y-4">{children}</div>}
        </Reveal>
    )
}

export default SectionHeader