  import "./CardServicios.css";

  const CardServicios = ({titulo, texto}) => {
    return (
      <section className="servicios">

        <div className="servicios__contenedor">
          <div className="servicios__contenedor-card">
            <img src="" alt="" />
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>
        </div>

      </section>
    );
  };

  export default CardServicios;
