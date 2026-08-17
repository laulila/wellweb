import "./Footer.css";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>WellWeb</h3>
          <p>Frontend Developer | React | JavaScript</p>
        </div>

        <div className="footer-icons">
          <FaReact title="React" />
          <FaJs title="JavaScript" />
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />

          <a
            href="https://github.com/laulila"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Laura Pereyra. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;