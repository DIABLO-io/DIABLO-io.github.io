import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'

const education = [
  {
    year: '2024 — 2025',
    degree: 'Licence en Sciences et Techniques',
    field: 'Génie Informatique',
    school: 'Faculté des Sciences et Techniques de Settat',
    note: 'Software development, object-oriented programming, web technologies and databases.',
  },
  {
    year: '2021 — 2023',
    degree: 'Diplôme d’Études Universitaires en Sciences et Techniques',
    field: 'Génie Électrique & Génie Mécanique (GEGM)',
    school: 'Faculté des Sciences et Techniques de Settat',
    note: 'A multidisciplinary base across electrical, mechanical and industrial technologies.',
  },
  {
    year: '2020 — 2021',
    degree: 'Baccalauréat',
    field: 'Sciences et Technologies Mécaniques',
    school: 'Lycée Technique Ibn Soulaymane Arrassmouki',
    note: 'Mechanical systems, manufacturing technologies and technical drawing.',
  },
]

// level: 1 to 5, used to draw the dots
const languages = [
  { name: 'Arabic', label: 'Native', level: 5 },
  { name: 'Amazigh', label: 'Native', level: 5 },
  { name: 'English', label: 'Working proficiency', level: 3 },
  { name: 'French', label: 'A2 · ongoing training', level: 2 },
]

function LevelDots({ level, max = 5 }) {
  return (
    <span className="flex gap-1" aria-hidden="true">
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          className={`size-2 rounded-full ${index < level ? 'bg-accent' : 'bg-line'}`}
        />
      ))}
    </span>
  )
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <SectionHeader
        kicker="Education / multidisciplinary background"
        title="Software came last. Systems thinking came first."
      >
        <p>
          My path moved from mechanical technologies into electrical/mechanical engineering and then
          computer engineering. That gives me a useful bridge between software and the operational
          environments where it has to work.
        </p>
      </SectionHeader>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.4fr_0.8fr]">
        {/* ===== Degrees ===== */}
        <div className="space-y-5">
          {education.map((item, index) => (
            <Reveal key={item.degree} delay={index * 100}>
              <article className="card-neon group overflow-hidden p-6 sm:p-7">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 font-display text-6xl font-bold tracking-[-0.06em] text-ink/4 transition-colors duration-300 group-hover:text-accent/15 sm:text-7xl"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative pr-14 sm:pr-20">
                  <p className="font-mono text-xs font-medium text-accent">{item.year}</p>
                  <h3 className="mt-2">{item.degree}</h3>
                  <p className="mt-1 font-medium text-ink">{item.field}</p>
                  <p className="text-sm text-muted">{item.school}</p>
                  <p className="mt-3 text-sm">{item.note}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* ===== Languages ===== */}
        <Reveal delay={150} className="lg:sticky lg:top-24 lg:self-start">
          <aside className="rounded-[1.25rem] border border-line bg-card p-6 shadow-card sm:p-7">
            <p className="font-mono text-xs uppercase tracking-wider text-muted">Languages</p>

            <ul className="mt-5 space-y-4">
              {languages.map((language) => (
                <li key={language.name} className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-ink">{language.name}</p>
                    <p className="text-xs text-muted">{language.label}</p>
                  </div>
                  <LevelDots level={language.level} />
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
              Comfortable working and documenting in English, with French improving through ongoing
              training.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  )
}

export default Education