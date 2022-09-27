import React from "react";
import "./Style.css";
import Info from "./components/Info.jsx";
import About from "./components/About.jsx";
import Interest from "./components/Interest.jsx";
import Footer from "./components/Footer.jsx";
export default function App() {
  return (
    <div className="Main">
      <Info />

      <About />
      <Interest />
      <Footer />
    </div>
  );
}
