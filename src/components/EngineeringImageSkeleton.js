import React, { useState } from 'react';
import EngineeringLoadAnimation from './EngineeringLoadAnimation';

const EngineeringImageSkeleton = ({ src, className, alt = ''}) => {
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
        alt={alt}
      />
    </div>
  );
};

export default EngineeringImageSkeleton;