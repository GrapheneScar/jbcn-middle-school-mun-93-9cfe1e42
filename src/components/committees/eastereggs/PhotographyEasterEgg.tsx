
import { useState } from 'react';
import CameraInterface from './photography/CameraInterface';
import CameraEffects from './photography/CameraEffects';
import PhotoFrame from './photography/PhotoFrame';
import PhotographyTooltips from './photography/PhotographyTooltips';

const PhotographyEasterEgg = () => {
  const [hasCamera, setHasCamera] = useState<boolean | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  
  // Handler for camera status
  const handleCameraStatus = (hasAccess: boolean) => {
    setHasCamera(hasAccess);
  };
  
  // Handler for captured image
  const handleImageCaptured = (imageUrl: string) => {
    setCapturedImage(imageUrl);
  };
  
  // Determine which image to display in the animation
  const displayImage = capturedImage;
  
  return (
    <>
      {/* Hidden camera component that handles camera access and photo capture */}
      <CameraInterface 
        onImageCaptured={handleImageCaptured}
        onCameraStatus={handleCameraStatus}
      />
      
      {/* Visual camera effects (flash, shutter, etc.) */}
      <CameraEffects hasCamera={hasCamera} />
      
      {/* Photo frame with captured or fallback image */}
      <PhotoFrame displayImage={displayImage} />
      
      {/* Animated tooltips */}
      <PhotographyTooltips hasCamera={hasCamera} />
    </>
  );
};

export default PhotographyEasterEgg;
