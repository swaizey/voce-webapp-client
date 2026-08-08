import "./index.css";

import { useState } from "react";
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
import TermsOfServicePage from "./components/TermsOfServicePage";
import PrivacyPolicyPage from "./components/PrivacyPolicyPage";
import CopyrightPolicyPage from "./components/CopyrightPolicyPage";

function App() {
  const [activePage, setActivePage] = useState("home");

  const navigateToPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (activePage) {
      case "terms":
        return <TermsOfServicePage />;
      case "privacy":
        return <PrivacyPolicyPage />;
      case "copyright":
        return <CopyrightPolicyPage />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Benefits />
            <Features />
            <Audience />
            <AboutProject />
            <CTA />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Navbar />
      {renderPage()}
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}

export default App;