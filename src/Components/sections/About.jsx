import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'

const strengths = [
  {
    number: '01',
    title: 'Product-minded development',
    text: 'I start from the operational problem, then shape the interface, API and data model around the people who will actually use it.',
    detail: 'React · Node.js · MySQL',
  },
  {
    number: '02',
    title: 'Enterprise adaptability',
    text: 'I am comfortable moving beyond the modern web stack into existing business systems, legacy environments and reporting workflows.',
    detail: 'OpenEdge · Business Central · AL',
  },
  {
    number: '03',
    title: 'Debugging & support',
    text: 'I enjoy tracing problems across software, hardware and data layers until the root cause is clear and the solution is reliable.',
    detail: 'Troubleshooting · IT · Mentoring',
  },
]

const stats = [
  { value: '2+', label: 'Core internal systems built' },
  { value: '3', label: 'Interns mentored' },
]

const journey = [
  { year: '2021', title: 'Mechanical technologies', subtitle: 'Technical baccalaureate' },
  { year: '2023', title: 'Electrical + mechanical engineering', subtitle: 'GEGM' },
  { year: '2025', title: 'Computer engineering', subtitle: 'Licence' },
  { year: 'Now', title: 'Business software', subtitle: 'Full-stack developer' },
]

function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* ===== Left: story + stats + journey ===== */}
        <div>
          <SectionHeader kicker="About / what I bring" title="More than a stack of technologies.">
            <p>
              My background crosses software, IT, electrical engineering and mechanical systems.
              That mix helps me understand both the application layer and the business or
              industrial context around it.
            </p>
            <p>
              I build internal tools from scratch, extend enterprise systems, support users and
              hardware, and help interns move through technical problems. I care about useful
              software, readable architecture and solving the real issue behind a request.
            </p>
          </SectionHeader>

          {/* Stats */}
          <Reveal delay={100} as="dl" className="mt-9 grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col rounded-xl border border-line bg-card p-4 shadow-card"
              >
                <dt className="text-sm text-muted">{stat.label}</dt>
                <dd className="order-first font-display text-3xl font-bold text-accent">
                  {stat.value}
                </dd>
              </div>
            ))}
          </Reveal>

          {/* Technical journey */}
          <Reveal delay={150} className="mt-8 rounded-2xl border border-line bg-card p-6 shadow-card">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Technical journey</p>

            <ol className="mt-5">
              {journey.map((step, index) => {
                const last = index === journey.length - 1
                return (
                  <li key={step.year} className="relative flex gap-4 pb-6 last:pb-0">
                    {!last && (
                      <span
                        className="absolute bottom-0 left-3.75 top-8 w-px bg-line"
                        aria-hidden="true"
                      />
                    )}

                    <span
                      className={`relative z-10 grid size-8 shrink-0 place-items-center rounded-full font-mono text-xs font-medium ${
                        last ? 'bg-accent text-white' : 'border border-line bg-page text-body'
                      }`}
                    >
                      {index + 1}
                    </span>

                    <div className="pt-1">
                      <p className="flex flex-wrap items-baseline gap-x-3">
                        <span className="font-semibold text-ink">{step.title}</span>
                        <span className="font-mono text-xs text-accent">{step.year}</span>
                      </p>
                      <p className="mt-0.5 text-sm text-muted">{step.subtitle}</p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </Reveal>
        </div>

        {/* ===== Right: strengths ===== */}
        <div className="grid content-start gap-5 lg:pt-14">
          {strengths.map((item, index) => (
            <Reveal key={item.title} delay={index * 120}>
              <article className="card-neon group overflow-hidden p-6 sm:p-7">
                {/* Big decorative number */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 font-display text-6xl font-bold tracking-[-0.06em] text-ink/4 transition-colors duration-300 group-hover:text-accent/15 sm:text-7xl"
                >
                  {item.number}
                </span>

                {/* Content */}
                <div className="relative pr-14 sm:pr-20">
                  <h3>{item.title}</h3>
                  <p className="mt-2">{item.text}</p>
                  <p className="mt-4 font-mono text-xs text-muted">{item.detail}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About