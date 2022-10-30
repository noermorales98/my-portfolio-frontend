import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";

function Admin() {
    return (
        <div className="Admin">
            <React.StrictMode>
                <Header />
                <Home />
                <Portfolio />
                <About />
                <Contact />
            </React.StrictMode>
        </div>
    )
}

export default Admin;