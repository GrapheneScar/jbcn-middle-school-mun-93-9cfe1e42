
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useEffect, useRef, useState } from 'react';
import { galleryImages } from '@/components/gallery/gallery-data';

const PhotographyEasterEgg = () => {
  const isMobile = useIsMobile();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasCamera, setHasCamera] = useState<boolean | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [fallbackImage, setFallbackImage] = useState<string | null>(null);
  
  useEffect(() => {
    // Choose a random gallery image as fallback
    const randomIndex = Math.floor(Math.random() * galleryImages.length);
    const randomImage = galleryImages[randomIndex];
    setFallbackImage(randomImage?.src || '/lovable-uploads/gallery-1.jpg');
    
    // Request camera access
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ 
          video: true, 
          audio: false 
        });
        
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setHasCamera(true);
          
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
        setHasCamera(false);
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
  }, []);
  
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
        setCapturedImage(imageDataUrl);
      }
    }
  };
  
  // Determine which image to display in the animation
  const displayImage = capturedImage || fallbackImage;
  
  return (
    <>
      {/* Hidden video element for camera feed */}
      <div className="hidden">
        <video 
          ref={videoRef} 
          autoPlay 
          playsInline 
          muted
        />
        <canvas ref={canvasRef} />
      </div>
      
      {/* Camera flash effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          backgroundColor: ["rgba(255,255,255,0)", "rgba(255,255,255,1)", "rgba(255,255,255,0)"]
        }}
        transition={{ duration: 0.5, times: [0, 0.1, 1], ease: "easeOut" }}
        className="fixed inset-0"
      />
      
      {/* Camera shutter animation */}
      <motion.div className="fixed inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="relative h-screen w-screen overflow-hidden"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="absolute inset-0 bg-black"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: [0, 1, 1, 0] }}
            transition={{ 
              duration: 1.2, 
              times: [0, 0.2, 0.8, 1],
              delay: 0.5,
              ease: "easeInOut"
            }}
            style={{ transformOrigin: "center" }}
          />
        </motion.div>
        
        {/* Photo frame snapshot effects */}
        <div className="fixed inset-0 flex items-center justify-center">
          <motion.div 
            className="w-full max-w-3xl aspect-video border-[20px] border-white shadow-2xl relative overflow-hidden"
            initial={{ scale: 0, rotate: -5 }}
            animate={{ scale: [0, 1], rotate: [-5, 0] }}
            transition={{ 
              duration: 0.8, 
              delay: 1.5,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="absolute inset-0 bg-gray-200"
              animate={{ opacity: [1, 0] }}
              transition={{ delay: 2, duration: 0.5 }}
            />
            
            <motion.div 
              className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 mix-blend-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2, duration: 0.5 }}
            />
            
            {displayImage && (
              <img 
                src={displayImage} 
                alt="Captured" 
                className="w-full h-full object-cover transition-opacity duration-300 opacity-0"
                onError={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                onLoad={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              />
            )}
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center text-2xl text-white font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 2.2, duration: 1.5 }}
            >
              <span className="bg-black/50 px-4 py-2 rounded-md backdrop-blur-sm">
                JBCN MUN 2025
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
      
      {/* Camera icon and sound visualization */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1] }}
        transition={{ ease: "easeOut", delay: 0.7 }}
        className="relative"
      >
        <motion.div
          className="bg-black/70 p-8 rounded-full"
          animate={{ 
            boxShadow: [
              "0 0 0 rgba(255,255,255,0.5)", 
              "0 0 30px rgba(255,255,255,0.3)", 
              "0 0 0 rgba(255,255,255,0.5)"
            ]
          }}
          transition={{ 
            duration: 2,
            ease: "easeInOut"
          }}
        >
          <Camera className="text-white h-20 w-20" />
        </motion.div>
        
        {/* Sound wave visualization around camera */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: [0, 0.5, 0], scale: [1, 1.5 + i * 0.3] }}
            transition={{ 
              duration: 1.5,
              delay: 0.8 + i * 0.2,
              ease: "easeOut"
            }}
            className="absolute inset-0 border-2 border-white/20 rounded-full z-0"
            style={{
              boxShadow: "0 0 10px rgba(255,255,255,0.1)"
            }}
          />
        ))}
      </motion.div>

      {/* Photography tooltip popups */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs md:text-sm"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [-10, -30],
            scale: [0.9, 1, 1, 0.9],
            x: [-20 + i * 10, -10 + i * 5]
          }}
          transition={{ 
            duration: 3,
            delay: 2 + i * 0.7,
            ease: "easeInOut"
          }}
          style={{
            bottom: `${30 + Math.random() * 20}%`,
            left: `${10 + (i * 20)}%`,
          }}
        >
          {[
            hasCamera ? "Perfect shot captured!" : "Gallery image loaded!",
            "ISO 100 • f/2.8 • 1/125s",
            hasCamera ? "Great lighting conditions!" : "Photo mode activated!",
            "MUN moments preserved forever!"
          ][i]}
        </motion.div>
      ))}
      
      {/* Camera access status */}
      {hasCamera === false && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm"
        >
          Using gallery image (camera access denied)
        </motion.div>
      )}
    </>
  );
};

export default PhotographyEasterEgg;
