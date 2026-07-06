import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import Iris from "./components/Iris";
import Projects from "./components/Projects";
import GithubRepos from "./components/GithubRepos";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Iris />
      <Projects />
      <GithubRepos />
      <Stack />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
