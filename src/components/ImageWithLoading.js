import React, { useState } from 'react';
import LoadingAnimation from '../components/ImageLoadAnimation';

const ImageWithLoading = ({ src, className}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='image-wrapper'>
      {!loaded && <LoadingAnimation />}
      <img className={className}
        src={src}
        onLoad={handleImageLoad}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default ImageWithLoading;