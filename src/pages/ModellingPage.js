import modelData from '../model_data.json'
import { Row } from 'react-bootstrap';
import React, { useState } from 'react';

function ModellingPage() {
    const [hoveredIndex, setHoveredIndex] = useState(null); // State to track hovered image index

    const images = Object.keys(modelData);

    return(
        <div className='model-format'>
            <Row className='model-row mx-auto'>
                {images.map((index) => (
                        <div
                            key={index}
                            className="image-container"
                        >
                            <img 
                            onMouseEnter={() => setHoveredIndex(index)} // Set hovered index on mouse enter
                            onMouseLeave={() => setHoveredIndex(null)} // Reset hovered index on mouse leave
                            className="model-image mx-auto" src={modelData[index].picture} alt={modelData[index].location} />
                            {hoveredIndex === index && ( // Show text only if hoveredIndex matches the current index
                                <div className="image-text">
                                    {modelData[index].location}<br></br>
                                    {modelData[index].date}
                                </div>
                            )}
                        </div>
                ))}
            </Row>
            <div className='model-measurements'>
                <hr className='model-line'/>
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