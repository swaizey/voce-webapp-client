import "./index.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Benefits from "./components/Benefits";
import Features from "./components/Features";
import Audience from "./components/Audience";
import AboutProject from "./components/About";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">

      <Navbar />

      <Hero />

      <About />

      <Benefits />

      <Features />

      <Audience />

      <AboutProject />

      <CTA />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;