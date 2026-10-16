import "./Hornalla.css";

const Hornalla = () => {
  return (
    <div className="hornalla">
      <div className="hornalla__quemador">

        {/* Llamas vistas desde el lateral */}
        <div className="hornalla__llamas">
          {Array.from({ length: 13 }, (_, i) => (
            <span
              key={i}
              className="hornalla__llama"
              style={{
                "--i": i,
                "--altura": `${35 + ((i * 17) % 25)}px`,
                "--inclinacion": `${((i % 3) - 1) * 7}deg`,
              }}
            >
              <span className="hornalla__llama-interior" />
            </span>
          ))}
        </div>

        {/* Cabezal metálico */}
        <div className="hornalla__aro" />
        <div className="hornalla__tapa" />

        {/* Cuerpo de la hornalla */}
        <div className="hornalla__base" />

      </div>
    </div>
  );
};

export default Hornalla;