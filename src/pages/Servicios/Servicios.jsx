
 // import Components
import PageHeader from "../../components/PageHeader/PageHeader";
import TituloPages from "../../components/TituloPages/TituloPages";
import CardServicios from "../../components/CardServicios/CardServicios";

// Import CSS page
import "./Servicios.css";

// Importación de imágenes
import imgProyectos from "../../assets/imgs/servicios/proyectos.jpg";
import imgHornalla from "../../assets/imgs/servicios/hornalla.png";
import imgTuberia from "../../assets/imgs/servicios/tuberia.jpg";
import imgValvula from "../../assets/imgs/servicios/valvula.jpg";

const Servicios = () => {
  return (
    <>
      <PageHeader
        etiqueta="Servicios"
        titulo="Soluciones en Gas Natural para cada"
        resaltado="proyecto"
        descripcion="Ofrecemos soluciones técnicas para instalaciones nuevas, ampliaciones, modificaciones y proyectos de Gas Natural."
      />

      <TituloPages
        enunciado="Soluciones técnicas para instalaciones seguras, eficientes y confiables."
      />

      <section className="servicios">
        <div className="servicios__contenedor">
          <CardServicios
            titulo="Diseño, Elaboración y Aprobación de Proyectos"
            texto="Desarrollamos proyectos de instalaciones de Gas Natural, desde el diseño técnico y la elaboración de planos hasta la gestión de aprobación correspondiente."
            imagen={imgProyectos}
          />

          <CardServicios
            titulo="Instalación y Habilitación de Equipos a Gas Natural"
            texto="Realizamos instalaciones y habilitaciones de equipos a Gas Natural, procurando una conexión adecuada y el cumplimiento de los requisitos técnicos aplicables."
            imagen={imgHornalla}
          />

          <CardServicios
            titulo="Pruebas de Fugas y Reparaciones"
            texto="Evaluamos posibles fugas y atendemos problemas en instalaciones de Gas Natural para contribuir a su seguridad y correcto funcionamiento."
            imagen={imgValvula}
          />

          <CardServicios
            titulo="Modificaciones, Ampliaciones y Mantenimiento"
            texto="Adaptamos instalaciones existentes a nuevas necesidades mediante modificaciones, ampliaciones y trabajos de mantenimiento."
            imagen={imgTuberia}
          />
        </div>
      </section>
    </>
  );
};

export default Servicios;
