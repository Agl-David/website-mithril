  import "./CardServicios.css";

  const CardServicios = ({titulo, texto}) => {
    return (
      <section className="servicios">
        <header className="servicios__cabecera">
          <h1>¿Que hacemos?</h1>
        </header>

        <div className="servicios__contenedor">
          <div className="servicios__contenedor-card">
            {/* <img src="" alt="" /> */}
            <h1>{titulo}</h1>
            <p>{texto}</p>
          </div>
        </div>
      </section>
    );
  };

  export default CardServicios;
