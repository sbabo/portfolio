import { Container } from "react-bootstrap";
import "./Projects.css";
import ProjectsCard from "./ProjectsCard";
import { Row, Col } from "react-bootstrap";
import { projectsList } from "../../datas/projects";

function Projects() {
  return (
    <Container fluid className="projects-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "#374151" }}>
          Here are a few projects I've worked on.
        </p>

        <Row className="g-4">
          {projectsList.map((project) => (
            <Col xs={12} sd={6} lg={4} className="project-card" key={project.title}>
              <ProjectsCard
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;