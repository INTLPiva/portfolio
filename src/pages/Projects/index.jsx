import "./styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "../../components/ProjectCard";
import todo from "../../assets/projects/todo.png";
import shopping from "../../assets/projects/shopping.png";
import speech from "../../assets/projects/speech.png";

export function Projects() {
  return (
    <section id="projects-section">
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            Meus <strong className="blue">Projetos</strong>
          </h1>

          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todo}
                isBlog={false}
                title="Lista de Tarefas"
                description="Aplicação Web desenvolvido em React para criar, excluir e marcar tarefas como concluídas."
                ghLink="https://github.com/INTLPiva/lista-de-tarefas"
                demoLink="https://lista-de-tarefas-ebon-eta.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={shopping}
                isBlog={false}
                title="Protótipo de E-Commerce"
                description="Protótipo de um E-Commerce que contém sistema de cadastro, login, carrinho de compras e favoritos."
                ghLink="https://github.com/INTLPiva/shopping"
                demoLink="https://shopping-fawn-iota.vercel.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={speech}
                isBlog={false}
                title="Reconhecimento de voz"
                description="Projeto que converte a fala em texto desenvolvido com ReactJS para testar a biblioteca de reconhecimento de voz."
                ghLink="https://github.com/INTLPiva/react-speech-recognition"
                demoLink="https://react-speech-recognition-rho.vercel.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}
