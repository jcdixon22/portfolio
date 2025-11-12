import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import projectData from '../project_data.json';
import PageWrapper from '../components/PageWrapper';

function ProjectPage() {
    const { projectId } = useParams();
    const [isEntering, setIsEntering] = useState(true);
    const navigate = useNavigate();
    
    const project = projectData[projectId];

    useEffect(() => {
        setIsEntering(true);
    }, [projectId]);

    const handleBackClick = () => {
        setIsEntering(false);
        setTimeout(() => {
            navigate('/engineering');
        }, 500);
    };

    if (!project) {
        return <PageWrapper><div className='entry-not-found'>Project not found</div></PageWrapper>;
    }

    const {title, company, skills, start_date, end_date, objectives, images} = project;

    // Function to convert GitHub blob URL to raw URL
    const getImageUrl = (url) => {
        if (!url) return '';
        return url.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    };

    // Function to convert www text to clickable links
    const convertToLinks = (text) => {
        const words = text.split(' ');
        return words.map((word, index) => {
            if (word.startsWith('www.')) {
                return (
                    <span key={index}>
                        <a href={`https://${word}`} target="_blank" rel="noopener noreferrer">
                            {word}
                        </a>
                        {' '}
                    </span>
                );
            }
            return word + ' ';
        });
    };

    return(
        <PageWrapper>
            <div className={`entry-container ${isEntering ? 'page-enter' : 'page-exit'}`}>
                <button 
                    className="entry-back-button"
                    onClick={handleBackClick}
                >
                    <IoArrowBack />
                    Back to Projects
                </button>
                <div className='entry-hero'>
                    <div className='entry-hero-content'>
                        <h1 className='entry-title'>{title}</h1>
                        <div className='entry-meta'>
                            <span className='entry-company'>{company}</span>
                            {(start_date || end_date) && (
                                <span className='entry-dates'>
                                    {start_date && end_date ? `${start_date} — ${end_date}` : start_date || end_date}
                                </span>
                            )}
                        </div>
                    </div>
                    <div className='entry-hero-image'>
                        {images[0] && (
                            <img 
                                src={getImageUrl(images[0])} 
                                alt={`${title} hero`}
                                loading="eager"
                            />
                        )}
                    </div>
                </div>

                <div className='entry-content'>
                    <div className='entry-main'>
                        <section className='entry-section'>
                            <h2 className='entry-section-title'>What happened</h2>
                            <div className='entry-objectives'>
                                {objectives.map((objective, index) => (
                                    <div 
                                        key={index}
                                        className='entry-objective'
                                    >
                                        <span className='entry-objective-number'>{index + 1}</span>
                                        <p>{convertToLinks(objective)}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className='entry-section'>
                            <h2 className='entry-section-title'>How it happened</h2>
                            <div className='entry-skills'>
                                {skills.map((skill, index) => (
                                    <span 
                                        key={index}
                                        className='entry-skill'
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    </div>

                    <div className='entry-gallery'>
                        {images.slice(1).map((image, index) => (
                            <div 
                                key={index}
                                className='entry-gallery-item'
                            >
                                <img 
                                    src={getImageUrl(image)} 
                                    alt={`${title} gallery ${index + 2}`}
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default ProjectPage;