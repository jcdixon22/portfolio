import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
  Marker
} from "react-simple-maps";
import { MdLocationPin } from 'react-icons/md';
import { IoMdClose } from 'react-icons/io';
import PageWrapper from '../components/PageWrapper';
import EngineeringImageSkeleton from '../components/EngineeringImageSkeleton';

// Import travel data
import travelData from '../travel_data.json';

// The geoUrl for the world map
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function TravelPage() {
    // State for tracking selected location
    const [selectedLocation, setSelectedLocation] = useState(null);
    const [mapPosition, setMapPosition] = useState({ coordinates: [0, 0], zoom: 1 });
    const [showImagePopup, setShowImagePopup] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    
    // Convert travel data object to array
    const locations = Object.keys(travelData).map(key => ({
        id: key,
        ...travelData[key],
        coordinates: [parseFloat(travelData[key].longitude), parseFloat(travelData[key].latitude)]
    }));

    // Handle location selection
    const handleLocationClick = (location) => {
        setSelectedLocation(location.id === selectedLocation ? null : location.id);
        setMapPosition({
            coordinates: [parseFloat(location.longitude), parseFloat(location.latitude)],
            zoom: 4
        });
    };

    // Handle map reset
    const handleMapReset = () => {
        setMapPosition({ coordinates: [0, 0], zoom: 1 });
        setSelectedLocation(null);
    };

    // Handle image click for popup
    const handleImageClick = (imageSrc) => {
        setSelectedImage(imageSrc);
        setShowImagePopup(true);
    };

    // Close image popup
    const closeImagePopup = () => {
        setShowImagePopup(false);
        setSelectedImage('');
    };

    return (
        <PageWrapper>
            <div className="travel-container">
                <div className="travel-header">
                    <h1 className="travel-title">My Travel Adventures</h1>
                    <p className="travel-subtitle">Explore the places I've visited around the world</p>
                </div>

                <div className="travel-map-section">
                    <div className="travel-map-container">
                        <ComposableMap projection="geoMercator" className="travel-map">
                            <ZoomableGroup 
                                center={mapPosition.coordinates}
                                zoom={mapPosition.zoom}
                                onMoveEnd={({ coordinates, zoom }) => setMapPosition({ coordinates, zoom })}
                            >
                                <Geographies geography={geoUrl}>
                                    {({ geographies }) =>
                                        geographies.map((geo) => (
                                            <Geography 
                                                key={geo.rsmKey} 
                                                geography={geo} 
                                                className="travel-world-map"
                                            />
                                        ))
                                    }
                                </Geographies>

                                {locations.map((location) => {
                                    // Calculate pin size based on zoom level (inverted - smaller when zoomed in)
                                    const baseSize = 20;
                                    const minSize = 8;
                                    const maxSize = 32;
                                    const pinSize = Math.max(minSize, Math.min(maxSize, baseSize / mapPosition.zoom));
                                    
                                    return (
                                        <Marker 
                                            key={location.id} 
                                            coordinates={location.coordinates}
                                            onClick={() => handleLocationClick(location)}
                                        >
                                            <g
                                                transform={`translate(-${pinSize/2}, -${pinSize})`}
                                                className="travel-marker-container"
                                            >
                                                <MdLocationPin 
                                                    className={`travel-marker ${selectedLocation === location.id ? 'active' : ''}`}
                                                    size={pinSize}
                                                />
                                                <text 
                                                    textAnchor="middle"
                                                    y={-10}
                                                    className={`travel-tooltip ${selectedLocation === location.id ? 'visible' : ''}`}
                                                    style={{ 
                                                        fontSize: `${Math.max(8, Math.min(14, 12 / mapPosition.zoom))}px`,
                                                        fill: "var(--textCol1)"
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
                        <button className="travel-reset-button" onClick={handleMapReset}>
                            Reset Map
                        </button>
                    </div>
                </div>

                <div className="travel-content">
                    {selectedLocation ? (
                        <div className="travel-location-details">
                            <h2 className="travel-location-title">
                                {travelData[selectedLocation].location}
                            </h2>
                            
                            {travelData[selectedLocation].images && travelData[selectedLocation].images.length > 0 ? (
                                <div className="travel-image-grid">
                                    {travelData[selectedLocation].images.map((image, index) => (
                                        <div 
                                            key={index} 
                                            className="travel-gallery-item"
                                            onClick={() => handleImageClick(image)}
                                        >
                                            <EngineeringImageSkeleton 
                                                src={image} 
                                                className="travel-gallery-image" 
                                            />
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="travel-no-images">
                                    <p>No images available for this location yet.</p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="travel-prompt">
                            <p>Click on a location pin on the map to view details and photos.</p>
                        </div>
                    )}
                </div>

                {/* Image Popup */}
                {showImagePopup && (
                    <div className="travel-image-popup">
                        <div className="travel-popup-content">
                            <button 
                                className="travel-popup-close"
                                onClick={closeImagePopup}
                            >
                                <IoMdClose size={24} />
                            </button>
                            <div className="travel-popup-image-container">
                                <img 
                                    src={selectedImage} 
                                    alt="Travel" 
                                    className="travel-popup-image"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </PageWrapper>
    );
}

export default TravelPage;