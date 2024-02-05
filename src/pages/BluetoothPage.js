import projectData from '../project_data.json'
import ProjectPage from './ProjectPage';

function BluetoothPage() {
    const project_data = projectData.door;
    return(
        <div className='project-format'>
            <ProjectPage project={project_data}/>
        </div>
    );
}

export default BluetoothPage;