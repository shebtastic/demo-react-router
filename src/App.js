// import {useEffect, useState} from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styled from "styled-components";

import {Routes, Route} from "react-router-dom"
import Layout from "./components/Layout";
import AboutDetails from "./pages/AboutDetails";

function App({className}) {

  // useEffect(() => {
  //   const tid = setTimeout(() => navigate("/"), 5000)
  //   return () => clearTimeout(tid)
  // }, [navigate])

  return (
    <div className={className}>
        <Routes>
          <Route path="/" element={<Layout>test</Layout>}>
            <Route index element={<Home />} />
            <Route path="about">
              <Route index element={<About />} />
              <Route path=":name/:job" element={<AboutDetails />} />
              {/** localhost:3000/about/ernst/coach */}
            </Route>
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
    </div>
  );
}

const StyledApp = styled(App)`
  text-align: center;
`

export default StyledApp;
