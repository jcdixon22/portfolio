import modelData from '../model_data.json'
import { Row } from 'react-bootstrap';
import React, { useState } from 'react';

import newport from '../model_images/newport.jpg';
import nyc from '../model_images/nyc.jpg';
import palo_alto_1 from '../model_images/palo_alto_1.jpg';
import palo_alto_2 from '../model_images/palo_alto_2.jpg';
import palo_alto_3 from '../model_images/palo_alto_3.jpg';
import palo_alto_4 from '../model_images/palo_alto_4.jpg';
import palo_alto_5 from '../model_images/palo_alto_5.jpg';
import palo_alto_6 from '../model_images/palo_alto_6.jpg';
import palo_alto_7 from '../model_images/palo_alto_7.jpg';
import sutro_1 from '../model_images/sutro_1.jpg';
import sutro_2 from '../model_images/sutro_2.jpg';
import sutro_3 from '../model_images/sutro_3.jpg';
import tel_aviv from '../model_images/tel_aviv.jpg';

function ModellingPage() {
    const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered image index
    const [isTextVisible, setIsTextVisible] = useState(false); // State to track text visibility

    const images = Object.keys(modelData);

    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        setIsTextVisible(true);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        setIsTextVisible(false);
    };

    return (
        <div className='model-format'>
            <Row className='model-row mx-auto'>
                {/* {images.map((index) => (
                    <div
                        key={index}
                        className="model-image-container"
                        onMouseEnter={() => handleMouseEnter(index)} // Set hovered index on mouse enter
                        onMouseLeave={handleMouseLeave} // Reset hovered index on mouse leave
                    >
                        <img className="model-image mx-auto" src={modelData[index].picture} alt={modelData[index].location} />
                        {hoveredIndex === index && isTextVisible && ( // Show text only if hoveredIndex matches the current index and isTextVisible is true
                            <div className="model-image-text">
                                {modelData[index].location}<br></br>
                                {modelData[index].date}
                            </div>
                        )}
                    </div>
                ))} */}
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={newport}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={nyc}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={palo_alto_1}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={palo_alto_2}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={palo_alto_3}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={palo_alto_4}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={palo_alto_5}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={palo_alto_6}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={palo_alto_7}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={sutro_1}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={sutro_2}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={sutro_3}/>
                </div>
                <div className="model-image-container">
                    <img className="model-image mx-auto" src={tel_aviv}/>
                </div>


            </Row>
            <div className='model-measurements'>
                <hr className='model-line' />
                <b>Height: </b> 6' 1.5"&nbsp;&nbsp;&nbsp;
                <b>Hair: </b> Dark Brown&nbsp;&nbsp;&nbsp;
                <b>Eyes: </b> Brown&nbsp;&nbsp;&nbsp;
                <b>Chest: </b> 44"&nbsp;&nbsp;&nbsp;
                <b>Waist: </b> 35"&nbsp;&nbsp;&nbsp;
                <b>Inseam: </b> 32"&nbsp;&nbsp;&nbsp;
                <b>Shoe: </b> 13
            </div>
        </div>
    );
}

export default ModellingPage;