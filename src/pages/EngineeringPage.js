import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import mock from '../assets/mock.jpg'

function EngineeringPage() {
    return(
        <div className='projects-format debug'>
            <a href="/project">test</a>
            <div className='projects-title'> Check out my work</div>
            <Row xs={1} md={2} lg={3} className='projects-row'>
                <Card className='projects-card'>
                    <Card.Img variant="top" src={mock} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        Developing a Responsive Website for a Non-Profit DEI Organization
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card  className='projects-card'>
                    <Card.Img variant="top" src={mock} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='projects-card'>
                    <Card.Img variant="top" src={mock} />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
        </div>
    );
}

export default EngineeringPage;