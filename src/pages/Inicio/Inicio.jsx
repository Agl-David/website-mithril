// Import de los componentes
import CallToAction from "../../components/CallToAction/CallToAction";
import PageHeader from "../../components/PageHeader/PageHeader";

const Inicio = () => {
  return (
    <>
      <PageHeader
        etiqueta="Inicio"
        titulo="Empresa Instaladora de"
        resaltado="Gas Natural"
        descripcion="Diseño, instalación y asesoramiento para proyectos residenciales, comerciales e industriales."
      />

      <CallToAction/>
    </>
  );
};

export default Inicio;
