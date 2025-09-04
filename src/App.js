import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Components/Header';

// Import from Pages folder
import Footer from "./Components/Footer";
import AmericanExpress from './Pages/AmericanExpress';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';

function App() {
   

    return (
        <div className="App">
            
            <Header />
            <Routes>
                {/* Main Routes */}
                {/* <Route path="/c" element={<Home />} /> */}
                <Route path="/" element={<AmericanExpress />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact-us" element={<ContactUs />} />
                

             

                {/* 404 Route */}
                {/* <Route path="*" element={<Home/>} /> */}
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
