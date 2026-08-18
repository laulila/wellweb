import "./Projects.css";

function Projects() {
  return (
    <section id="projects">
      <div>
        <p>PROYECTOS</p>

        <h2>Algunos de mis trabajos</h2>

        <div>
          <article>
            <h3>Pereira & Asociados</h3>
            <p>
              Sitio web profesional para un estudio contable,
              con presentación de servicios y formulario de contacto.
            </p>
          </article>

          <article>
            <h3>English Studio</h3>
            <p>
              Landing page para clases personalizadas de inglés,
              con diseño responsive y animaciones.
            </p>
          </article>

          <article>
            <h3>Pereyra Bookshop</h3>
            <p>
              E-commerce desarrollado con React y Firebase,
              con catálogo, búsqueda, carrito y administración.
            </p>
          </article>

          <article>
            <h3>Vinoteca</h3>
            <p>
              Sitio web para una vinoteca, desarrollado con React,
              con catálogo de productos y diseño responsive.
            </p>

            <a
              href="https://vinoteca-peach.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver proyecto
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Projects;