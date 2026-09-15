// import "./App.css";

// Import de componentes permanente
import Navbar from "./components/Navbar/Navbar";

// Import de React Router
import { Route, Routes } from "react-router-dom";

// Import de páginas
import Inicio from "./pages/Inicio/Inicio";
import Servicios from "./pages/Servicios/Servicios";
import Nosotros from "./pages/Nosotros/Nosotros";
import Proyectos from "./pages/Proyectos/Proyectos";
import Contacto from "./pages/Contacto/Contacto";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
