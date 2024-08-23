import { Link } from "react-router-dom"

import "./Navbar.css"

const NavBar = () => {
  return (
   <nav className="navbar">
    <h2>
      <Link to="/">Memories</Link>
    </h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    <li>
      <Link to="add-memory">Adicionar  Memoria</Link>
    </li>
    </ul>
   </nav>
  )
}

export default NavBar