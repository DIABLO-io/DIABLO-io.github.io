import Reveal from "../ui/Reveal";
import { site } from "../../Data/site";
import TiltCard from "../ui/TiltCard";

const architecture = [
    {label: 'UI', value: 'React + Tailwind'},
    {label: 'API', value: 'Node + Express'},
    {label: 'Data', value: 'MySQL / ERP'},
]

const domains = [
    {label: 'Web', value: 'React'},
    {label: 'Mobile', value: 'React Native'},
    {label: 'Enterprise', value: 'OpenEdge + AL'},
]

function Hero() {
    return (
        <section id="top" className="mx-auto grid min-h-svh max-w-6xl items-center gap-12 px-5 pb-12 pt-32 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
            {/* ===== Left: text ===== */}
            <Reveal>
                {/* Availability badge */}
                {/* <p className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-medium text-body shadow-card">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                    </span>
                    Open to international &amp; relocation opportunities
                </p> */}
                <p className="section-kicker mt-8">{site.role}  ·  Business Applications</p>

                <h1 className="mt-5">I turn operational problems into{' '}<span className="text-accent">useful digital products.</span></h1>

                <p className="mt-6 max-w-2xl text-lg">
                    I&apos;m {site.name}, a full-stack developer and IT professional in {site.location.split(',')[0]}.
                    I build web, mobile and enterprise solutions focused on real business workflows,
                    debugging and maintainable architecture.
                </p>

                {/* Tech stack */}
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Main technologies">{site.stack.map((tech) => (
                    <li key={tech} className="rounded-md border border-line bg-card px-2.5 py-1 font-mono text-xs text-body">{tech}</li>
                ))}</ul>

                {/* Buttons */}
                <div className="mt-9 flex flex-wrap items-center gap-3">
                    <a href="#projects" className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover">
                        Explore my work
                    </a>
                    <a href={site.resume} download className="rounded-full border border-line bg-card px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent">
                        Download CV
                    </a>
                    <a href={`mailto:${site.email}`} className="rounded-full border border-line bg-card px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent">
                        Send email
                    </a>
                    <a href={site.linkedin} target="_blank" rel="noreferrer" className="px-2 py-3 font-semibold text-body underline decoration-line decoration-2 underline-offset-4 transition hover:text-accent hover:decoration-accent">
                        LinkedIn ↗
                    </a>
                </div>
            </Reveal>

            {/* ===== Right: profile card ===== */}
            <Reveal delay={150} >
                <TiltCard>
                    <aside className="card-neon p-7 sm:p-9" aria-label="Developer profile">
                        <span className="tilt-glow" aria-hidden="true" />

                        <div className="relative">
                            {/* Identity */}
                            <div className="flex items-center gap-4">
                                <img src={site.photo} alt={site.name} width={104} height={104} fetchPriority="high" className="size-26 shrink-0 rounded-full border-2 border-card object-cover shadow-card ring-1 ring-line" onError={(event) => {event.currentTarget.style.display = 'none'}} />
                                <div className="min-w-0">
                                    <p className="font-display text-xl font-bold text-ink">{site.name}</p>
                                    <p className="text-base text-muted">{site.title}</p>
                                    <p className="mt-1 font-mono text-sm font-medium text-accent">{site.location}</p>
                                </div>
                            </div>

                            {/* How I build */}
                            <div className="mt-6 border-t border-line pt-5">
                                <p className="font-mono text-xs uppercase tracking-wider text-muted">How I build</p>
                                <ol className="mt-3 space-y-2">
                                    {architecture.map((item, index) => (
                                        <li key={item.label} className="flex items-center gap-3 rounded-lg bg-page px-4 py-3">
                                            <span className="font-mono text-xs font-medium text-accent">{String(index + 1).padStart(2, '0')}</span>
                                            <span className="w-14 font-mono text-xs uppercase text-muted">{item.label}</span>
                                            <span className="text-base font-medium text-ink">{item.value}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                            {/* Domaine */}
                            <div className="mt-5 grid grid-cols-3 gap-2">
                                {domains.map((item) => (
                                    <div key={item.label} className="rounded-lg border border-line px-3 py-3.5 text-center">
                                        <p className="font-mono text-[0.7rem] uppercase text-muted">{item.label}</p>
                                        <p className="mt-0.5 text-base font-semibold text-ink">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Strengths */}
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent">Debugging &amp; problem solving</span>
                                <span className="rounded-full bg-accent-soft px-3.5 py-1.5 text-sm font-medium text-accent">Software + industrial systems</span>
                            </div>
                        </div>
                    </aside>
                </TiltCard>
            </Reveal>
        </section>
    )
}

export default Hero