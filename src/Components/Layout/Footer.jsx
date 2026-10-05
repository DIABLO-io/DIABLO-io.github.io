import { site } from "../../Data/site"

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {year} <span className="font-medium text-ink">{site.name}</span>. Built with React &amp;
          Tailwind CSS.
        </p>

        <div className="flex items-center gap-5">
          <a href={site.github} target="_blank" rel="noreferrer" className="transition hover:text-accent">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-accent">
            LinkedIn
          </a>
          <a href="#top" className="font-medium text-ink transition hover:text-accent">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer