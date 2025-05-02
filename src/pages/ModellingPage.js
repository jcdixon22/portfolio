import modelData from '../model_data.json'
import { Row } from 'react-bootstrap';
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

import newport from '../model_images/newport.jpg';
import nyc from '../model_images/nyc.jpg';
import palo_alto_1 from '../model_images/palo_alto_1.jpg';
import palo_alto_2 from '../model_images/palo_alto_2.jpg';
import palo_alto_3 from '../model_images/palo_alto_3.jpg';
import palo_alto_4 from '../model_images/palo_alto_4.jpg';
import palo_alto_5 from '../model_images/palo_alto_5.jpg';
import palo_alto_6 from '../model_images/palo_alto_6.jpg';
import sutro_1 from '../model_images/sutro_1.jpg';
import sutro_2 from '../model_images/sutro_2.jpg';
import sutro_3 from '../model_images/sutro_3.jpg';
import tel_aviv from '../model_images/tel_aviv.jpg';
import spain from '../model_images/spain.png';
import running from '../model_images/running_1.png';
import surfing from '../model_images/surfing.png';
import new_palo from '../model_images/new_palo.jpg';
import fitness_1 from '../model_images/fitness_1.jpg';
import fitness_2 from '../model_images/fitness_2.jpg';
import fitness_3 from '../model_images/fitness_3.jpg';
// import spain2 from '../model_images/full profile.jpg';

function ModellingPage() {
    const [imagesLoaded, setImagesLoaded] = useState({});
    const [isEntering, setIsEntering] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();
    const contentRef = useRef(null);

    useEffect(() => {
        setIsEntering(true);
    }, []);

    const handleImageLoad = (id) => {
        setImagesLoaded(prev => ({...prev, [id]: true}));
    };

    const handleBackClick = () => {
        if (isExiting) return;
        
        setIsExiting(true);
        const content = contentRef.current;
        
        // Force a reflow by getting the computed style
        const computedStyle = window.getComputedStyle(content);
        const opacity = computedStyle.opacity;
        
        // Add the exit animation class
        content.classList.add('home-content-exit');
        
        // Wait for the animation to complete before navigating
        setTimeout(() => {
            navigate('/');
        }, 500);
    };

    const modelImages = [
        { id: 'new_palo', src: new_palo },
        { id: 'fitness_1', src: fitness_1 },
        { id: 'fitness_2', src: fitness_2 },
        { id: 'palo_alto_3', src: palo_alto_3 },
        { id: 'surfing', src: surfing },
        { id: 'nyc', src: nyc },
        { id: 'newport', src: newport },
        { id: 'sutro_1', src: sutro_1 },
        { id: 'sutro_2', src: sutro_2 },
        { id: 'fitness_3', src: fitness_3 },
        { id: 'tel_aviv', src: tel_aviv }
    ];

    return (
        <PageWrapper>
            <div className={`model-format ${isEntering ? 'home-content-enter' : ''}`} ref={contentRef}>
                <a href="https://www.raeagency.com/men/justice-dixon" target="_blank" rel="noopener noreferrer">
                    <button className="agency-portfolio-button">
                        View agency portfolio
                    </button>
                </a>
                <Row className='model-row mx-auto'>
                    {modelImages.map(({ id, src }) => (
                        <div key={id} className="model-image-container">
                            {!imagesLoaded[id] && <div className="model-loading-animation" />}
                            <img 
                                className={`model-image mx-auto ${imagesLoaded[id] ? 'image-loaded' : 'image-loading'}`}
                                src={src} 
                                alt={id}
                                loading="lazy"
                                onLoad={() => handleImageLoad(id)}
                            />
                        </div>
                    ))}
                </Row>
                
                <hr className='model-line' />
                <b>Height: </b> 6' 1.5"&nbsp;&nbsp;&nbsp;
                <b>Hair: </b> Dark Brown&nbsp;&nbsp;&nbsp;
                <b>Eyes: </b> Brown&nbsp;&nbsp;&nbsp;
                <b>Chest: </b> 44"&nbsp;&nbsp;&nbsp;
                <b>Waist: </b> 35"&nbsp;&nbsp;&nbsp;
                <b>Inseam: </b> 32"&nbsp;&nbsp;&nbsp;
                <b>Shoe: </b> 13
            </div>
        </PageWrapper>
    );
}

export default ModellingPage;