import "./index.css";

import { useEffect, useState } from "react";
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
  const getPageFromPath = (path) => {
    if (path === "/privacy-policy" || path.startsWith("/privacy-policy/")) {
      return "privacy";
    }

    return "home";
  };

  const [activePage, setActivePage] = useState(() => getPageFromPath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => {
      setActivePage(getPageFromPath(window.location.pathname));
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigateToPage = (page) => {
    const nextPath = page === "privacy" ? "/privacy-policy" : "/";
    setActivePage(page);
    window.history.pushState({}, "", nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (activePage) {
      case "terms":
        return <TermsOfServicePage onNavigate={navigateToPage} />;
      case "privacy":
        return <PrivacyPolicyPage onNavigate={navigateToPage} />;
      case "copyright":
        return <CopyrightPolicyPage onNavigate={navigateToPage} />;
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
      {activePage === "home" ? <Hero onNavigate={navigateToPage} /> : null}
      {renderPage()}
      <Footer onNavigate={navigateToPage} />
    </div>
  );
}

export default App;