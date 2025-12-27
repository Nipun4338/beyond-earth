import React, { useState, useEffect } from "react";
import "./SpaceshipLoader.css";

function SpaceshipLoader() {
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [velocity, setVelocity] = useState({ x: 2, y: 1 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        let newX = prev.x + velocity.x;
        let newY = prev.y + velocity.y;
        let newVelX = velocity.x;
        let newVelY = velocity.y;

        // Bounce off edges
        if (newX <= 0 || newX >= 90) {
          newVelX = -velocity.x;
          newX = Math.max(0, Math.min(90, newX));
        }
        if (newY <= 0 || newY >= 90) {
          newVelY = -velocity.y;
          newY = Math.max(0, Math.min(90, newY));
        }

        if (newVelX !== velocity.x || newVelY !== velocity.y) {
          setVelocity({ x: newVelX, y: newVelY });
        }

        return { x: newX, y: newY };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [velocity]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({
      x: Math.max(0, Math.min(90, x)),
      y: Math.max(0, Math.min(90, y)),
    });
  };

  return (
    <div className="spaceship-loader-container" onMouseMove={handleMouseMove}>
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      <div
        className="spaceship"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: `translate(-50%, -50%) rotate(${
            Math.atan2(velocity.y, velocity.x) * (180 / Math.PI)
          }deg)`,
        }}
      >
        <div className="spaceship-body">
          <div className="cockpit"></div>
          <div className="wing wing-left"></div>
          <div className="wing wing-right"></div>
          <div className="engine"></div>
          <div className="flame"></div>
        </div>
      </div>

      <div className="loading-text">
        <h2>Launching Beyond Earth...</h2>
        <p>Move your mouse to control the spaceship!</p>
      </div>
    </div>
  );
}

export default SpaceshipLoader;
