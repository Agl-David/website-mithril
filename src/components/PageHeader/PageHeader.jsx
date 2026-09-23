import "./PageHeader.css";

const PageHeader = ({ etiqueta, titulo, resaltado, descripcion }) => {
  return (
    <section className="page-header">

      <div className="page-header-content">

        <span className="page-header-label">

          <span className="page-header-dot">
          </span>
           {etiqueta}

        </span>
        
        <h1 className="page-header-title"> 
          {titulo}
          <span className="page-header-highlight">{resaltado}</span>
        </h1>

        <p className="page-header-description">{descripcion}</p>
      
      </div>

    </section>
  );
};

export default PageHeader;
