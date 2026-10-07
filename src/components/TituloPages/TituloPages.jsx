import "./TituloPages.css";

const TituloPages = ({enunciado}) => {
  return (
    <header className="header__titulo">
      <h1>{enunciado}</h1>
    </header>
  );
};

export default TituloPages;
