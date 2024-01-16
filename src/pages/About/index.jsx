import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import foto from "../../assets/foto.png";
import Tilt from "react-parallax-tilt";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";

export function About() {
  return (
    <section id="about-section">
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                Sobre <span className="blue">mim</span>
              </h1>

              <p className="home-about-body">
                Desenvolvedor Front-end com experiência em{" "}
                <b className="blue">
                  React.js, Redux, JavaScript, TypeScript, Styled Components{" "}
                </b>
                e consumo de APIs REST.
                <br />
                <br />
                Proficiente em projetos gerenciados por{" "}
                <b className="blue">Metodologias Ágeis</b>.
                <br />
                <br />
                Habilidade no uso do <b className="blue">Figma</b> para criação
                e manipulação visual, incluindo imagens, mock-ups e arte em
                geral.
                <br />
                <br />
                Formado em <b className="blue">Engenharia de Computação</b>.
              </p>
            </Col>

            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={foto} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>

          <Row>
            <Col md={12} className="home-about-social">
              <h1>Contatos</h1>

              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="mailto:lucas.piva@gec.inatel.br"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineMail />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://api.whatsapp.com/send?phone=5535988538372"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <FaWhatsapp />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/lucas-piva-oliveira/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://github.com/INTLPiva"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
