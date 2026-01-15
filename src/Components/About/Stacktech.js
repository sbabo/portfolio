import { Col, Row } from "react-bootstrap";
import './About.css';
import { techstack, tools } from '../../datas/stack';

function Stacktech() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        {techstack.map((tech) => (
            <Col xs={4} md={2} className="tech-icons">
                <img src={tech.logo} alt={tech.name} />
                <div className="tech-icons-text">{tech.name}</div>
            </Col>
        ))}
    </Row>
  );
}

export default Stacktech;