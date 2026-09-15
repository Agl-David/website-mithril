import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      {/* BOTÓN HAMBURGUESA */}
      <button
        className="navbar-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>


      {/* LOGO */}
      <NavLink
        to="/"
        className="navbar-logo"
        onClick={closeMenu}
      >
        ⚡ MITHRIL
      </NavLink>


      {/* MENÚ */}
      <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>

        <NavLink
          to="/"
          className="navbar-link"
          onClick={closeMenu}
        >
          Inicio
        </NavLink>

        <NavLink
          to="/servicios"
          className="navbar-link"
          onClick={closeMenu}
        >
          Servicios
        </NavLink>

        <NavLink
          to="/nosotros"
          className="navbar-link"
          onClick={closeMenu}
        >
          Nosotros
        </NavLink>

        <NavLink
          to="/proyectos"
          className="navbar-link"
          onClick={closeMenu}
        >
          Proyectos
        </NavLink>

        <NavLink
          to="/contacto"
          className="navbar-link"
          onClick={closeMenu}
        >
          Contacto
        </NavLink>

      </nav>

    </header>
  );
};

export default Navbar;