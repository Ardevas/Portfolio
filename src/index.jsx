// Index.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// RENDER COMPONENTS

import Home from "./pages/home";
import ScrollHandler from "./components/scrollHandler";
import ContactBar from "./layout/contactBar";
import Header from "./layout/header";
import Footer from "./layout/footer";
import Background from "./components/background";

// STYLES
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Background />
      <ContactBar />
      <Header />
      <Routes>
        <Route path="/Portfolio/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
