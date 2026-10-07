import PageHeader from "../../components/PageHeader/PageHeader";
import TituloPages from "../../components/TituloPages/TituloPages";
import CardServicios from "../../components/CardServicios/CardServicios";

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
        enunciado= "Enunciado de la sección"
      />
      <CardServicios
        titulo= "Aprobación de Proyectos"
        texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imagen= "https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
      />
      <CardServicios
        titulo= "Aprobación de Proyectos"
        texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imagen= "https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
      />
      <CardServicios
        titulo= "Aprobación de Proyectos"
        texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imagen= "https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
      />
      <CardServicios
        titulo= "Aprobación de Proyectos"
        texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imagen= "https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
      />
      <CardServicios
        titulo= "Aprobación de Proyectos"
        texto="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imagen= "https://www.ferroli.com.ar/wp-content/uploads/2021/09/servicios-1.jpg"
      />
    </>
  );
};

export default Servicios;