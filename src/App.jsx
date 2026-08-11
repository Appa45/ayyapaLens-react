import { BrowserRouter, Routes, Route,} from "react-router-dom";
import {useState,useEffect} from "react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";
import Loader from "./components/Loader/Loader";

import Home from "./pages/Home";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Journey from "./components/Journey";

import "./App.css";

function App() {

    const [loading,setLoading]=useState(true);

  useEffect(()=>{

      setTimeout(()=>{

          setLoading(false);

      },3000);

  },[]);

  if(loading){
      return <Loader/>
  }
  
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/journey" element={<Journey />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;