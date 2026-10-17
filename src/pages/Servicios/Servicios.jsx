// import Components
import PageHeader from "../../components/PageHeader/PageHeader";
import TituloPages from "../../components/TituloPages/TituloPages";
import CardServicios from "../../components/CardServicios/CardServicios";

//Import css page
import "./Servicios.css"

// Importacion de imagenes
import imgProyectos from "../../assets/imgs/servicios/proyectos.jpg"
import imgHornalla from "../../assets/imgs/servicios/hornalla.png"
import imgTuberia from "../../assets/imgs/servicios/tuberia.jpg"
import imgValvula from "../../assets/imgs/servicios/valvula.jpg"

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
        enunciado="Enunciado de la sección" 
      />

      <div className="servicios__contenedor">
        <CardServicios
          titulo="Diseño, elaboración y Aprobación de Proyectos"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen={imgProyectos}
        />
        <CardServicios
          titulo="Instalación y Habilitacion de Equipos a Gas Natural"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen={imgHornalla}
        />
        <CardServicios
          titulo="Pruebas de Fuga y Reparaciones"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen={imgValvula}
        />
        <CardServicios
          titulo="Modificaciones, Ampliaciones y Mantenimiento"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen={imgTuberia}
        />
      </div>
    </>
  );
};

export default Servicios;
