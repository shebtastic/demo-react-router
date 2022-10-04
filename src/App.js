import {useState} from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import styled from "styled-components";

function App({className}) {
  const [page, setPage] = useState("home")

  return (
    <div className={className}>
      <NavBar activePage={page} goTo={setPage} />
      <main>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "contact" && <Contact />}
      </main>
    </div>
  );
}

const StyledApp = styled(App)`
  text-align: center;
`

export default StyledApp;
