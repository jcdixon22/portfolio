import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function LabjackPage() {
    const project_data = projectData.labjack;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default LabjackPage;