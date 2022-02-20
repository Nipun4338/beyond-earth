import React from "react";
import { useState } from "react";
import ButtonGroupCustom from '../elements/ButtonGroupCustom';
import PlanetCard from "./PlanetCard";


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

function Planet(props){
    const [array, setArray]=useState(props.planet);
    const [tempArray, setTempArray]=useState(props.planet);
    const [loaded, setLoaded]=useState(false);

    function getButtonValue(name){
      setArray(props.planet);
      setLoaded(false);
        setTempArray((prevValue)=>{
            return array.filter((array)=>{
                const {englishName, isPlanet}=array;
                return name==='All' ? isPlanet===true : englishName===name;
            });
        });
        setLoaded(true);
      }
    
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

export default Planet;