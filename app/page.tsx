"use client";

import { useCallback, useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./components/pages/HomePage";
import ProductPage from "./components/pages/ProductPage";
import AboutPage from "./components/pages/AboutPage";
import PricingPage from "./components/pages/PricingPage";
import ContactPage from "./components/pages/ContactPage";
import SupportPage from "./components/pages/SupportPage";
import DocsPage from "./components/pages/DocsPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import TermsPage from "./components/pages/TermsPage";

export default function Home() {
  const [activePage, setActivePage] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [backVisible, setBackVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState({ msg: "", show: false });

  const showToast = useCallback((msg: string) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3000);
  }, []);

  const showPage = useCallback((name: string) => {
    setActivePage(name);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const toggleMenu = useCallback(() => setMenuOpen((o) => !o), []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // Nav scroll styling + back-to-top visibility
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setBackVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Reveal-on-scroll animations, re-run whenever the active page changes.
  // The IntersectionObserver drives the entrance animation; a backstop timer
  // guarantees content is never left permanently invisible (slow/failed JS,
  // crawlers, landing mid-page).
  useEffect(() => {
    const revealAll = () =>
      document
        .querySelectorAll(".reveal")
        .forEach((el) => el.classList.add("visible"));

    const timer = setTimeout(() => {
      const els = document.querySelectorAll(".reveal");
      if (!("IntersectionObserver" in window)) {
        revealAll();
        return;
      }
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("visible");
              obs.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      els.forEach((el) => {
        if (!el.classList.contains("visible")) obs.observe(el);
      });
    }, 100);

    const backstop = setTimeout(revealAll, 2500);
    return () => {
      clearTimeout(timer);
      clearTimeout(backstop);
    };
  }, [activePage]);

  const pages: Record<string, React.ReactNode> = {
    home: <HomePage showPage={showPage} showToast={showToast} />,
    product: <ProductPage showPage={showPage} showToast={showToast} />,
    about: <AboutPage showPage={showPage} showToast={showToast} />,
    pricing: <PricingPage showPage={showPage} showToast={showToast} />,
    contact: <ContactPage showPage={showPage} showToast={showToast} />,
    support: <SupportPage showPage={showPage} showToast={showToast} />,
    docs: <DocsPage showPage={showPage} showToast={showToast} />,
    privacy: <PrivacyPage showPage={showPage} showToast={showToast} />,
    terms: <TermsPage showPage={showPage} showToast={showToast} />,
  };

  return (
    <>
      {/* TOAST */}
      <div className={`toast${toast.show ? " show" : ""}`} id="toast">
        <div className="toast-icon">✓</div>
        <span id="toast-msg">{toast.msg}</span>
      </div>

      {/* BACK BTN */}
      <button
        className={`back-btn${backVisible ? " show" : ""}`}
        id="backBtn"
        onClick={scrollToTop}
        title="Back to top"
      >
        ↑
      </button>

      <Navbar
        activePage={activePage}
        scrolled={scrolled}
        menuOpen={menuOpen}
        showPage={showPage}
        showToast={showToast}
        toggleMenu={toggleMenu}
      />

      {pages[activePage] ?? pages.home}

      <Footer showPage={showPage} showToast={showToast} />
    </>
  );
}
