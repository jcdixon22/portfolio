import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import mock from '../assets/mock.jpg'

function EngineeringPage() {
    return(
        <div className='debug engineer-format'>
                <Row xs={1} lg={2}>
                    <Col>
                        <Card className='engineer-card'>
                            <Card.Img variant="bottom" src={mock} />
                            <Card.Body className='engineer-card-body'>
                                <Card.Text>Biomimetic Mimimetic</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row xs={1} lg={2}>
                    <Col>
                        <Card className='engineer-card'>
                            <Card.Img variant="bottom" src={mock} />
                            <Card.Body>
                                <Card.Title>Biomimetic Mimimetic</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row xs={1} lg={2}>
                    <Col>
                    <Card className='engineer-card'>
                        <Card.Img variant="bottom" src={mock} />
                        <Card.Body>
                            <Card.Title>Biomimetic Mimimetic</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
        </div>
    );
}

export default EngineeringPage;