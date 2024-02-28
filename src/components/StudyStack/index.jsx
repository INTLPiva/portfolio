import { Col, Row } from "react-bootstrap";
import {
  SiBootstrap,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
} from "react-icons/si";

export function StudyStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNestjs />
        <p>NestJS</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p>Next.js</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
        <p>Bootstrap</p>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
        <p>Tailwind</p>
      </Col>
    </Row>
  );
}
