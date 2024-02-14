import React, { useState } from 'react';
import EngineeringLoadAnimation from './EngineeringLoadAnimation';

const EngineeringImageSkeleton = ({ src, className}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='image-wrapper'>
      {!loaded && <EngineeringLoadAnimation />}
      <img className={className}
        src={src}
        onLoad={handleImageLoad}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default EngineeringImageSkeleton;