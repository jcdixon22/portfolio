import React, { useState } from 'react';
import ProjectLoadAnimation from './ProjectLoadAnimation';

const ProjectImageSkeleton = ({ src, className = 'project-image', alt = ''}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div>
      {!loaded && <ProjectLoadAnimation />}
      <img
        className={className}
        src={src}
        onLoad={handleImageLoad}
        style={{ display: loaded ? 'block' : 'none' }}
        alt={alt}
      />
    </div>
  );
};

export default ProjectImageSkeleton;