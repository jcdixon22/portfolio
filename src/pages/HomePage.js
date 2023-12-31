import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';

import portrait_transparent from '../assets/headshot.png'

function HomePage() {
    return(
        <div className='debug home-format'>
            <Row>
                <Col className='debug'>
                    <div className='text-header-big'> Hi,</div>
                    <div className='text-header-jumbo'>I'm Justice</div>
                    <div className='text-subtitle'>
                        An engineer based in San Francisco.
                    </div>
                    <div className='text-subtitle'>
                        I dabble in robotics, software, and hardware.
                    </div>

                        <Button className='home-button'>Check out my Stuff</Button>

                </Col>
                <Col className='debug test'>
                    <Image className="home-picture" src={portrait_transparent} />
                </Col>
            </Row>
        </div>
    );
}

export default HomePage;