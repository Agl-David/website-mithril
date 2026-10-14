import "./Footer.css"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Columna 1: Descripción */}
        <section className="footer__descripcion">
          <a href="/" className="footer__logo">MITHRIL</a>
          <p className="footer__text">
            Soluciones profesionales en instalaciones de gas natural
            para proyectos residenciales y comerciales. Seguridad,
            calidad y confianza en cada instalación.
          </p>
          <button> Solicitar Cotización</button>
        </section>

        {/* Columna 2: pages */}
        <nav className="footer__pages">
          <h2>Páginas</h2>
          <ul>
            <li>
              <a href="/" className="footer__enlace">Inicio</a>
            </li>
            <li>
              <a href="/servicios" className="footer__enlace">Servicios</a>
            </li>
            <li>
              <a href="/nosotros" className="footer__enlace">Nosotros</a>
            </li>
            <li>
              <a href="/proyectos" className="footer__enlace">Proyectos</a>
            </li>
            <li>
              <a href="/contacto" className="footer__enlace">Contacto</a>
            </li>
          </ul>
        </nav>

        {/* Columna 3: contacto*/}
        <div className="footer__columna">
          <a href="">71433512</a>
          <a href="">calle</a>

        </div>

        <div className="footer__empresa">
          <ul>
            <a href="">Servicios</a>
            <a href="">Nosotros</a>
            <a href="">Proyectos</a>
            <a href="">Contactanos</a>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
