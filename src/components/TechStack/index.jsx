import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiGit,
  SiJest,
} from "react-icons/si";

export function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiCss3 />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiStyledcomponents />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
    </Row>
  );
}
