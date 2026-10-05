import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'

const roles = [
  {
    period: 'Aug 2025 — Present',
    title: 'Full-Stack Developer / IT Specialist',
    company: 'ISMAWOOD',
    location: 'Casablanca, Morocco',
    current: true,
    summary:
      'Building and improving internal business software while working across web, mobile, enterprise systems and day-to-day IT support.',
    highlights: [
      {
        title: 'Internal business applications',
        text: 'Built a document-management platform and an HR leave / employee-exit system used inside the company.',
      },
      {
        title: 'Mobile & automation',
        text: 'Extended workflows with React Native and automated recurring leave calculations with scheduled backend jobs.',
      },
      {
        title: 'Enterprise data',
        text: 'Develop solutions with Progress OpenEdge and Microsoft Dynamics 365 Business Central / AL for extraction, consolidation and reporting.',
      },
      {
        title: 'Technical support & mentoring',
        text: 'Support users and hardware/software issues while mentoring three interns across development and data-analysis work.',
      },
    ],
    stack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'React Native', 'OpenEdge', 'Business Central'],
  },
  {
    period: '2024',
    title: 'Census Enumerator',
    company: 'Haut-Commissariat au Plan',
    location: 'Morocco',
    current: false,
    summary:
      'Managed a large assigned geographic zone independently during Morocco’s population and housing census.',
    highlights: [
      {
        title: '≈ 1,000 households',
        text: 'Conducted door-to-door data collection across an assigned zone as part of a four-person field team.',
      },
      {
        title: 'Digital field collection',
        text: 'Captured and validated household information using a tablet-based census application.',
      },
    ],
    stack: ['Field operations', 'Digital data collection', 'Autonomy', 'Data quality'],
  },
]

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:py-28">
      <SectionHeader kicker="Experience / real-world work" title="Software that has to work outside the demo.">
        <p>
          My professional work sits close to real operations: archives, HR rules, enterprise data,
          users, hardware and reporting. That forces the code to be practical, maintainable and
          understandable by more than just the developer who wrote it.
        </p>
      </SectionHeader>

      <ol className="relative mt-14 space-y-8">
        {/* Vertical timeline line (hidden on phones) */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-4 top-2 hidden w-px bg-linear-to-b from-accent/50 via-line to-transparent sm:block"
        />

        {roles.map((role, index) => (
          <li key={role.title} className="relative sm:pl-14">
            {/* Timeline dot */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-7 hidden size-8 place-items-center rounded-full sm:grid ${
                role.current ? 'bg-accent-soft' : 'bg-page'
              }`}
            >
              <span
                className={`size-3 rounded-full ${
                  role.current ? 'bg-accent ring-4 ring-accent/20' : 'border-2 border-line bg-card'
                }`}
              />
            </span>

            <Reveal delay={index * 120}>
              <article className="card-neon p-6 sm:p-8">
                {/* Header */}
                <header className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-medium text-accent">{role.period}</p>
                    <h3 className="mt-2 text-2xl">{role.title}</h3>
                    <p className="mt-1 text-muted">
                      <span className="font-semibold text-ink">{role.company}</span> · {role.location}
                    </p>
                  </div>

                  {role.current && (
                    <span className="inline-flex items-center gap-2 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                      <span className="size-1.5 rounded-full bg-accent" />
                      Current role
                    </span>
                  )}
                </header>

                <p className="mt-5 max-w-3xl">{role.summary}</p>

                {/* Highlights */}
                <ul className="mt-6 grid gap-3 md:grid-cols-2">
                  {role.highlights.map((item) => (
                    <li key={item.title} className="rounded-xl border border-line bg-page p-4">
                      <p className="flex items-center gap-2 font-semibold text-ink">
                        <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-sm">{item.text}</p>
                    </li>
                  ))}
                </ul>

                {/* Stack */}
                <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Technologies and skills">
                  {role.stack.map((tech) => (
                    <li key={tech} className="rounded-md border border-line bg-card px-2.5 py-1 font-mono text-xs text-body">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experience