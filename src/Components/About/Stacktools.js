import { Col, Row } from "react-bootstrap";
import './About.css';
import { techstack, toolsstack } from '../../datas/stack';

function Stacktools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolsstack.map((tool) => (
        <Col xs={4} md={2} className="tech-icons">
          <img src={tool.logo} alt={tool.name} />
          <div className="tech-icons-text">{tool.name}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Stacktools;