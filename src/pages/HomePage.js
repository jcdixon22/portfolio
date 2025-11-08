import { IoIosPin } from 'react-icons/io';
import { FaRobot, FaHandsHelping, FaMicrochip, FaStethoscope, FaHeartbeat, FaIndustry, FaBullhorn, FaPenFancy, FaUserTie, FaCogs, FaCode } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import deadliftImage from '../media/deadlift.jpg';
import fitnessImage from '../model_images/fitness_1.jpg';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import { MdLocationPin } from 'react-icons/md';
import PageWrapper from '../components/PageWrapper';
import travelData from '../travel_data.json';

function HomePage() {
    const [isEntering, setIsEntering] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [hoveredLocation, setHoveredLocation] = useState(null);
    const [mapZoom, setMapZoom] = useState(1.6);
    const navigate = useNavigate();
    const contentRef = useRef(null);
    
    // Process travel data for the map
    const locations = Object.keys(travelData).map(key => ({
        id: key,
        ...travelData[key],
        coordinates: [parseFloat(travelData[key].longitude), parseFloat(travelData[key].latitude)]
    }));
    
    // Count cities by type
    const liveCount = locations.filter(loc => loc.type === 'live').length;
    const visitCount = locations.filter(loc => loc.type === 'visit').length;

    useEffect(() => {
        setIsEntering(true);
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

    const explorationAreas = [
        { icon: FaCode, text: 'Full-stack' },
        { icon: FaRobot, text: 'Robotics' },
        { icon: FaHandsHelping, text: 'Non-profits' },
        { icon: FaMicrochip, text: 'Electronics' },
        { icon: FaStethoscope, text: 'Medical Devices' },
        { icon: FaHeartbeat, text: 'Health Tech' },
        { icon: FaIndustry, text: 'Manufacturing' },
        { icon: FaBullhorn, text: 'Marketing' },
        { icon: FaPenFancy, text: 'Content Creation' },
        { icon: FaUserTie, text: 'Consulting' },
        { icon: FaCogs, text: 'Product Management' }
    ];

    return(
        <PageWrapper isHomePage={true}>
            <div className={`home-format ${isEntering ? 'home-content-enter' : ''}`} ref={contentRef}>
                <div className='home-hero'>
                    <h1 className='home-header'>Justice Dixon</h1>
                    <p className='home-current-work'>
                        Right now, I'm building a fintech startup in
                    </p>
                    <div className='home-location-line'>
                        <img src="/assets/sf.png" alt="San Francisco" className='home-sf-logo' />
                        <div className='home-location-text-group'>
                            <IoIosPin className='home-location-icon' />
                            <span>San Francisco</span>
                        </div>
                    </div>
                    <p className='home-current-work'>
                        Check out what else I've been up to:
                    </p>
                    
                    <div className='home-cards-container'>
                        <div className='home-card' onClick={() => handleButtonClick('/engineering')}>
                            <img src="/assets/athletecruit_3.png" alt="Engineering" className='home-card-image' />
                            <div className='home-card-content'>
                                Engineering
                            </div>
                        </div>
                        <div className='home-card' onClick={() => handleButtonClick('/sports')}>
                            <img src={deadliftImage} alt="Sports" className='home-card-image' />
                            <div className='home-card-content'>
                                Sports
                            </div>
                        </div>
                        <div className='home-card' onClick={() => handleButtonClick('/modeling')}>
                            <img src={fitnessImage} alt="Modeling" className='home-card-image' />
                            <div className='home-card-content'>
                                Modeling
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-section'>
                    <h2 className='section-header'>Before that,</h2>
                    <p className='text-body'>
                        I explored a ton of different spaces
                    </p>
                    <div className='exploration-grid'>
                        {explorationAreas.map((area, index) => {
                            const IconComponent = area.icon;
                            return (
                                <div key={index} className='exploration-item'>
                                    <IconComponent className='exploration-icon' />
                                    <span className='exploration-text'>{area.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className='home-section'>
                    <h2 className='section-header'>and before that,</h2>
                    <div className='education-section'>
                        <p className='education-text'>
                            I studied Mechanical Engineering at 
                            <img src="/assets/princeton.png" alt="Princeton" className='education-logo' />
                            <span className='text-orange'><strong>Princeton</strong></span> and Business at 
                            <img src="/assets/uva.png" alt="University of Virginia" className='education-logo' />
                            <span className='text-orange'><strong>Virginia</strong></span>.
                        </p>
                        
                        <div className='education-projects-row'>
                            <div className='education-projects-text'>
                                <p className='education-text'>
                                    I built a ton of <a href="/engineering" className='text-highlight'><strong>neat stuff</strong></a> in college.
                                </p>
                            </div>
                            <div className='education-projects-image'>
                                <img src="/assets/infield_1.png" alt="Engineering project" className='education-projects-img' />
                            </div>
                        </div>
                        
                        <div className='education-athletics-row'>
                            <div className='education-athletics-text'>
                                <p className='education-text'>
                                    I also was a <a href="/sports" className='text-highlight'><strong>Division 1 sprinter</strong></a> at both schools.
                                </p>
                            </div>
                            <div className='education-athletics-image'>
                                <img src="/assets/princetonrun.jpg" alt="Princeton running" className='education-athletics-img' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='home-section'>
                    <h2 className='section-header'>and along the way,</h2>
                    <div className='travel-stats'>
                        <p className='travel-stats-text'>
                            I've <span className='travel-number travel-number-primary'>lived in {liveCount} different cities</span>, and <span className='travel-number travel-number-secondary'>visited over {visitCount} others</span>.
                        </p>
                    </div>
                    
                    <div className='home-travel-map-container'>
                        <ComposableMap 
                            projection="geoMercator" 
                            className="home-travel-map"
                            style={{ backgroundColor: 'var(--backgroundCol)' }}
                        >
                            <ZoomableGroup 
                                center={[0, 30]} 
                                zoom={1.6}
                                onMoveEnd={({ zoom }) => setMapZoom(zoom)}
                            >
                                <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography 
                                                key={geo.rsmKey} 
                                                geography={geo} 
                                                className="home-travel-world-map"
                                            />
                                        ))
                                    }
                                </Geographies>

                                {locations.map((location) => {
                                    // Calculate pin size based on zoom level (inverted - smaller when zoomed in)
                                    const baseSize = 24;
                                    const minSize = 10;
                                    const maxSize = 36;
                                    const pinSize = Math.max(minSize, Math.min(maxSize, baseSize / mapZoom));
                                    
                                    return (
                                        <Marker 
                                            key={location.id} 
                                            coordinates={location.coordinates}
                                        >
                                            <g 
                                                transform={`translate(-${pinSize/2}, -${pinSize})`}
                                                onMouseEnter={() => setHoveredLocation(location)}
                                                onMouseLeave={() => setHoveredLocation(null)}
                                            >
                                                <MdLocationPin 
                                                    className={`home-travel-marker ${location.type === 'live' ? 'home-travel-marker-live' : 'home-travel-marker-visit'}`}
                                                    size={pinSize}
                                                />
                                                <text 
                                                    textAnchor="middle"
                                                    y={-10}
                                                    className={`home-travel-tooltip ${hoveredLocation && hoveredLocation.id === location.id ? 'visible' : ''}`}
                                                    style={{
                                                        fontSize: `${Math.max(8, Math.min(12, 12 / mapZoom))}px`
                                                    }}
                                                >
                                                    {location.location}
                                                </text>
                                            </g>
                                        </Marker>
                                    );
                                })}
                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default HomePage;