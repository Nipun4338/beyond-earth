import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";
import Planet from "./pages/Planets";
import PlanetByAge from "./pages/PlanetByAge";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App(){
    return(
        <div>
        <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/planet" element={<Planet />} />
            <Route path="/ageCalculator" element={<PlanetByAge/>} />
        </Routes>
        <Footer />
        </Router>
        </div>
    );
}

export default App;