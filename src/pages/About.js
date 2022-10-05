import { NavLink } from "react-router-dom"

function About() {
  return (
    <>
      <h1>About</h1>
      <p>Hier steht was über mich!</p>
      <NavLink to={"/ernst/coach"}>Erfahr mehr über ernst und seinen job!</NavLink>
      <NavLink to={"michael/studi"}>Erfahr mehr über frank und seinen job!</NavLink>
    </>
  )
}

export default About
