import Projects from "./sections/Projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
import Services from "./sections/Services/Services";
import Contact from "./sections/Contact/Contact";
import About from "./sections/About/About";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}


export default App;




