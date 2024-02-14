import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function PumpPage() {
    const project_data = projectData.pump;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default PumpPage;