import modelData from '../model_data.json'
import { Row } from 'react-bootstrap';
import React, { useState } from 'react';

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
                {images.map((index) => (
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
                ))}
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