import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function ArmPage() {
    const project_data = projectData.arm;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default ArmPage;