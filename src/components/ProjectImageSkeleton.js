import React, { useState } from 'react';
import ProjectLoadAnimation from './ProjectLoadAnimation';

const ProjectImageSkeleton = ({ src, className}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='image-wrapper'>
      {!loaded && <ProjectLoadAnimation />}
      <img className={className}
        src={src}
        onLoad={handleImageLoad}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default ProjectImageSkeleton;