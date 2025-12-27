import React, { useState, useEffect } from "react";
import Body from "./Body";
import Planet from "./Planets";
import PlanetByAge from "./PlanetByAge";
import { Routes, Route } from "react-router-dom";
import UpcomingLaunch from "./rocket/UpcomingLaunch";
import SpaceshipLoading from "../elements/SpaceshipLoading";
import PastLaunch from "./rocket/PastLaunch";
import Apis from "./Apis";

function Fetch() {
  // Fallback to localhost if env var is not set (e.g. before restart)
  const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:4000";
  const [error, setError] = useState(null);
  const [apod, setApod] = useState();
  const [solar, setSolar] = useState();
  const [isLoaded1, setIsLoaded1] = useState(false);
  const [isLoaded2, setIsLoaded2] = useState(false);
  const [isLoaded3, setIsLoaded3] = useState(false);
  const [isLoaded4, setIsLoaded4] = useState(false);
  const [isLoaded5, setIsLoaded5] = useState(false);
  const [planet, setPlanet] = useState();
  const [rocket, setRocket] = useState();
  const [pastRocket, setPastRocket] = useState();

  useEffect(() => {
    fetch(`${apiUrl}/apod`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded1(false);
          setApod(result);
          setIsLoaded1(true);
        },
        (error) => {
          setIsLoaded1(true);
          setError(error);
        }
      )
      .catch((error) => {
        setIsLoaded1(true);
      });
  }, []);

  useEffect(() => {
    fetch(`/known_count.json`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded2(false);
          setSolar(result.knowncount);
          setIsLoaded2(true);
        },
        (error) => {
          setIsLoaded2(true);
          setError(error);
        }
      )
      .catch((error) => {
        setIsLoaded2(true);
      });
  }, []);

  useEffect(() => {
    fetch(`${apiUrl}/bodies`)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded3(false);
          setPlanet(result.bodies);
          setIsLoaded3(true);
        },
        (error) => {
          setIsLoaded3(true);
          setError(error);
        }
      )
      .catch((error) => {
        setIsLoaded3(true);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?format=json&limit=10&mode=detailed"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded4(false);
          setRocket(result.results);
          setIsLoaded4(true);
        },
        (error) => {
          setIsLoaded4(true);
          setError(error);
        }
      )
      .catch((error) => {
        setIsLoaded4(true);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://lldev.thespacedevs.com/2.2.0/launch/previous/?format=json&limit=10&mode=detailed"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded5(false);
          setPastRocket(result.results);
          setIsLoaded5(true);
        },
        (error) => {
          setIsLoaded5(true);
          setError(error);
        }
      )
      .catch((error) => {
        setIsLoaded5(true);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (
    !isLoaded1 ||
    !isLoaded2 ||
    !isLoaded3 ||
    !isLoaded4 ||
    !isLoaded5
  ) {
    return <SpaceshipLoading />;
  } else {
    return (
      <Routes>
        <Route path="/" element={<Body apod={apod} solar={solar} />} />
        <Route path="/planet" element={<Planet planet={planet} />} />
        <Route path="/ageCalculator" element={<PlanetByAge />} />
        <Route path="/upcoming" element={<UpcomingLaunch rocket={rocket} />} />
        <Route path="/past" element={<PastLaunch rocket={pastRocket} />} />
        <Route path="/apis" element={<Apis />} />
      </Routes>
    );
  }
}

export default Fetch;
