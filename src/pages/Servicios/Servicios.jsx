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
        enunciado= "Nuestros Servicios"
      />
      <CardServicios
        tituloPrincipal= "Nuestros Servicios"
        tituloSecundario="Conversión de Cocinas GLP a GN"
        texto="lorem"
      />
    </>
  );
};

export default Servicios;