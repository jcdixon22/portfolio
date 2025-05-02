import { Button } from 'react-bootstrap';
import { LuCodeXml } from 'react-icons/lu';
import { IoTrophyOutline } from 'react-icons/io5';
import { IoCameraOutline } from 'react-icons/io5';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

import data from "../general_data.json"

function HomePage() {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [isEntering, setIsEntering] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const navigate = useNavigate();
    const contentRef = useRef(null);

    useEffect(() => {
        setIsEntering(true);
    }, []);

    useEffect(() => {
        const img = new Image();
        img.src = data.Home_Page.headshot;
        img.onload = () => {
            console.log('Image loaded');
            setImageLoaded(true);
        };
        img.onerror = () => {
            console.error('Error loading image');
            setImageLoaded(true);
        };
    }, []);

    const handleButtonClick = (path) => {
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
            navigate(path);
        }, 500);
    };

    return(
        <PageWrapper isHomePage={true}>
            <div className={`home-format ${isEntering ? 'home-content-enter' : ''}`} ref={contentRef}>
                <div className='home-hero'>
                    <div className='home-image-container'>
                        {!imageLoaded ? (
                            <div className='home-loading' />
                        ) : (
                            <img 
                                className="home-picture" 
                                src={data.Home_Page.headshot} 
                                alt="Justice Dixon"
                            />
                        )}
                    </div>
                    <div className='home-intro'>
                        <h1 className='home-title'>
                            Justice is a <span className='text-highlight'>product manager</span>, <span className='text-highlight'>founder</span>, <span className='text-highlight'>model</span>, and <span className='text-highlight'>athlete</span> in San Francisco.
                        </h1>
                    </div>
                </div>
                
                <div className='home-content'>
                    <div className='home-bio'>
                        <p className='text-body'>
                            Previously, he was a <span className='text-highlight'>Robotics Engineer and Consultant</span> at <span className='text-highlight'>PA Consulting</span>, and a <span className='text-highlight'>Medical Device Engineer</span> at <span className='text-highlight'>Terumo</span> and <span className='text-highlight'>Johnson & Johnson</span>.
                        </p>
                        <p className='text-body'>
                            He studied <span className='text-highlight'>Mechanical & Aerospace Engineering</span> at <span className='text-highlight'>Princeton University</span>, and went to <span className='text-highlight'>Business School</span> at the <span className='text-highlight'>University of Virginia</span>.
                        </p>
                    </div>
                    
                    <div className='home-cta'>
                        <div className='home-buttons-container'>
                            <Button className='home-button' onClick={() => handleButtonClick('/engineering')}>
                                <LuCodeXml />
                                Engineering
                            </Button>
                            <Button className='home-button' onClick={() => handleButtonClick('/sports')}>
                                <IoTrophyOutline />
                                Sports
                            </Button>
                            <Button className='home-button' onClick={() => handleButtonClick('/modeling')}>
                                <IoCameraOutline />
                                Modeling
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default HomePage;