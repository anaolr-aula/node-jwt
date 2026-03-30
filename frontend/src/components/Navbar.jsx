import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Importando o CSS do PDF

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home (Login)</Link>
      <Link to="/adm">Área Restrita (ADM)</Link>
      <Link to="/contatos">Contatos</Link>
    </nav>
  );
}

export default Navbar;