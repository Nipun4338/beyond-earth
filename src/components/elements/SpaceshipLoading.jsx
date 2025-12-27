import * as React from "react";
import "./SpaceshipLoading.css";

function SpaceshipLoading() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="spaceship-loading-wrapper">
      <div className="spaceship-container">
        <div className="spaceship-svg">
          <svg
            width="120"
            height="120"
            viewBox="0 0 120 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Main body */}
            <ellipse
              cx="60"
              cy="60"
              rx="25"
              ry="40"
              fill="url(#bodyGradient)"
            />

            {/* Cockpit window */}
            <ellipse
              cx="60"
              cy="45"
              rx="12"
              ry="15"
              fill="url(#windowGradient)"
              opacity="0.8"
            />

            {/* Left wing */}
            <path
              d="M 40 55 Q 20 50 15 60 Q 20 70 40 65 Z"
              fill="url(#wingGradient)"
            />

            {/* Right wing */}
            <path
              d="M 80 55 Q 100 50 105 60 Q 100 70 80 65 Z"
              fill="url(#wingGradient)"
            />

            {/* Engine glow */}
            <ellipse
              cx="60"
              cy="95"
              rx="15"
              ry="8"
              fill="#ff6b35"
              opacity="0.6"
            >
              <animate
                attributeName="ry"
                values="8;12;8"
                dur="0.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;1;0.6"
                dur="0.5s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* Flame particles */}
            <circle cx="60" cy="100" r="3" fill="#ffaa00" opacity="0.8">
              <animate
                attributeName="cy"
                values="100;110;100"
                dur="0.3s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0.2;0.8"
                dur="0.3s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="55" cy="102" r="2" fill="#ff6b35" opacity="0.6">
              <animate
                attributeName="cy"
                values="102;112;102"
                dur="0.4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0.1;0.6"
                dur="0.4s"
                repeatCount="indefinite"
              />
            </circle>

            <circle cx="65" cy="102" r="2" fill="#ff6b35" opacity="0.6">
              <animate
                attributeName="cy"
                values="102;112;102"
                dur="0.35s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.6;0.1;0.6"
                dur="0.35s"
                repeatCount="indefinite"
              />
            </circle>

            {/* Gradients */}
            <defs>
              <linearGradient
                id="bodyGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#4a90e2" />
                <stop offset="100%" stopColor="#2c5aa0" />
              </linearGradient>

              <radialGradient id="windowGradient">
                <stop offset="0%" stopColor="#64c8ff" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#3296d2" stopOpacity="0.4" />
              </radialGradient>

              <linearGradient
                id="wingGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3a7bc8" />
                <stop offset="100%" stopColor="#2c5aa0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Progress ring */}
        <svg
          className="progress-ring"
          width="160"
          height="160"
          viewBox="0 0 160 160"
        >
          <circle
            className="progress-ring-circle"
            stroke="#00d4ff"
            strokeWidth="3"
            fill="transparent"
            r="65"
            cx="80"
            cy="80"
            strokeDasharray={`${progress * 4.08} 408`}
            strokeDashoffset="0"
          />
        </svg>

        <div className="loading-percentage">{progress}%</div>
      </div>

      <div className="loading-title">Launching Beyond Earth...</div>
    </div>
  );
}

export default SpaceshipLoading;
