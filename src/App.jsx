import About from "./components/About"
import Qualification from "./components/Experience"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Nav"
import "../src/components/internal.css"
import AOS from 'aos'
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Cursor from "./Cursor"
import LiveProject from "./components/LiveProject"
import Contact from "./components/Contact"
import {useEffect, useState} from 'react'
import ProblemSolving from "./components/ProblemSolving"
import 'aos/dist/aos.css'


function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {

    AOS.init({ duration: 2000 })
    setTimeout(() =>
      setIsLoading(false), 700
    )

  }, [])

  return (
    <div className="flex  font-mono flex-col items-center justify-center bg-gray-50 w-full h-full  ">
      <Navbar />
      <Hero />
      {/* <About /> */}
      <Qualification  />
      <LiveProject />
      <Skills />
      <Projects />
      <ProblemSolving />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
