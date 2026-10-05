import CardServicios from "../../components/CardServicios/CardServicios";
import PageHeader from "../../components/PageHeader/PageHeader";

const Servicios = () => {
  return (
    <>
      <PageHeader
        etiqueta="Servicios"
        titulo="Soluciones en Gas Natural para cada"
        resaltado="proyecto"
        descripcion="Ofrecemos soluciones técnicas para instalaciones nuevas, ampliaciones, modificaciones y proyectos de Gas Natural."
      />
      <CardServicios
        titulo="Instalacion de Calefon"
        texto="Habilitacion de Calefon"
      />
    </>
  );
};

export default Servicios;