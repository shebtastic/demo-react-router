import styled from "styled-components";

import {NavLink} from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <StyledNavLink to="/" end>Home</StyledNavLink>
      <StyledNavLink to="/about">About</StyledNavLink>
      <StyledNavLink to="/contact">Contact</StyledNavLink>
    </nav>
  )
}

const StyledNavLink = styled(NavLink)`
  transition: border-bottom-color 500ms, background-color 500ms;

  text-decoration: none;
  color: black;
  
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
