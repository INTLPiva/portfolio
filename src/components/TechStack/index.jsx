import { Col, Row } from "react-bootstrap";
import {
  SiTypescript,
  SiReact,
  SiStyledcomponents,
  SiGit,
  SiJest,
  SiFigma,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

export function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p>React</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <p>Typescript</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <p>Jest</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents />
        <p>CSS-in-JS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
        <p>Node.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <p>PostgreSQL</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <p>MongoDB</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p>Git</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFigma />
        <p>Figma</p>
      </Col>
    </Row>
  );
}
