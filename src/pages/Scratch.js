
import Row from 'react-bootstrap/Row';

import mock from '../assets/mock.jpg'

import projectData from '../project_data.json'

const ProjectComponent = ({project}) => {
    const {title, skills, start_date, end_date, objectives, cover_image} = project;

    return (
        <a className= "engineering-entry" href="/project">
            <div className='engineering-entry-content'>
                <img className="engineering-image" src={project.cover_image} />
                <div className='engineering-title'>
                    {title}
                </div>
                <hr className='engineering-line'/>
                <ul className='engineering-goals'>
                    {objectives.map((objective, index) => (
                        <li key={index}>{objective}</li>
                    ))}
                </ul>
                <div className='engineering-skill-row'>
                    {skills.map((skill, index) => (
                        <div key={index} className='engineering-skill'>{skill}</div>
                    ))}
                </div>
            </div>
        </a>
    );
};

function Scratch() {
    const projectKeys = Object.keys(projectData);

    return(
        <div className='engineering-format debug'>
            <Row sm={1} lg={2} className='engineering-row'>
                {projectKeys.map((projectKey) => (
                    <ProjectComponent key={projectKey} project={projectData[projectKey]} />
                ))}
            </Row>
        </div>
    );
}

export default Scratch;