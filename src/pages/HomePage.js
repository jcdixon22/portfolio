import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import ImageWithLoading from '../components/ImageWithLoading';

import data from "../general_data.json"

function HomePage() {
    return(
        <div className='home-format'>
            <Row className='home-row' sm={1} lg={2}>
                <div className='home-col'>
                    <div>
                        <div className='text-header-big'> Hi,</div>
                        <div className='text-header-jumbo'>I'm Justice</div>
                        <div className='text-subtitle'>
                            An engineer based in San Francisco.
                        </div>
                        <div className='text-subtitle'>
                            I dabble in robotics, software, and hardware.
                        </div>
                        <Button className='home-button' href="engineering">Check out my Stuff</Button>
                    </div>
                </div>
                <div className='home-col'>
                    {/* <Image className="home-picture" src={data.Home_Page.headshot} /> */}
                    <img className="home-picture" src={data.Home_Page.headshot} />
                </div>
            </Row>
        </div>
    );
}

export default HomePage;