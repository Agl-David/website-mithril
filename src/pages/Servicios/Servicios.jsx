// import Components
import PageHeader from "../../components/PageHeader/PageHeader";
import TituloPages from "../../components/TituloPages/TituloPages";
import CardServicios from "../../components/CardServicios/CardServicios";

//Import css page
import Servicios from "./Servicios.css"

// Importacion de imagenes
import imgProyectos from "../../assets/imgs/servicios/proyectos.jpg"
import imgHornalla from "../../assets/imgs/servicios/hornalla.png"



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
          imagen="https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
        />
        <CardServicios
          titulo="Modificaciones, Ampliaciones y Mantenimiento"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen="https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
        />
      </div>
    </>
  );
};

export default Servicios;
