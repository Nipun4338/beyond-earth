import React, {useState, useEffect} from "react";
import Body from "./Body";
import Planet from "./Planets";
import PlanetByAge from "./PlanetByAge";
import { Routes, Route } from "react-router-dom";
import UpcomingLaunch from './rocket/UpcomingLaunch';
import CircularProgressWithLabel from "../elements/Loading";

function Fetch(){
    const [error, setError] = useState(null);
    const [apod, setApod]=useState();
    const [solar, setSolar]=useState();
    const [isLoaded1, setIsLoaded1] = useState(false);
    const [isLoaded2, setIsLoaded2] = useState(false);
    const [isLoaded3, setIsLoaded3] = useState(false);
    const [planet, setPlanet]=useState();


    useEffect(()=>{
        fetch("https://beyond-earth-server.herokuapp.com/apod")
          .then((res) => res.json())
          .then((result) => {
            setIsLoaded1(false);
            setApod(result);
            setIsLoaded1(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //setData(data);
          setIsLoaded1(true);
          setError(error);
        }
      ).catch(error => {
        //setData(data);
        setIsLoaded1(true);
      });
    }, []);
    
    
    useEffect(()=>{
      fetch("https://beyond-earth-server.herokuapp.com/known_count")
        .then((res) => res.json())
        .then((result) => {
          setIsLoaded2(false);
          setSolar(result.knowncount);
          setIsLoaded2(true);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        //setData(data);
        setIsLoaded2(true);
        setError(error);
      }
    ).catch(error => {
      //setData(data);
      setIsLoaded2(true);
    });
    }, []);


    useEffect(()=>{
        fetch("https://api.le-systeme-solaire.net/rest/bodies/")
          .then((res) => res.json())
          .then((result) => {
            //console.log(result);
            setIsLoaded3(false);
            setPlanet(result.bodies);
            setIsLoaded3(true);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //setData(data);
          setIsLoaded3(true);
          setError(error);
        }
      ).catch(error => {
        //setData(data);
        setIsLoaded3(true);
      });
    }, []);
    

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded1 || !isLoaded2 || !isLoaded3) {
        return <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}><CircularProgressWithLabel /></div>;
      }
      else{
        return (
            <Routes>
                <Route path="/" element={<Body apod={apod} solar={solar}/>} />
                <Route path="/planet" element={<Planet planet={planet}/>} />
                <Route path="/ageCalculator" element={<PlanetByAge />} />
                <Route path="/upcoming" element={<UpcomingLaunch />} />
            </Routes>
        );
      }
}

export default Fetch;