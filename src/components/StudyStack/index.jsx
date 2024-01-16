import { Col, Row } from "react-bootstrap";
import {
  SiNodedotjs,
  SiMongodb,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";

export function StudyStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss />
      </Col>
    </Row>
  );
}
