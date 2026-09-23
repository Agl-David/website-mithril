import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      {/* LOGO */}
      <NavLink to="/" className="navbar-logo" >
        MITHRIL
      </NavLink>

      {/* MENÚ */}
      <nav className="navbar-menu">
        <NavLink to="/" className="navbar-link">
          Inicio
        </NavLink>

        <NavLink to="/servicios" className="navbar-link">
          Servicios
        </NavLink>

        <NavLink to="/nosotros" className="navbar-link">
          Nosotros
        </NavLink>

        <NavLink to="/proyectos" className="navbar-link">
          Proyectos
        </NavLink>

        <NavLink to="/contacto" className='navbar-link' >
          Contacto
        </NavLink>
      </nav>
      
    </header>
  );
};

export default Navbar;
