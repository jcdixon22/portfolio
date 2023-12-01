import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import portrait_transparent from '../assets/portrait_transparent.png'

function HomePage() {
    return(
        <div className='debug home-format'>
            <Row>
                <Col className='debug'>
                    <div className='text-header-big'> Hi, I'm Justice</div>
                    <div className='text-subtitle'>
                        Check out some of my projects
                    </div>
                    <button className='home-button'>Engineering Portfolio</button>
                    <button className='home-button'>Modelling Portfolio</button>
                    <button className='home-button'>Let's get in Touch</button>
                </Col>
                <Col className='debug'>
                    test
                    <Image className="home-picture" src={portrait_transparent} roundedCircle/>
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;