
import React from "react";
import {Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./pages/header";


function App() {

  return (
    <> 
  <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes>
    {/* <Movies /> */}
    </>
  );
}

export default App;
