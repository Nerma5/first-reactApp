
import React from "react";
import {Link, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Header from "./pages/header";
import Practice from "./practice/Practice";
import axios from "axios";
import Dropdown from "./practice/Dropdown";

function App() {

  return (
    <> 
  {/* <Header />
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
    </Routes> */}
    {/* <Movies /> */}
    <Practice />
    </>
  );
}

export default App;
