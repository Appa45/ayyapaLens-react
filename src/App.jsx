import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader/Loader";

import Home from "./pages/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Journey from "./components/journey/Journey";

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="app">
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/gallery"
            element={<Gallery />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/journey"
            element={<Journey />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;