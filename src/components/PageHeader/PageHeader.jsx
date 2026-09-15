import "./PageHeader.css";

const PageHeader = ({ label, title, highlight, description }) => {
  return (
    <section className="page-header">
      <div className="page-header-content">
        <span className="page-header-label">
          <span className="page-header-dot"></span>
          {label}
        </span>

        <h1 className="page-header-title">
          {title}
          <span className="page-header-highlight">{highlight}</span>
        </h1>

        <p className="page-header-description">{description}</p>
      </div>
    </section>
  );
};

export default PageHeader;
