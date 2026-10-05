import { useState } from 'react'
import Reveal from '../ui/Reveal'
import SectionHeader from '../ui/SectionHeader'

const capabilityGroups = [
  {
    label: 'Frontend',
    title: 'Interfaces that stay practical',
    description: 'Responsive interfaces focused on business workflows, clarity and maintainable component structure.',
    skills: ['React.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Bootstrap'],
  },
  {
    label: 'Backend & data',
    title: 'APIs, rules and persistence',
    description: 'REST APIs, business logic, database relationships and scheduled tasks that support internal applications.',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MySQL', 'SQL', 'Cron'],
  },
  {
    label: 'Mobile',
    title: 'Workflows beyond the desktop',
    description: 'React Native extensions for faster field actions such as document scanning, search and mobile access.',
    skills: ['React Native'],
  },
  {
    label: 'Enterprise',
    title: 'Existing systems matter too',
    description: 'Working inside business software environments to extract, consolidate and prepare operational data.',
    skills: ['Progress 4GL', 'OpenEdge 10.2B08', 'Business Central', 'Microsoft AL'],
  },
  {
    label: 'Web & IT',
    title: 'Development plus support',
    description: 'Web delivery, version control, technical support and troubleshooting across software and hardware.',
    skills: ['WordPress', 'Git', 'GitHub', 'Technical Support', 'Troubleshooting'],
  },
]

const architectureLayers = [
  {
    key: 'ui',
    short: 'UI',
    title: 'React interface',
    tech: 'React + Tailwind',
    description: 'Reusable components, local state and responsive screens built around the user workflow.',
  },
  {
    key: 'api',
    short: 'API',
    title: 'Frontend API service',
    tech: 'Fetch / service layer',
    description: 'Centralized frontend calls keep components focused on presentation instead of request details.',
  },
  {
    key: 'route',
    short: 'ROUTE',
    title: 'Express routes',
    tech: 'Express.js',
    description: 'Routes define the HTTP entry points and pass requests into the application logic.',
  },
  {
    key: 'controller',
    short: 'CTRL',
    title: 'Controllers',
    tech: 'Request coordination',
    description: 'Controllers validate the request context and coordinate the response without carrying all business logic.',
  },
  {
    key: 'service',
    short: 'SRV',
    title: 'Services',
    tech: 'Business logic',
    description: 'Business rules live in services so they stay reusable, testable and separated from transport concerns.',
  },
  {
    key: 'model',
    short: 'MODEL',
    title: 'Models / data access',
    tech: 'SQL + MySQL',
    description: 'The data layer handles queries and database interactions while keeping SQL away from the UI.',
  },
]

const learning = [
  { name: 'Python', level: 'Basic utility applications' },
  { name: 'Java', level: 'Academic experience' },
  { name: 'Figma', level: 'Basic practical use' },
  { name: 'Data Analytics', level: 'Currently learning' },
]

/* ---------- Architecture explorer ---------- */

function ArchitectureExplorer() {
  const [activeKey, setActiveKey] = useState(architectureLayers[0].key)
  const activeIndex = architectureLayers.findIndex((layer) => layer.key === activeKey)
  const active = architectureLayers[activeIndex]

  // Keyboard: arrow keys move between tabs
  const handleKeyDown = (event) => {
    let next = null
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (activeIndex + 1) % architectureLayers.length
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft')
      next = (activeIndex - 1 + architectureLayers.length) % architectureLayers.length
    if (next === null) return

    event.preventDefault()
    const nextKey = architectureLayers[next].key
    setActiveKey(nextKey)
    document.getElementById(`layer-tab-${nextKey}`)?.focus()
  }

  return (
    <div className="card-neon grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
      {/* Layer list (tabs) */}
      <div role="tablist" aria-label="Application layers" aria-orientation="vertical" className="space-y-1.5">
        {architectureLayers.map((layer, index) => {
          const selected = layer.key === activeKey
          return (
            <button
              key={layer.key}
              id={`layer-tab-${layer.key}`}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-controls="layer-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveKey(layer.key)}
              onKeyDown={handleKeyDown}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                selected ? 'bg-accent text-white shadow-card' : 'text-body hover:bg-page'
              }`}
            >
              <span className={`font-mono text-xs ${selected ? 'text-white/70' : 'text-accent'}`}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className={`w-14 font-mono text-xs ${selected ? 'text-white/80' : 'text-muted'}`}>{layer.short}</span>
              <span className="text-sm font-medium">{layer.title}</span>
            </button>
          )
        })}
      </div>

      {/* Active layer details */}
      <div
        id="layer-panel"
        role="tabpanel"
        aria-labelledby={`layer-tab-${active.key}`}
        className="flex flex-col justify-between rounded-xl border border-line bg-page p-6"
      >
        <div key={active.key} className="animate-[fade-in_300ms_ease-out]">
          <p className="font-mono text-xs font-medium text-accent">
            Layer {activeIndex + 1} of {architectureLayers.length} · {active.tech}
          </p>
          <h4 className="mt-2 text-2xl font-semibold">{active.title}</h4>
          <p className="mt-3">{active.description}</p>
        </div>

        {/* Progress: where this layer sits in the stack */}
        <div className="mt-8 flex gap-1.5" aria-hidden="true">
          {architectureLayers.map((layer, index) => (
            <span
              key={layer.key}
              className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${
                index <= activeIndex ? 'bg-accent' : 'bg-line'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- Section ---------- */

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <SectionHeader kicker="Skills / capabilities" title="Tools I use, and how I put them together.">
        <p>
          Grouped by what they help me build, not as a list of logos. From the interface down to the
          database, and into the enterprise systems around it.
        </p>
      </SectionHeader>

      {/* Capability groups */}
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {capabilityGroups.map((group, index) => (
          <Reveal key={group.label} delay={index * 80}>
            <article className="card-neon flex h-full flex-col p-6">
              <p className="font-mono text-xs font-medium text-accent">
                {String(index + 1).padStart(2, '0')} / {group.label}
              </p>
              <h3 className="mt-2">{group.title}</h3>
              <p className="mt-2 text-sm">{group.description}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-5" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill} className="rounded-md border border-line bg-page px-2.5 py-1 font-mono text-xs text-body">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}

        {/* Learning card fills the 6th slot of the grid */}
        <Reveal delay={capabilityGroups.length * 80}>
          <article className="flex h-full flex-col rounded-[1.25rem] border border-dashed border-line p-6">
            <p className="font-mono text-xs font-medium text-muted">Currently learning / exploring</p>
            <ul className="mt-4 space-y-3">
              {learning.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-3 border-b border-line pb-2 last:border-0">
                  <span className="font-medium text-ink">{item.name}</span>
                  <span className="text-right text-xs text-muted">{item.level}</span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>

      {/* Architecture explorer */}
      <Reveal className="mt-20">
        <h3 className="text-xl">How I structure an application</h3>
        <p className="mt-2 max-w-2xl text-muted">
          Click through the layers of a typical app I build, from what the user sees to where the
          data lives.
        </p>
      </Reveal>

      <Reveal delay={100} className="mt-6">
        <ArchitectureExplorer />
      </Reveal>
    </section>
  )
}

export default Skills