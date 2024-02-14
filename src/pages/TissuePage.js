import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function TissuePage() {
    const project_data = projectData.tissue;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default TissuePage;