import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arm_1 from '../assets/arm_1.png'

function ProjectPage() {
    return(
        <Container className='project-format'>
            <Row>
                <div className='project-title'>
                    Designing a Fully Anthropomorphic Robotic Hand
                </div>
            </Row>
            <Row>
            <Row>
                <div className='project-subheader'>
                    <div className='project-info'>Oct-May 2020</div>
                    <div className='project-info'>   •   </div>
                    <div className='project-info'>Princeton, NJ</div>
                </div>
            </Row>
            </Row>
            <Row className='project-pill'>
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
                                Map the natural DOF of the human hand to determine which DOFs are interdependent
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
        </Container>
    );
}

export default ProjectPage;