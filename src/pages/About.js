import { NavLink } from "react-router-dom"

function About() {
  return (
    <>
      <h1>About</h1>
      <p>Hier steht was über mich!</p>
      <NavLink to={"/cards/:id"}>Erfahr mehr über ernst und seinen job!</NavLink>
      <NavLink to={"frank/coach"}>Erfahr mehr über frank und seinen job!</NavLink>
    </>
  )
}

export default About
