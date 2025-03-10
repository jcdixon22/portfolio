import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProjectImageSkeleton from '../components/ProjectImageSkeleton';

function ProjectPage({project}) {
    const {title, company, skills, start_date, end_date, objectives, images} = project;

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
            <div className='project-pill mx-auto'>
                <div className="project-pill-objectives">
                    <div className='project-subtitle'>
                        Objectives
                    </div>
                    <ul className='project-text'>
                        {objectives.map((objective, index) => (
                            <li key={index}>{objective}</li>
                        ))}
                    </ul>
                </div>
                <div className="project-pill-skills">
                    <div className='project-subtitle'>
                        Key Skills
                    </div>
                    <ul className='project-text'>
                        {skills.map((skill, index) => (
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr className='project-line mx-auto'></hr>
            <Row className='project-image-row mx-auto'>
              {images.map((image, index) => (
                    <img className="project-image" key={index} src={image}/>
                ))}
            </Row>
        </div>
    );
}

export default ProjectPage;