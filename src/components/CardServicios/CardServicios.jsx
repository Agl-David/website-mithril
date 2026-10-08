  import "./CardServicios.css";

  const CardServicios = ({titulo, texto, imagen}) => {
    return (
          <div className="servicios__contenedor-card">
            <img src={imagen} alt="Imagen de servicio" />
            <h2>{titulo}</h2>
            <p>{texto}</p>
          </div>
    );
  };

  export default CardServicios;
