import Card from 'react-bootstrap/Card';
import Projects from './Projects';
import Button from 'react-bootstrap/Button';

function ProjectsCard(props) {
    return (
        <Card className="projects-card">
            <Card.Img variant="top" src={props.image} alt="card-image" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify"}}>
                    {props.description}
                </Card.Text>
                <Button variant="primary" href={props.link} target="_blank" rel="noopener noreferrer">
                    View Project
                </Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectsCard;