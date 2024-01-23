import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import data from "../general_data.json"

function ProjectPage() {

    return(
        <div className='project-format'>
            <div className='project-title'>
                Designing a Full Anthropromorphic Robotic Hand
            </div>
            <div className='project-subheader'>
                    <div className='project-info'>Oct-May 2020</div>
                    <div className='project-info'>   •   </div>
                    <div className='project-info'>Princeton, NJ</div>
                </div>
            <img className="project-image" src={data.Home_Page.headshot} />
            <Row className='project-pill mx-auto'>
                    <Col>
                        <div>
                            <div className='project-subtitle'>
                                Objectives
                            </div>
                            <ul className='project-text'>
                                <li>
                                    Design a hand that replicates the ranges of motion of a real hand using ten motors.
                                </li>
                                <li>
                                    Map the natural DOF of the human hand to determine which DOFs are interdependent.
                                </li>
                                <li>
                                    Construct the hand and perform strength, speed, and reliability testing.
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className='project-subtitle'>
                                Key Skills
                            </div>
                            <ul className='project-text'>
                                <li>
                                    MATLAB
                                </li>
                                <li>
                                    SolidWorks
                                </li>
                                <li>
                                    Arduino/C
                                </li>
                                <li>
                                    EAGLE
                                </li>
                                <li>
                                    3D Printing
                                </li>
                            </ul>
                        </div>
                    </Col>
            </Row>
            <Row className='project-image-row mx-auto debug'>
                <Image className="project-picture" src={data.Home_Page.headshot} />
            </Row>
            <Row className='project-image-row mx-auto debug'>
                <img className="project-picture" src={data.Home_Page.headshot} />
                <img className="project-picture" src={data.Home_Page.headshot} />
            </Row>
        </div>
    );
}

export default ProjectPage;