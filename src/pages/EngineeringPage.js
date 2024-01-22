import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import arm from '../assets/arm_1.png'
import pump from '../assets/pump_1.png'
import projectData from '../project_data.json'



function EngineeringPage() {
    return(
        <div className='engineering-format debug'>
            <Row sm={1} lg={2} className='engineering-row'>
                <a className= "engineering-entry" href="/project">
                    <div className='engineering-entry-content'>
                        <img className="engineering-image" src={arm} />
                        <div className='engineering-title'>
                            Designing a Full Anthropromorphic Robotic Hand
                        </div>
                        <hr className='engineering-line'/>
                        <ul className='engineering-goals'>
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
                        <div className='engineering-skill-row'>
                            <div className='engineering-skill'>MATLAB</div>
                            <div className='engineering-skill'>SOLIDWORKS</div>
                            <div className='engineering-skill'>Arduino/C</div>
                            <div className='engineering-skill'>EAGLE</div>
                            <div className='engineering-skill'>3D Printing</div>
                        </div>
                    </div>
                </a>

                <a className= "engineering-entry" href="/projectpage">
                    <div className='engineering-entry-content'>
                        <img className="engineering-image" src={pump} />
                        <div className='engineering-title'>
                            Designing a Full Anthropromorphic Robotic Hand
                        </div>
                        <hr className='engineering-line'/>
                        <ul className='engineering-goals'>
                            <li>
                                Design a hand that replicates the ranges of motion of a real hand using ten motors.
                            </li>
                            <li>
                                Map the natural DOF of the human hand to determine which DOFs are interdependent.
                            </li>
                            <li>
                                Construct the hand and perform strength, speed, and reliability testing.
                            </li>
                            <li>
                                Construct the hand and perform strength, speed, and reliability testing.
                            </li>
                            <li>
                                Construct the hand and perform strength, speed, and reliability testing.
                            </li>
                        </ul>
                        <div className='engineering-skill-row'>
                            <div className='engineering-skill'>MATLAB</div>
                            <div className='engineering-skill'>SOLIDWORKS</div>
                            <div className='engineering-skill'>Arduino/C</div>
                            <div className='engineering-skill'>EAGLE</div>
                            <div className='engineering-skill'>3D Printing</div>
                        </div>
                    </div>
                </a>

            </Row>
        </div>
    );
}

export default EngineeringPage;