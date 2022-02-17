import React from "react";
import { useState, useEffect } from "react";
import ButtonGroupCustom from '../elements/ButtonGroupCustom';
import PlanetCard from "./PlanetCard";
import CircularProgressWithLabel from "../elements/Loading";


const radios = [
    { name: 'Venus', value: '1' },
    { name: 'Earth', value: '2' },
    { name: 'Saturn', value: '3' },
    { name: 'Mercury', value: '4' },
    { name: 'Mars', value: '5' },
    { name: 'Jupiter', value: '6' },
    { name: 'Neptune', value: '7' },
    { name: 'Uranus', value: '8' },
    { name: 'All', value: '9' },
  ];

function Planet(){
    const [array, setArray]=useState();
    const [tempArray, setTempArray]=useState();
    const [loaded, setLoaded]=useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    function getButtonValue(name){
        setTempArray((prevValue)=>{
            return array.filter((array)=>{
                const {englishName: englishName, isPlanet: isPlanet}=array;
                return name==='All' ? isPlanet===true : englishName===name;
            });
        });
        setLoaded(true);
      }

      useEffect(()=>{
        fetch("https://api.le-systeme-solaire.net/rest/bodies/")
          .then((res) => res.json())
          .then((result) => {
            //console.log(result);
            setLoaded(false);
            setArray(result.bodies);
            setTempArray(result.bodies);
            setIsLoaded(true);
            setLoaded(true);
            console.log(array);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          //setData(data);
          setIsLoaded(true);
          setError(error);
        }
      ).catch(error => {
        //setData(data);
        setIsLoaded(true);
      });
    }, []);
    
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}><CircularProgressWithLabel /></div>;
      } else 
      {
        return (
            <div>
                <h3 style={{textAlign: "center", marginTop: "50px"}}>Planets</h3>
                <ButtonGroupCustom radios={radios} getButtonValue={getButtonValue}/>
                { loaded ? 
                    tempArray.map((prop, index)=>{
                        return (
                            <PlanetCard key={index} prop={prop}/>
                        );
                    }) : "Loading..."
                }
            </div>
        );
    }
}

export default Planet;