import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import data from "../general_data.json"
import projectData from '../project_data.json'

function PortfolioPage() {
    const {title, company, skills, start_date, end_date, objectives, images} = projectData.portfolio;

    return(
        <div className='project-format'>
            <div className='project-title'>
                {title}
            </div>
            <div className='project-subheader'>
                    <div className='project-info'>{start_date}-{end_date}</div>
                    <div className='project-info'>   •   </div>
                    <div className='project-info'>{company}</div>
                </div>
            <Row className='project-pill mx-auto'>
                    <Col>
                        <div>
                            <div className='project-subtitle'>
                                Objectives
                            </div>
                            <ul className='project-text'>
                                {objectives.map((objective, index) => (
                                    <li key={index}>{objective}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div className='project-subtitle'>
                                Key Skills
                            </div>
                            <ul className='project-text'>
                                {skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </Col>
            </Row>
            <hr className='project-line mx-auto'></hr>
            <Row className='project-image-row mx-auto'>
              {images.map((image, index) => (
                    <img className="project-image" key={index} src={image}></img>
                ))}
            </Row>
        </div>
    );
}

export default PortfolioPage;