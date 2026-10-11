# Ayoub Boulhada — Developer Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-Visit%20Website-0f172a?style=for-the-badge&logo=githubpages&logoColor=white)](https://diablo-io.github.io/)
[![React](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646cff?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06b6d4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

A responsive personal portfolio for **Ayoub Boulhada**, a **Full-Stack Developer / IT Specialist** based in Casablanca, Morocco.

The website showcases my experience building practical web, mobile, and enterprise solutions, with a focus on business workflows, maintainable code, and real-world problem solving.

**🌐 Live site:** [diablo-io.github.io](https://diablo-io.github.io/)

## About the portfolio

This is a single-page portfolio designed to help recruiters, hiring managers, and collaborators understand my work beyond a list of technologies.

It includes:

- **Hero / Introduction** — background, core stack, and quick contact actions.
- **About** — multidisciplinary perspective and approach to building software.
- **Experience** — professional work and enterprise systems.
- **Projects** — problem/solution case studies for internal business applications.
- **Skills** — frontend, backend, mobile, database, enterprise, and IT capabilities.
- **Education** — academic background and training.
- **Contact** — email, GitHub, LinkedIn, and downloadable résumé.

### Selected work featured

| Project / Area | Focus |
| --- | --- |
| Electronic Document Management System (GED) | Digital document archiving, classification, search, and a React Native extension |
| Employee Leave & Exit Management | HR workflows, role-based access, leave calculations, and scheduled automation |
| Progress OpenEdge | Enterprise data extraction and preparation using Progress 4GL |
| Microsoft Dynamics 365 Business Central / AL | Consolidating business data for reporting |
| Python utility | Small drag-and-drop image resizing tool |

> **Note:** Some projects are internal company applications. The portfolio presents their purpose, architecture, and outcomes without publishing proprietary source code or confidential business information.

## Tech stack

**Portfolio implementation**

- **React 19** — component-based interface.
- **JavaScript (JSX)** — application logic and UI.
- **Vite 8** — development server and production build.
- **Tailwind CSS 4** — responsive layout and styling.
- **ESLint** — code quality checks.
- **GitHub Actions + GitHub Pages** — automated build and deployment.

**Technologies highlighted in my experience:** React Native, Node.js, Express.js, MySQL, REST APIs, Progress OpenEdge / 4GL, and Microsoft Dynamics 365 Business Central / AL.

These professional technologies are presented in the portfolio; they are **not** runtime dependencies of this static website.

## Run locally

**Requirements:** Node.js 22 or newer and npm.

```bash
git clone https://github.com/DIABLO-io/DIABLO-io.github.io.git
cd DIABLO-io.github.io
npm ci
npm run dev
```

Open the local URL shown by Vite (usually `http://localhost:5173/`).

### Other commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run lint` | Run ESLint |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Project structure

```text
.
├── .github/workflows/deploy.yml   # GitHub Pages CI/CD
├── public/                        # Profile picture, résumé, favicon
├── src/
│   ├── Components/
│   │   ├── sections/              # Hero, About, Experience, Projects, Skills, Education, Contact
│   │   ├── ui/                    # Reusable UI components
│   │   └── Layout/                # Footer
│   ├── Data/site.js               # Shared personal details and navigation
│   ├── App.jsx                    # Main page composition
│   ├── index.css                  # Styles
│   └── main.jsx                   # React entry point
├── index.html
├── package.json
└── vite.config.js
```

### Updating portfolio content

- Edit `src/Data/site.js` for shared contact details, links, the profile image, and the résumé path.
- Edit components in `src/Components/sections/` to update the corresponding portfolio sections.
- Assets such as `profile.png` and `Ayoub_Boulhada_Resume.pdf` live in `public/`.

## Deployment

The site is published at **[https://diablo-io.github.io/](https://diablo-io.github.io/)**.

The GitHub Actions workflow in [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) runs when changes are pushed to `main` (or when manually triggered). It:

1. Checks out the repository.
2. Sets up **Node.js 22** and installs dependencies with `npm ci`.
3. Builds the site using `npm run build`.
4. Uploads `dist/` and deploys it to **GitHub Pages**.

## Contact

- **Portfolio:** [diablo-io.github.io](https://diablo-io.github.io/)
- **LinkedIn:** [linkedin.com/in/boulhada-ayoub](https://www.linkedin.com/in/boulhada-ayoub)
- **GitHub:** [github.com/DIABLO-io](https://github.com/DIABLO-io)
- **Email:** [boulhadaayoub@gmail.com](mailto:boulhadaayoub@gmail.com)

---

Built with React, Vite, and Tailwind CSS by **Ayoub Boulhada**.
