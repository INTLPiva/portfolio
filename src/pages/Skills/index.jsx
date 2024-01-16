import "./styles.css";
import { Container } from "react-bootstrap";
import { Techstack } from "../../components/TechStack";
import { StudyStack } from "../../components/StudyStack";

export function Skills() {
  return (
    <section id="skills-section">
      <Container fluid className="skills-section">
        <Container>
          <h1 className="skills-heading">
            <strong className="blue">Habilidades</strong>
          </h1>
          <Techstack />

          <h1 className="skills-heading">Estudando</h1>
          <StudyStack />
        </Container>
      </Container>
    </section>
  );
}
