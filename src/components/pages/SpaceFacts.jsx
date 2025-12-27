import React, { useState, useEffect } from "react";
import "./SpaceFacts.css";
import SectionLoader from "../elements/SectionLoader";

function SpaceFacts() {
  const [facts, setFacts] = useState([]);
  const [currentFact, setCurrentFact] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch dynamic space facts from multiple sources
    const fetchDynamicFacts = async () => {
      try {
        const factsArray = [];

        // Fetch NASA APOD for interesting space image fact
        const apodRes = await fetch(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY"
        );
        const apodData = await apodRes.json();
        if (apodData.title && apodData.explanation) {
          factsArray.push({
            icon: "🔭",
            title: "Today's Space Discovery",
            text: `${apodData.title}: ${apodData.explanation.substring(
              0,
              200
            )}...`,
          });
        }

        // Fetch Near-Earth Objects count
        const neoRes = await fetch(
          "https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-01-01&end_date=2024-01-02&api_key=DEMO_KEY"
        );
        const neoData = await neoRes.json();
        const neoCount = neoData.element_count || 0;
        if (neoCount > 0) {
          factsArray.push({
            icon: "☄️",
            title: "Near-Earth Objects",
            text: `NASA tracks ${neoCount.toLocaleString()} Near-Earth Objects that passed close to Earth recently. These asteroids are constantly monitored for potential impact!`,
          });
        }

        // Add curated facts with real NASA data
        factsArray.push(
          {
            icon: "🌟",
            title: "Mind-Blowing Fact",
            text: "One day on Venus is longer than one year on Venus! Venus takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
          },
          {
            icon: "🔴",
            title: "Red Planet Mystery",
            text: "Mars has the largest dust storms in the Solar System - they can last for months and cover the entire planet!",
          },
          {
            icon: "💎",
            title: "Diamond Rain",
            text: "It rains diamonds on Neptune and Uranus! Methane in their atmospheres turns into diamonds as it falls toward the core.",
          },
          {
            icon: "🌊",
            title: "Ocean Worlds",
            text: "Jupiter's moon Europa has twice as much water as all of Earth's oceans combined - beneath its icy surface!",
          },
          {
            icon: "⚡",
            title: "Jupiter's Storm",
            text: "The Great Red Spot on Jupiter is a storm that has been raging for at least 400 years and is bigger than Earth!",
          },
          {
            icon: "🌙",
            title: "Moon Facts",
            text: "Footprints on the Moon will last for millions of years because there's no wind or water to erase them!",
          }
        );

        setFacts(factsArray);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching space facts:", error);
        // Fallback to static facts
        setFacts([
          {
            icon: "🌟",
            title: "Mind-Blowing Fact",
            text: "One day on Venus is longer than one year on Venus! Venus takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
          },
          {
            icon: "🔴",
            title: "Red Planet Mystery",
            text: "Mars has the largest dust storms in the Solar System - they can last for months and cover the entire planet!",
          },
          {
            icon: "💎",
            title: "Diamond Rain",
            text: "It rains diamonds on Neptune and Uranus! Methane in their atmospheres turns into diamonds as it falls toward the core.",
          },
        ]);
        setLoading(false);
      }
    };

    fetchDynamicFacts();
  }, []);

  const nextFact = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentFact((prev) => (prev + 1) % facts.length);
      setIsFlipping(false);
    }, 300);
  };

  const prevFact = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setCurrentFact((prev) => (prev - 1 + facts.length) % facts.length);
      setIsFlipping(false);
    }, 300);
  };

  useEffect(() => {
    if (facts.length > 0) {
      const interval = setInterval(nextFact, 8000);
      return () => clearInterval(interval);
    }
  }, [facts.length]);

  if (loading) {
    return (
      <div className="space-facts-container">
        <h3
          style={{ textAlign: "center", color: "white", marginBottom: "30px" }}
        >
          🌌 Did You Know?
        </h3>
        <SectionLoader type="satellite" />
      </div>
    );
  }

  if (facts.length === 0) return null;

  const fact = facts[currentFact];

  return (
    <div className="space-facts-container">
      <h3 style={{ textAlign: "center", color: "white", marginBottom: "30px" }}>
        🌌 Did You Know?
      </h3>
      <div className={`fact-card ${isFlipping ? "flipping" : ""}`}>
        <div className="fact-icon">{fact.icon}</div>
        <h4 className="fact-title">{fact.title}</h4>
        <p className="fact-text">{fact.text}</p>

        <div className="fact-controls">
          <button onClick={prevFact} className="fact-btn">
            ← Previous
          </button>
          <div className="fact-indicator">
            {currentFact + 1} / {facts.length}
          </div>
          <button onClick={nextFact} className="fact-btn">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default SpaceFacts;
