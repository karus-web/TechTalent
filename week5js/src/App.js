// import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import OrderPage from './pages/OrderPage' ;
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
// import Loader from './Loader';

function App() {

return(
  <Router>
 {/* <div className="app-container"> */}
    <div className="App">
      <header className="App-header">
        <h1> Welcome to Cake Shop!</h1>
      </header>

      <div className="app-container">

      <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to="/"  className="navbar-brand">Home</Link>
            <Link to="/about"  className="navbar-brand">About</Link>
            <Link to="/contact"  className="navbar-brand">Contact</Link>
            <Link to="/orderpage"  className="navbar-brand" >OrderPage</Link>
      </nav>
      {/* <div className="app-container"> */}

      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* <Route path="/blog" element={<BlogPage />} /> */}
        <Route path="/orderpage" element={<OrderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    {/* <div className="app-container"> */}
      
 
      <footer className="App-footer">
        <p>&copy; 2023 Cake World. All rights reserved.</p>
       The Cake Shop is rated 5 - Very Good by the Food Standard's Agency.
          Telephone : 0333 465 3434,   Email: cake@cakeshop.com.

        </footer>
    </div>
     </div> 
  </Router> 

   
   );
}

 export default App;


 