import { useState, useEffect, useMemo } from 'react';

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Initializing...');
  const [isComplete, setIsComplete] = useState(false);

  const loadingSteps = useMemo(() => [
    { text: 'Initializing...', duration: 500 },
    { text: 'Loading assets...', duration: 800 },
    { text: 'Preparing components...', duration: 600 },
    { text: 'Optimizing performance...', duration: 700 },
    { text: 'Almost ready...', duration: 400 }
  ], []);

  useEffect(() => {
    let currentStep = 0;
    let currentProgress = 0;

    const updateProgress = () => {
      if (currentStep < loadingSteps.length) {
        const step = loadingSteps[currentStep];
        setLoadingText(step.text);
        
        const stepProgress = (currentStep + 1) * (100 / loadingSteps.length);
        const progressInterval = setInterval(() => {
          currentProgress += 2;
          setProgress(Math.min(currentProgress, stepProgress));
          
          if (currentProgress >= stepProgress) {
            clearInterval(progressInterval);
            currentStep++;
            
            setTimeout(() => {
              if (currentStep < loadingSteps.length) {
                updateProgress();
              } else {
                setProgress(100);
                setLoadingText('Welcome!');
                setTimeout(() => {
                  setIsComplete(true);
                  setTimeout(() => onComplete?.(), 500);
                }, 500);
              }
            }, 200);
          }
        }, 30);
      }
    };

    updateProgress();
  }, [loadingSteps, onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-500 ${
      isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`} style={{ backgroundColor: 'var(--color-background)' }}>
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="text-4xl md:text-5xl font-bold mb-4 animate-pulse" style={{ color: 'var(--color-heading)' }}>
            𝓡𝓔
          </div>
          <div className="h-1 w-20 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Loading Animation */}
        <div className="mb-8">
          <div className="relative w-24 h-24 mx-auto mb-6">
            {/* Outer ring */}
            <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
            
            {/* Progress ring */}
            <svg className="absolute inset-0 w-24 h-24 transform -rotate-90" viewBox="0 0 24 24">
              <circle
                cx="12"
                cy="12"
                r="10"
                fill="none"
                stroke="url(#gradient)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 10}`}
                strokeDashoffset={`${2 * Math.PI * 10 * (1 - progress / 100)}`}
                className="transition-all duration-300 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="var(--color-accent)" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#8B5CF6" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Center dot */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent)' }}></div>
            </div>
          </div>

          {/* Progress percentage */}
          <div className="text-2xl font-bold mb-2" style={{ color: 'var(--color-accent)' }}>
            {Math.round(progress)}%
          </div>
        </div>

        {/* Loading text */}
        <div className="mb-6">
          <p className="text-lg font-medium mb-2" style={{ color: 'var(--color-text)' }}>
            {loadingText}
          </p>
          
          {/* Progress bar */}
          <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'var(--color-accent)' }}></div>
          <div className="w-2 h-2 rounded-full animate-bounce animation-delay-200" style={{ backgroundColor: 'var(--color-accent)' }}></div>
          <div className="w-2 h-2 rounded-full animate-bounce animation-delay-400" style={{ backgroundColor: 'var(--color-accent)' }}></div>
        </div>

        {/* Tip text */}
        <div className="mt-8 text-sm opacity-60">
          <p>💡 Tip: This portfolio is built with React + Vite for optimal performance</p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute top-20 left-20 w-2 h-2 rounded-full opacity-30 animate-float" style={{ backgroundColor: 'var(--color-accent)' }}></div>
      <div className="absolute top-40 right-32 w-3 h-3 rounded-full opacity-20 animate-float animation-delay-1000" style={{ backgroundColor: '#3B82F6' }}></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 rounded-full opacity-25 animate-float animation-delay-2000" style={{ backgroundColor: '#8B5CF6' }}></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 rounded-full opacity-30 animate-float animation-delay-3000" style={{ backgroundColor: 'var(--color-accent)' }}></div>
    </div>
  );
}
