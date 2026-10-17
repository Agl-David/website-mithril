
import "./Hornalla.css";

const Hornalla = () => {
  return (
    <div className="hornalla">
      <div className="hornalla__escena">

        <div className="hornalla__resplandor" />

        {/* Llamas azules alrededor del quemador */}
        <div className="hornalla__llamas">
          {Array.from({ length: 28 }, (_, i) => {
            const angulo = (i / 28) * Math.PI * 2;

            return (
              <span
                key={i}
                className="hornalla__llama"
                style={{
                  "--x": `${140 + Math.cos(angulo) * 116}px`,
                  "--y": `${57 + Math.sin(angulo) * 39}px`,
                  "--altura": `${25 + ((i * 7) % 13)}px`,
                  "--retardo": `${i * -0.035}s`,
                }}
              >
                <span className="hornalla__llama-interior" />
              </span>
            );
          })}
        </div>

        {/* Aro metálico circular */}
        <div className="hornalla__aro-exterior" />
        <div className="hornalla__aro-interior" />

        {/* Cabezal del quemador */}
        <div className="hornalla__cuerpo">
          <div className="hornalla__orificios" />
          <div className="hornalla__tapa">
            <div className="hornalla__tapa-brillo" />
          </div>
        </div>

        {/* Llama principal naranja y amarilla */}
        <div className="hornalla__llama-central">
          <span className="hornalla__llama-central-exterior" />
          <span className="hornalla__llama-central-interior" />
          <span className="hornalla__llama-central-nucleo" />
        </div>

      </div>
    </div>
  );
};

export default Hornalla;
