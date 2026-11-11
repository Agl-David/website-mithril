// import css
import "./CallToAction.css";

//import imgs
import trabajador from "../../assets/imgs/inicio/Trabajador.png";

const CallToAction = () => {
  return (
    <div className="card-container">
      <div className="card-left">
        <h2>
          ¿TIENES UNA OBRA EN EJECUCIÓN Y BUSCAS UN SERVICIO DE INSTALACIÓN DE
          GAS NATURAL?
        </h2>
        <h2>ESTAMOS LISTOS PARA AYUDARTE</h2>
        <ul>
          <li>Instalaciones seguras</li>
          <li>Proyectos residenciales y comerciales</li>
          <li>Asesoramiento técnico</li>
        </ul>
        <a
          href="https://wa.me/59168500875?text=Hola,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
          className="footer__boton"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contactanos
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="card-right">
        <img src={trabajador} alt="" />
      </div>
    </div>
  );
};

export default CallToAction;
