import Image from "next/image";
import Hero from "./components/hero";
import Project from "./components/projects";
import profile from "profile.png";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function Home() {
  return (
  <main>
    <Hero />
    <Project />
    <Skills/>
    <Contact/>
  
  </main>   
)
}
