// import {useEffect, useState} from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styled from "styled-components";

import {Routes, Route, useNavigate} from "react-router-dom"

function App({className}) {
  const navigate = useNavigate()

  // useEffect(() => {
  //   const tid = setTimeout(() => navigate("/"), 5000)
  //   return () => clearTimeout(tid)
  // }, [navigate])

  return (
    <div className={className}>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <button onClick={() => {navigate("/")}}>Send me home!</button>
    </div>
  );
}

const StyledApp = styled(App)`
  text-align: center;
`

export default StyledApp;
