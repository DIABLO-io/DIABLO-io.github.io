import { useEffect, useRef, useState } from 'react'
import Reveal from '../ui/Reveal'
import { site } from '../../Data/site'

const links = [
  { label: 'LinkedIn', value: 'linkedin.com/in/boulhada-ayoub', href: site.linkedin },
  { label: 'GitHub', value: 'github.com/DIABLO-io', href: site.github },
]

function Contact() {
  const [copied, setCopied] = useState(false)
  const timer = useRef(0)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked (old browser, no HTTPS): open the mail app instead
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-4xl border border-line bg-card px-6 py-10 shadow-card-hover sm:px-10 sm:py-14 lg:px-14">
          {/* Red line on top of the panel */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-accent to-transparent"
          />

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            {/* ===== Left: call to action ===== */}
            <div>
              <p className="section-kicker">Contact / next step</p>
              <h2 className="mt-4">
                Let&apos;s build something <span className="text-accent">useful.</span>
              </h2>
              <p className="mt-6 max-w-xl">
                I&apos;m open to full-stack, software, business-application, ERP and IT opportunities,
                including international roles and relocation across Canada, the United States and
                Europe.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="rounded-full bg-accent px-6 py-3 font-semibold text-white transition hover:bg-accent-hover"
                >
                  Send me an email
                </a>
                <a
                  href={site.resume}
                  download
                  className="rounded-full border border-line bg-card px-6 py-3 font-semibold text-ink transition hover:border-accent hover:text-accent"
                >
                  Download CV
                </a>
              </div>
            </div>

            {/* ===== Right: contact details ===== */}
            <div className="space-y-3">
              {/* Email with copy button */}
              <div className="rounded-xl border border-line bg-page p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-muted">Email</p>
                <div className="mt-1.5 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`mailto:${site.email}`}
                    className="break-all font-semibold text-ink transition hover:text-accent"
                  >
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                      copied
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-line bg-card text-body hover:border-accent hover:text-accent'
                    }`}
                  >
                    {copied ? 'Copied ✓' : 'Copy'}
                  </button>
                </div>
                {/* Announces the copy to screen readers */}
                <span className="sr-only" aria-live="polite">
                  {copied ? 'Email address copied to clipboard' : ''}
                </span>
              </div>

              {/* Social links */}
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-page p-5 transition hover:border-accent"
                >
                  <span>
                    <span className="block font-mono text-xs uppercase tracking-wider text-muted">
                      {link.label}
                    </span>
                    <span className="mt-1.5 block font-semibold text-ink transition group-hover:text-accent">
                      {link.value}
                    </span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  >
                    ↗
                  </span>
                </a>
              ))}

              {/* Location */}
              <p className="flex items-center gap-2 px-1 pt-1 text-sm text-muted">
                <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
                Based in {site.location} · open to relocation
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default Contact