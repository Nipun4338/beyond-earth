import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import Fetch from "./pages/Fetch";

function App(){
    return(
        <div>
        <Router>
        <Header />
        <Fetch />
        <Footer />
        </Router>
        </div>
    );
}

export default App;