import styled from "styled-components";

function NavBar({activePage, goTo}) {
  return (
    <nav>
      <NavLink
        type="button"
        className={activePage === "home" ? "active" : ""}
        onClick={() => goTo("home")}
      >Home</NavLink>
      <NavLink
        type="button"
        className={activePage === "about" ? "active" : ""}
        onClick={() => goTo("about")}
      >About</NavLink>
      <NavLink
        type="button"
        className={activePage === "contact" ? "active" : ""}
        onClick={() => goTo("contact")}
      >Contact</NavLink>
    </nav>
  )
}

const NavLink = styled.button`
  transition: border-bottom-color 500ms, background-color 500ms;
  
  border: none;
  background: white;
  padding: 1.5em 1em 1em 1em;
  margin: .5em;
  border-bottom: darkgray solid 3px;
  border-radius: 1em 1em 0 0;
  font-weight: bolder;
  
  &:hover {
    background-color: lightgray;
  }
  
  &.active {
    border-bottom: lightsalmon solid 3px;
  }
`

export default NavBar
