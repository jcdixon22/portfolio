import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function BbagPage() {
    const project_data = projectData.bbag;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default BbagPage;