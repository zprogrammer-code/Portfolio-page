import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Pages/Home.js';
import ContactPage from '/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Pages/Contact.js';



function App(){
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Home" element={<HomePage/>}/>
      <Route path="/Contact" element={<ContactPage/>}/>

    </Routes>
    </>
  )};

export default App;
