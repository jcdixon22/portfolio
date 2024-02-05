import React, { useState } from 'react';
import ProjectLoadAnimation from './ProjectLoadAnimation';

const ProjectImageSkeleton = ({ src, className}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className='test'>
      {!loaded && <ProjectLoadAnimation />}
      <img className="project-image"
        src={src}
        onLoad={handleImageLoad}
        style={{ display: loaded ? 'block' : 'none' }}
      />
    </div>
  );
};

export default ProjectImageSkeleton;