
import { useRef, useState, useEffect } from 'react';
import { galleryImages } from '@/components/gallery/gallery-data';

interface CameraInterfaceProps {
  onImageCaptured: (imageUrl: string) => void;
  onCameraStatus: (hasAccess: boolean) => void;
}

const CameraInterface = ({ onImageCaptured, onCameraStatus }: CameraInterfaceProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fallbackImage, setFallbackImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Choose a random gallery image as fallback
    const randomIndex = Math.floor(Math.random() * galleryImages.length);
    const randomImage = galleryImages[randomIndex];
    setFallbackImage(randomImage?.src || '/placeholder.svg');
    
    // Request camera access
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: false 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          onCameraStatus(true);
          
          // Take photo after a short delay
          setTimeout(() => {
            takePhoto();
            
            // Stop the camera after taking photo
            setTimeout(() => {
              const tracks = stream.getTracks();
              tracks.forEach(track => track.stop());
            }, 3000);
          }, 1500);
        }
      } catch (err) {
        console.log("Camera access denied or not available:", err);
        onCameraStatus(false);
        
        // Use fallback image instead
        if (fallbackImage) {
          onImageCaptured(fallbackImage);
        }
      }
    };
    
    getCamera();
    
    return () => {
      // Cleanup camera stream when component unmounts
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, [onCameraStatus, onImageCaptured, fallbackImage]);
  
  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageDataUrl = canvas.toDataURL('image/png');
        onImageCaptured(imageDataUrl);
      }
    }
  };
  
  return (
    <div className="hidden">
      <video 
        ref={videoRef} 
        autoPlay 
        playsInline 
        muted
      />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CameraInterface;
