import PageWrapper from '../components/PageWrapper';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import projectData from '../project_data.json'

const ProjectComponent = ({project, onProjectClick}) => {
    const {title, skills, cover_image, address} = project;
    const [imageError, setImageError] = useState(false);

    return (
        <a 
            className="project-entry" 
            href={address}
            onClick={(e) => {
                e.preventDefault();
                onProjectClick(address);
            }}
        >
            <div className="project-entry-image-container">
                {!imageError ? (
                    <img 
                        className="project-entry-image" 
                        src={cover_image} 
                        alt={title}
                        loading="lazy"
                        onError={(e) => {
                            // Try to load from local assets if GitHub URL fails
                            const localPath = `/assets/${cover_image.split('/').pop().split('?')[0]}`;
                            console.log(`Trying local path: ${localPath}`);
                            
                            // If the original path already starts with /assets, don't retry
                            if (!cover_image.startsWith('/assets/')) {
                                e.target.src = localPath;
                            } else {
                                setImageError(true);
                            }
                        }}
                    />
                ) : (
                    <div className="project-entry-image-placeholder">
                        <div>{title}</div>
                    </div>
                )}
            </div>
            <div className="project-entry-content">
                <h3 className="project-entry-title">{title}</h3>
                <div className="project-entry-skills">
                    {skills.map((skill, index) => (
                        <span key={index} className="project-entry-skill">{skill}</span>
                    ))}
                </div>
            </div>
        </a>
    );
};

function EngineeringPage() {
    const [isEntering, setIsEntering] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();
    const contentRef = useRef(null);

    useEffect(() => {
        setIsEntering(true);
    }, []);

    const handleProjectClick = (address) => {
        if (isExiting) return;
        
        setIsExiting(true);
        const content = contentRef.current;
        
        // Add the exit animation class
        content.classList.add('home-content-exit');
        
        // Wait for the animation to complete before navigating
        setTimeout(() => {
            navigate(address);
        }, 500);
    };

    return (
        <PageWrapper>
            <div className={`project-entries-grid ${isEntering ? 'home-content-enter' : ''}`} ref={contentRef}>
                {Object.values(projectData).map((project, index) => (
                    <ProjectComponent 
                        key={index} 
                        project={project} 
                        onProjectClick={handleProjectClick}
                    />
                ))}
            </div>
        </PageWrapper>
    );
}

export default EngineeringPage;