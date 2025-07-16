import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function AthlecruitPage() {
    const project_data = projectData.athletecruit;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default AthlecruitPage;

