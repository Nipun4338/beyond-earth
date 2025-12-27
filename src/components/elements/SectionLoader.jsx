import React from "react";
import "./SectionLoader.css";

function SectionLoader({ type = "default" }) {
  const loaders = {
    rover: (
      <div className="section-loader">
        <div className="rover-loader">
          <svg width="60" height="40" viewBox="0 0 60 40">
            {/* Rover body */}
            <rect x="15" y="15" width="30" height="15" fill="#4a90e2" rx="2" />
            {/* Wheels */}
            <circle cx="20" cy="32" r="4" fill="#2c5aa0">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 20 32"
                to="360 20 32"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="40" cy="32" r="4" fill="#2c5aa0">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 40 32"
                to="360 40 32"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Antenna */}
            <line
              x1="30"
              y1="15"
              x2="30"
              y2="8"
              stroke="#00d4ff"
              strokeWidth="2"
            />
            <circle cx="30" cy="8" r="2" fill="#00d4ff">
              <animate
                attributeName="opacity"
                values="1;0.3;1"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          <p>Driving on Mars...</p>
        </div>
      </div>
    ),
    astronaut: (
      <div className="section-loader">
        <div className="astronaut-loader">
          <svg width="50" height="60" viewBox="0 0 50 60">
            {/* Helmet */}
            <circle cx="25" cy="20" r="12" fill="#4a90e2" opacity="0.3" />
            <circle
              cx="25"
              cy="20"
              r="10"
              fill="none"
              stroke="#00d4ff"
              strokeWidth="2"
            />
            {/* Visor reflection */}
            <ellipse cx="22" cy="18" rx="4" ry="3" fill="#64c8ff" opacity="0.6">
              <animate
                attributeName="opacity"
                values="0.6;0.3;0.6"
                dur="2s"
                repeatCount="indefinite"
              />
            </ellipse>
            {/* Body */}
            <rect x="18" y="32" width="14" height="20" fill="#4a90e2" rx="3" />
            {/* Arms */}
            <line
              x1="18"
              y1="35"
              x2="10"
              y2="40"
              stroke="#4a90e2"
              strokeWidth="3"
            />
            <line
              x1="32"
              y1="35"
              x2="40"
              y2="40"
              stroke="#4a90e2"
              strokeWidth="3"
            />
            {/* Floating animation */}
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0,0; 0,-5; 0,0"
              dur="2s"
              repeatCount="indefinite"
            />
          </svg>
          <p>Floating in space...</p>
        </div>
      </div>
    ),
    satellite: (
      <div className="section-loader">
        <div className="satellite-loader">
          <svg width="60" height="60" viewBox="0 0 60 60">
            {/* Satellite body */}
            <rect x="25" y="25" width="10" height="10" fill="#4a90e2" />
            {/* Solar panels */}
            <rect
              x="10"
              y="27"
              width="12"
              height="6"
              fill="#00d4ff"
              opacity="0.7"
            >
              <animate
                attributeName="opacity"
                values="0.7;0.4;0.7"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </rect>
            <rect
              x="38"
              y="27"
              width="12"
              height="6"
              fill="#00d4ff"
              opacity="0.7"
            >
              <animate
                attributeName="opacity"
                values="0.7;0.4;0.7"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </rect>
            {/* Antenna */}
            <line
              x1="30"
              y1="25"
              x2="30"
              y2="15"
              stroke="#00d4ff"
              strokeWidth="2"
            />
            {/* Orbit rotation */}
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 30 30"
              to="360 30 30"
              dur="3s"
              repeatCount="indefinite"
            />
          </svg>
          <p>Receiving signals...</p>
        </div>
      </div>
    ),
    planets: (
      <div className="section-loader">
        <div className="planets-loader">
          <svg width="80" height="50" viewBox="0 0 80 50">
            {/* Sun */}
            <circle cx="15" cy="25" r="8" fill="#ffaa00">
              <animate
                attributeName="r"
                values="8;9;8"
                dur="1s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Orbiting planets */}
            <circle cx="35" cy="25" r="4" fill="#4a90e2">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 15 25"
                to="360 15 25"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="55" cy="25" r="3" fill="#00d4ff">
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 15 25"
                to="360 15 25"
                dur="3s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          <p>Loading solar system...</p>
        </div>
      </div>
    ),
    default: (
      <div className="section-loader">
        <div className="default-loader">
          <div className="spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    ),
  };

  return loaders[type] || loaders.default;
}

export default SectionLoader;
