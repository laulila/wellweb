
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-container">
        <a href="#home" className="logo">
          WellWeb
        </a>

        <div className="nav-links">
          <a href="#services">Servicios</a>
          <a href="#projects">Proyectos</a>
          <a href="#about">Sobre mí</a>
          <a href="#contact">Contacto</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

