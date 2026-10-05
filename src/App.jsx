import Backdrop from './Components/ui/Backdrop'
import Navbar from './Components/ui/Layout/Navbar'
import Hero from './Components/sections/Hero'
import About from './Components/sections/About'
import Experience from './Components/sections/Experience'
import Projects from './Components/sections/Projects'
import Skills from './Components/sections/Skills'
import Education from './Components/sections/Education'
import Contact from './Components/sections/Contact'
import Footer from './Components/Layout/Footer'



function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Backdrop />
      <Navbar /> 

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App