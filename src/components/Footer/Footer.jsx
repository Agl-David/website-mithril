  import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Columna 1: Descripción */}
        <section className="footer__descripcion">
          <a href="/" className="footer__logo">
            <span className="footer__logo-icon" aria-hidden="true">
              M
            </span>

            <span>MITHRIL</span>
          </a>

          <p className="footer__text">
            Soluciones profesionales en instalaciones de gas
            natural para proyectos residenciales y comerciales.
            Seguridad, calidad y confianza en cada instalación.
          </p>

          <a href="/contacto" className="footer__boton">
            Solicitar cotización
            <span aria-hidden="true"> ↗</span>
          </a>
        </section>

        {/* Columna 2: Páginas */}
        <nav className="footer__pages" aria-label="Páginas">
          <h2 className="footer__titulo">Páginas</h2>

          <ul className="footer__lista">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/nosotros">Nosotros</a>
            </li>
            <li>
              <a href="/servicios">Servicios</a>
            </li>
            <li>
              <a href="/proyectos">Proyectos</a>
            </li>
            <li>
              <a href="/contacto">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Columna 3: Servicios */}
        <nav className="footer__servicios" aria-label="Servicios">
          <h2 className="footer__titulo">Servicios</h2>

          <ul className="footer__lista">
            <li>
              <a href="/servicios">Instalaciones de gas</a>
            </li>
            <li>
              <a href="/servicios">Proyectos de gas</a>
            </li>
            <li>
              <a href="/servicios">Ampliaciones</a>
            </li>
            <li>
              <a href="/servicios">Modificaciones</a>
            </li>
            <li>
              <a href="/servicios">Pruebas de fuga</a>
            </li>
          </ul>
        </nav>

        {/* Columna 4: Contacto */}
        <section className="footer__contacto">
          <h2 className="footer__titulo">Contacto</h2>

          <ul className="footer__lista">
            <li>
              <a href="tel:+59171433512">
                +591 71433512
              </a>
            </li>

            <li>
              <span>Cochabamba, Bolivia</span>
            </li>

            <li>
              <a
                href="https://wa.me/59171433512"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escríbenos por WhatsApp
              </a>
            </li>
          </ul>
        </section>

      </div>

      {/* Barra inferior */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {new Date().getFullYear()} MITHRIL.
          Todos los derechos reservados.
        </p>

        <a href="/contacto" className="footer__bottom-link">
          Seguridad y confianza
        </a>
      </div>
    </footer>
  );
};

export default Footer;
