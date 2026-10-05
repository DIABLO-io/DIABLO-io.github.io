import { useState } from "react";
import Reveal from "../ui/Reveal";
import SectionHeader from "../ui/SectionHeader";

const projects = [
    {
        id: 'ged',
        category: 'Document management / web + mobile',
        title: 'Electronic Document Management System',
        status: { label: 'In use internally', tone: 'live' },
        description:
        'A digital archive designed to reduce the time spent searching physical company records and make document capture, classification and retrieval easier.',
        problem: [
        'Physical documents required manual archive searches.',
        'Scanning meant moving between scanner, PC and upload workflow.',
        'Different document types needed a flexible classification structure.',
        ],
        solution: [
        'Configurable categories, subcategories, services and document/profile types.',
        'Search and filtering for faster document retrieval.',
        'React Native extension for scan → archive → search directly from a phone.',
        ],
        flow: ['Physical document', 'Scan / upload', 'Classification', 'REST API', 'Digital archive', 'Search'],
        result:
        'The company now has an internal workflow for centralizing archived documents instead of relying only on manual physical searches.',
        stack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS', 'React Native'],
        image: null, // later: `${import.meta.env.BASE_URL}projects/ged.png`
    },
    {
        id: 'hr',
        category: 'HR operations / rules + automation',
        title: 'Employee Leave & Exit Management',
        status: { label: 'Web in production · mobile in testing', tone: 'testing' },
        description:
        'An internal HR application that captures employee leave/exit requests and applies recurring business rules automatically.',
        problem: [
        'Requests were handled manually by HR.',
        'Leave balances and seniority-based entitlements required recurring checks.',
        'The process needed role-based access and consistent calculations.',
        ],
        solution: [
        'Role-based internal workflow used by the HR department.',
        'Automated leave-balance and seniority-leave calculations.',
        'Daily midnight Cron checks for monthly/yearly rule updates, plus a React Native extension under testing.',
        ],
        flow: ['HR request', 'Role checks', 'Business rules', 'Calculations', 'Nightly Cron', 'Updated balances'],
        result: 'The web application is actively used by HR while the mobile extension is being validated.',
        stack: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Cron', 'React Native'],
        image: null,
    },
]

const secondaryWork = [
  {
    label: 'Progress OpenEdge',
    title: 'Enterprise data preparation',
    text: 'Pages, models and Progress 4GL scripts on OpenEdge 10.2B08 for extracting and structuring data for analytics.',
  },
  {
    label: 'Business Central / AL',
    title: 'Consolidated reporting data',
    text: 'Custom AL work that brings data from multiple Business Central tables into a consolidated structure for reporting and analysis.',
  },
  {
    label: 'Python utility',
    title: 'Drag / drop resize tool',
    text: 'A small desktop utility built as a learning project, using Python with AI-assisted development where needed.',
  },
]


/* ---------- Small building blocks ---------- */
const toneStyles = {
  live: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  testing: 'bg-amber-50 text-amber-700 border-amber-200',
}

const dotStyles = {
  live: 'bg-emerald-500',
  testing: 'bg-amber-500',
}

function StatusBadge({ status }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${toneStyles[status.tone]}`}
    >
      <span className={`size-1.5 rounded-full ${dotStyles[status.tone]}`} aria-hidden="true" />
      {status.label}
    </span>
  )
}

function Flow({ steps }) {
  return (
    <ol className="flex flex-wrap items-center gap-x-2 gap-y-3" aria-label="How data flows">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-2">
          <span className="rounded-lg border border-line bg-card px-3 py-2 text-sm font-medium text-ink shadow-card">
            {step}
          </span>
          {index < steps.length - 1 && (
            <span className="font-mono text-accent" aria-hidden="true">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}

function ListBlock({ title, items, marker }) {
  return (
    <div className="rounded-xl border border-line bg-page p-5">
      <h4 className="font-mono text-xs font-medium uppercase tracking-wider text-muted">{title}</h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm">
            <span className="mt-0.5 shrink-0 font-mono text-accent" aria-hidden="true">
              {marker}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}


/* ---------- Project card ---------- */
function ProjectCard({ project, number }) {
  const [open, setOpen] = useState(false)
  const detailsId = `${project.id}-details`

  return (
    <article className="card-neon overflow-hidden">
      {/* Optional screenshot */}
      {project.image && (
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          loading="lazy"
          className="aspect-video w-full border-b border-line object-cover object-top"
        />
      )}

      <div className="p-6 sm:p-8">
        {/* Header */}
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs font-medium text-accent">
              {number} / {project.category}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl">{project.title}</h3>
          </div>
          <StatusBadge status={project.status} />
        </header>

        <p className="mt-4 max-w-3xl">{project.description}</p>

        {/* Flow */}
        <div className="mt-7">
          <p className="mb-3 font-mono text-xs uppercase tracking-wider text-muted">Flow</p>
          <Flow steps={project.flow} />
        </div>

        {/* Collapsible problem / solution */}
        <div
          id={detailsId}
          className={`grid transition-[grid-template-rows] duration-500 ease-out ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid gap-4 pt-7 md:grid-cols-2">
              <ListBlock title="The problem" items={project.problem} marker="✕" />
              <ListBlock title="What I built" items={project.solution} marker="✓" />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-accent-hover"
        >
          {open ? 'Hide case study' : 'Read the case study'}
          <span className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} aria-hidden="true">
            ↓
          </span>
        </button>

        {/* Result */}
        <div className="mt-6 rounded-xl border-l-4 border-accent bg-accent-soft/60 p-5">
          <p className="font-mono text-xs font-medium uppercase tracking-wider text-accent">Result</p>
          <p className="mt-1.5 text-ink">{project.result}</p>
        </div>

        {/* Stack */}
        <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5" aria-label="Technologies used">
          {project.stack.map((tech) => (
            <li key={tech} className="rounded-md border border-line bg-card px-2.5 py-1 font-mono text-xs text-body">
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

/* ---------- Section ---------- */

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <SectionHeader kicker="Projects / case studies" title="Built for real users, not just for the screenshot.">
        <p>
          Internal tools that replaced manual work. Each one started from an operational problem,
          and each one is used by real people every day.
        </p>
      </SectionHeader>

      {/* Main projects */}
      <div className="mt-14 space-y-8">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 100}>
            <ProjectCard project={project} number={String(index + 1).padStart(2, '0')} />
          </Reveal>
        ))}
      </div>

      {/* Secondary work */}
      <Reveal className="mt-20">
        <h3 className="text-xl">Also working on</h3>
        <p className="mt-2 text-muted">Enterprise and smaller projects outside the main web stack.</p>
      </Reveal>

      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {secondaryWork.map((item, index) => (
          <Reveal key={item.title} delay={index * 100}>
            <article className="card-neon h-full p-6">
              <p className="font-mono text-xs font-medium text-accent">{item.label}</p>
              <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
              <p className="mt-2 text-sm">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Projects