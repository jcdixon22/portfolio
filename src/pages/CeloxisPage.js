import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function CeloxisPage() {
    const project_data = projectData.celoxis;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default CeloxisPage;