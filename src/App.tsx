import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import { JontyDetails } from "./pages/JontyDetails";
import { LeaforaDetails } from "./pages/LeaforaDetails";
import { PetoraDetails } from "./pages/PetoraDetails";
import { RefrigeratorDetails } from "./pages/RefrigeratorDetails";

import { useScreenInit } from "./useScreenInit";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export function App() {
  useScreenInit();

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="min-h-screen bg-background text-zinc-50 font-sans">

        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Project Pages */}
          <Route
            path="/projects/jonty"
            element={<JontyDetails />}
          />

          <Route
            path="/projects/leafora"
            element={<LeaforaDetails />}
          />

          <Route
            path="/projects/petora"
            element={<PetoraDetails />}
          />
<Route
  path="/projects/refrigerator"
  element={<RefrigeratorDetails />}
/>
        </Routes>

      </div>
    </BrowserRouter>
  );
}