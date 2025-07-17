import { useState, useCallback } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineScene() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const onLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  const onError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
  }, []);

  return (
    <div className="h-full relative">
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-purple-500/10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-sm opacity-70">Loading 3D Scene...</p>
          </div>
        </div>
      )}
      
      {/* Error fallback */}
      {hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 flex items-center justify-center">
          <p className="text-sm opacity-50">3D Scene unavailable</p>
        </div>
      )}
      
      {/* Spline Scene */}
      <Spline 
        scene="https://prod.spline.design/FkMlRrzTJG3P5Ejp/scene.splinecode"
        onLoad={onLoad}
        onError={onError}
        style={{ 
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.5s ease-in-out'
        }}
      />
    </div>
  );
}
