import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function BikePage() {
    const project_data = projectData.bike;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default BikePage;