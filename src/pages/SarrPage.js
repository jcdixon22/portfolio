import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function SarrPage() {
    const project_data = projectData.sarr;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default SarrPage;