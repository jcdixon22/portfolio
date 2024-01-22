import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import arm_2 from '../assets/arm_2.png';
import arm_3 from '../assets/arm_3.png';
import arm_4 from '../assets/arm_4.png';

import arm from '../assets/arm_1.png'

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
            <img className="project-image" src={arm} />
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
                <Image className="project-picture" src={arm_2} />
            </Row>
            <Row className='project-image-row mx-auto debug'>
                <img className="project-picture" src={arm_3} />
                <img className="project-picture" src={arm_4} />
            </Row>
        </div>
    );
}

export default ProjectPage;