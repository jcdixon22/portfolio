import { useState, useEffect, useRef, useCallback } from 'react';
import { Button } from 'react-bootstrap';
import { FaDumbbell, FaRunning } from 'react-icons/fa';
import EngineeringImageSkeleton from '../components/EngineeringImageSkeleton';
import PageWrapper from '../components/PageWrapper';
import { useNavigate } from 'react-router-dom';

// Import images
import deadliftImage from '../media/deadlift.jpg';
import princetonRunImage from '../media/princetonrun.jpg';
import runningImage1 from '../media/1.JPG';
import runningImage2 from '../media/2.jpg';
import runningImage3 from '../media/3.JPG';
import runningImage4 from '../media/4.png';
import runningImage5 from '../media/5.png';
import runningImage6 from '../media/6.jpg';
import runningImage7 from '../media/7.jpg';

function AthleticsPage() {
    const [activeTab, setActiveTab] = useState('lifting');
    const [reelIndex, setReelIndex] = useState(0);
    const [isEntering, setIsEntering] = useState(true);
    const [isExiting, setIsExiting] = useState(false);
    const [reelsLoading, setReelsLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();
    const contentRef = useRef(null);

    const liftingReels = [
        {
            id: 'CvVSzqjvpwl',
            url: 'https://www.instagram.com/reel/CvVSzqjvpwl/'
        },
        {
            id: 'CvAmznOpDqO',
            url: 'https://www.instagram.com/reel/CvAmznOpDqO/'
        },
        {
            id: 'Cuw6B9RrsRr',
            url: 'https://www.instagram.com/reel/Cuw6B9RrsRr/'
        },
        {
            id: 'CukXHKzOHbO',
            url: 'https://www.instagram.com/reel/CukXHKzOHbO/'
        },
        {
            id: 'CcaxiFSFHz7',
            url: 'https://www.instagram.com/reel/CcaxiFSFHz7/'
        },
        {
            id: 'CcQOyLflOot',
            url: 'https://www.instagram.com/reel/CcQOyLflOot/'
        },
        {
            id: 'Cbxk2bmlBV4',
            url: 'https://www.instagram.com/reel/Cbxk2bmlBV4/'
        },
        {
            id: 'Cbfley3JTFD',
            url: 'https://www.instagram.com/reel/Cbfley3JTFD/'
        }
    ];

    const runningImages = [
        runningImage1,
        runningImage2,
        runningImage3,
        runningImage4,
        runningImage5,
        runningImage6,
        runningImage7
    ];
    
    // Add window resize listener to detect mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Add event listener
        window.addEventListener('resize', checkIfMobile);
        
        // Cleanup
        return () => {
            window.removeEventListener('resize', checkIfMobile);
        };
    }, []);
    
    // Calculate visible reels based on mobile or desktop view
    const visibleReels = isMobile 
        ? liftingReels // Show all reels on mobile
        : liftingReels.slice(reelIndex, reelIndex + 3); // Paginate on desktop

    useEffect(() => {
        setIsEntering(true);
    }, []);

    // Load Instagram embed script
    useEffect(() => {
        // Load Instagram embed.js script
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.instagram.com/embed.js';
        document.body.appendChild(script);
        
        return () => {
            // Clean up on unmount
            if (script && script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);
    
    // Process Instagram embeds
    const processInstagramEmbeds = () => {
        if (window.instgrm && window.instgrm.Embeds) {
            window.instgrm.Embeds.process();
        }
    };

    // Simplified loading for direct iframes
    const loadInstagramEmbeds = useCallback(() => {
        setReelsLoading(true);
        setTimeout(() => {
            setReelsLoading(false);
            processInstagramEmbeds();
        }, 1200); // Give time for the iframes to load
    }, []);

    // Initial load
    useEffect(() => {
        loadInstagramEmbeds();
        
        // Try processing embeds after component mounts and again after a delay
        const timer1 = setTimeout(() => {
            processInstagramEmbeds();
        }, 1000);
        
        const timer2 = setTimeout(() => {
            processInstagramEmbeds();
        }, 3000);
        
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [loadInstagramEmbeds]);
    
    // Process embeds whenever visible reels change
    useEffect(() => {
        if (activeTab === 'lifting') {
            const timer = setTimeout(() => {
                processInstagramEmbeds();
            }, 500);
            
            return () => clearTimeout(timer);
        }
    }, [visibleReels, activeTab]);

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setReelIndex(0);
        if (tab === 'lifting') {
            loadInstagramEmbeds();
            // Process Instagram embeds after a short delay
            setTimeout(() => {
                processInstagramEmbeds();
            }, 1500);
        }
    };

    const handleReelNavigation = (direction) => {
        setReelsLoading(true);
        const newIndex = direction === 'next' 
            ? Math.min(reelIndex + 3, liftingReels.length - 3)
            : Math.max(reelIndex - 3, 0);
        setReelIndex(newIndex);
        
        // Simple timeout for iframe loading
        setTimeout(() => {
            setReelsLoading(false);
            processInstagramEmbeds();
        }, 1000);
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

    return (
        <PageWrapper>
            <div className={`athletics-container ${isEntering ? 'home-content-enter' : ''}`} ref={contentRef}>
                <div className='athletics-header'>
                    <div className='athletics-button-container'>
                        <Button 
                            className={`athletics-button ${activeTab === 'lifting' ? 'active' : ''}`}
                            onClick={() => handleTabChange('lifting')}
                        >
                            <FaDumbbell className="athletics-button-icon" /> USAPL Powerlifter
                        </Button>
                        <Button 
                            className={`athletics-button ${activeTab === 'running' ? 'active' : ''}`}
                            onClick={() => handleTabChange('running')}
                        >
                            <FaRunning className="athletics-button-icon" /> NCAA Division 1 Runner
                        </Button>
                    </div>

                    <p className='athletics-subtitle'>
                        {activeTab === 'lifting' 
                            ? "I competed as a 100kg natural powerlifter in the USAPL federation."
                            : "I was a D1 sprinter and decathlete at Princeton University and the University of Virginia."}
                    </p>
                </div>

                {activeTab === 'lifting' && (
                    <div className='athletics-content'>
                        <div className='athletics-row'>
                            <div className='athletics-highlights-container'>
                                <div className='athletics-highlights-content'>
                                    <div className='athletics-highlights-title'>Some highlights</div>
                                    <div className='athletics-achievements-list'>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>1</div>
                                            <p>645lb Deadlift</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>2</div>
                                            <p>550lb Squat</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>3</div>
                                            <p>305lb Bench Press</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>4</div>
                                            <p>1,500lb Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='athletics-image-container'>
                                <EngineeringImageSkeleton 
                                    src={deadliftImage} 
                                    className="athletics-image" 
                                />
                            </div>
                        </div>
                        <div className='athletics-media-row'>
                            <div className="athletics-reels-container">
                                {!isMobile && (
                                    <button 
                                        className="athletics-navigation-button left"
                                        onClick={() => handleReelNavigation('prev')}
                                        disabled={reelIndex === 0 || reelsLoading}
                                    >
                                        ←
                                    </button>
                                )}
                                <div className="athletics-reels-grid">
                                    {visibleReels.map((reel) => (
                                        <div key={reel.id} className={`athletics-reel ${reelsLoading ? 'athletics-reel-loading' : ''}`}>
                                            {reelsLoading && (
                                                <div className="athletics-reel-loader">
                                                    <div className="athletics-reel-loader-spinner"></div>
                                                    <p>Loading Instagram content...</p>
                                                </div>
                                            )}
                                            <blockquote
                                                className="instagram-media"
                                                data-instgrm-permalink={reel.url}
                                                data-instgrm-version="14"
                                                style={{
                                                    background: '#FFF',
                                                    border: 0,
                                                    borderRadius: '3px',
                                                    boxShadow: 'none',
                                                    margin: 0,
                                                    minWidth: '326px',
                                                    padding: 0,
                                                    width: '100%',
                                                    height: '100%'
                                                }}
                                            ></blockquote>
                                        </div>
                                    ))}
                                </div>
                                {!isMobile && (
                                    <button 
                                        className="athletics-navigation-button right"
                                        onClick={() => handleReelNavigation('next')}
                                        disabled={reelIndex >= liftingReels.length - 3 || reelsLoading}
                                    >
                                        →
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'running' && (
                    <div className='athletics-content'>
                        <div className='athletics-row'>
                            <div className='athletics-highlights-container'>
                                <div className='athletics-highlights-content'>
                                    <div className='athletics-highlights-title'>Some highlights</div>
                                    <div className='athletics-achievements-list'>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>1</div>
                                            <p>1x Ivy League 200m Champion</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>2</div>
                                            <p>7x Ivy League Team Champion</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>3</div>
                                            <p>10.61s 100m Dash</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>4</div>
                                            <p>6.79s 60m Dash</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>5</div>
                                            <p>21.66s 200m (Indoor)</p>
                                        </div>
                                        <div className='athletics-achievement-item'>
                                            <div className='athletics-achievement-number'>6</div>
                                            <p>6,439 Decathlon Points</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='athletics-image-container'>
                                <EngineeringImageSkeleton 
                                    src={princetonRunImage} 
                                    className="athletics-image" 
                                />
                            </div>
                        </div>
                        <div className='athletics-media-row'>
                            <div className="athletics-video-container">
                                <p className="athletics-video-title">Here's one of my last races at Princeton.</p>
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.youtube.com/embed/4Tn04uMDyA8"
                                        title="Track & Field Highlights"
                                        allowFullScreen
                                        frameBorder="0"
                                    />
                                </div>
                            </div>
                            <div className="athletics-track-images">
                                {runningImages.map((image, index) => (
                                    <div key={index} className="athletics-gallery-item">
                                        <EngineeringImageSkeleton 
                                            src={image} 
                                            className="athletics-track-image" 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </PageWrapper>
    );
}

export default AthleticsPage;