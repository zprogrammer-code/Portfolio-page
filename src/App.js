import React from "react";
import { Routes, Route } from 'react-router-dom';
import HomePage from "/home/zprogrammercode/React-portfolio-page/portfolio-page1/src/Pages/Home.js";


function App(){
  return (
    <>
    <Routes>
      <Route path="/" Component={<HomePage/>}/>
    </Routes>
    </>
  )};

export default App;
