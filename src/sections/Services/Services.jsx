
import "./Services.css";

function Services() {
  return (
    <section id="services">
      <div className="services-container">
        <p className="section-label">SERVICIOS</p>

        <h2 className="section-title">
          Soluciones web para tu proyecto
        </h2>

        <div className="services-grid">
          <article className="service-card">
            <h3>Landing Pages</h3>
            <p>
              Páginas modernas y atractivas para presentar
              tu negocio, servicio o proyecto.
            </p>
          </article>

          <article className="service-card">
            <h3>Sitios profesionales</h3>
            <p>
              Sitios web personalizados para profesionales,
              empresas y emprendimientos.
            </p>
          </article>

          <article className="service-card">
            <h3>Tiendas online</h3>
            <p>
              E-commerce con catálogo de productos,
              carrito y funcionalidades personalizadas.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Services;

