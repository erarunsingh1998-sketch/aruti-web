import React, { useRef, useEffect } from 'react';

export default function Monitor({ width = "800px", className = "" }) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const renderFrame = () => {
      if (video.readyState >= 2) {
        // Sync canvas size to video aspect
        if (canvas.width !== video.videoWidth) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    video.play().catch(() => {});
    renderFrame();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={`flex flex-col items-center select-none ${className}`} style={{ width: width, maxWidth: '100%' }}>
      {/* Monitor Outer Chassis / Bezel */}
      <div className="w-full bg-slate-900 rounded-2xl p-3 md:p-4 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] border-4 border-slate-700 relative">
        
        {/* Webcam / Sensor dot */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-slate-800 border border-slate-700/50 z-20"></div>
        
        {/* Screen Display Area */}
        <div className="w-full aspect-video rounded-lg overflow-hidden bg-black relative shadow-inner">
          
          {/* Hidden off-screen video source */}
          <video 
            ref={videoRef}
            src="/StealthFeature.mp4" 
            autoPlay 
            muted 
            loop 
            playsInline 
            className="hidden" 
          />

          {/* Canvas display (Extensions won't detect this as a video) */}
          <canvas 
            ref={canvasRef} 
            className="w-full h-full object-fill pointer-events-none" 
          />
        </div>
      </div>

      {/* Monitor Neck / Stand */}
      <div className="w-12 h-6 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 shadow-md"></div>
      
      {/* Monitor Base Plate */}
      <div className="w-44 h-3 bg-slate-600 rounded-full shadow-xl border-t border-slate-500"></div>
    </div>
  );
}