import { Container, Row, Stack } from "react-bootstrap";
import { GoogleFont } from "react-google-fonts";
import './About.css';
import Stacktech from "./Stacktech";
import Stacktools from "./Stacktools";


function About() {
  return (
    <Container fluid className="about-section">
        <Container>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", fontFamily: "'Inter', semi-bold" }}>
                    Know Who <strong>I Am</strong>
                </h1>
            </Row>
            <Row className="about-content-row">
                <p className="about-content">
                    Hello! I'm a passionate Samuel Babo from Nantes, France.
                </p>
                <p>
                    I'm looking for a job as a <strong>Software Developer</strong> or <strong>Data Engineer</strong>.
                </p>
                <p>
                    I completed a Master's degree in <strong>Computer Science</strong> from "EPSI" and partially in 
                    <strong> Data Engineering</strong> from the National school of Les Mines de Paris.
                </p>
                <br />
                <p>
                    Outside of coding, I enjoy :
                </p>
                <ul>
                    <li>Video games</li>
                    <li>Sim racing</li>
                    <li>Basketball</li>
                </ul>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", fontFamily: "'Inter', semi-bold" }}>
                    My <strong>Skills</strong>
                </h1>
            </Row>
            <Row className="about-content-row">
                <Stacktech />
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", fontFamily: "'Inter', semi-bold" }}>
                    My <strong>Tools</strong>
                </h1>
            </Row>
            <Row className="about-content-row">
                <Stacktools />
            </Row>
        </Container>
    </Container>
  );
}
export default About;