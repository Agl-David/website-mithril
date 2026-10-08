import PageHeader from "../../components/PageHeader/PageHeader";
import TituloPages from "../../components/TituloPages/TituloPages";
import CardServicios from "../../components/CardServicios/CardServicios";

import "./Servicios.css"

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
          titulo="Aprobación de Proyectos"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen="https://images.unsplash.com/photo-1608454770647-01dc0f7dd97d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <CardServicios
          titulo="Aprobación de Proyectos"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen="https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
        />
        <CardServicios
          titulo="Aprobación de Proyectos"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen="https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
        />
        <CardServicios
          titulo="Aprobación de Proyectos"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen="https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
        />
        <CardServicios
          titulo="Aprobación de Proyectos"
          texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          imagen="https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
        />
      </div>
    </>
  );
};

export default Servicios;
