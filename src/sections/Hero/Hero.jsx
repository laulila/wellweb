
import "./Hero.css";

function Hero() {
  return (
    <section id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">DESARROLLO WEB</p>

        <h1 className="hero-title">
          Creo sitios web modernos
          <br />
          para profesionales y negocios.
        </h1>

        <p className="hero-description">
          Diseño y desarrollo páginas web profesionales,
          rápidas y adaptadas a todos los dispositivos.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="hero-button">
            Ver mis proyectos
          </a>

          <a href="#contact" className="hero-button secondary">
            Hablemos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

