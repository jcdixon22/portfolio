import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function ShutterPage() {
    const project_data = projectData.shutter;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default ShutterPage;