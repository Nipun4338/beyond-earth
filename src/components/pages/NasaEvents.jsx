import React, { useState, useEffect } from "react";
import ButtonGroupCustom from '../elements/ButtonGroupCustom';
import event from "../event";
import NasaCard from "./NasaCard";

const radios = [
    { name: 'Drought', value: '1' },
    { name: 'Dust and Haze', value: '2' },
    { name: 'Earthquakes', value: '3' },
    { name: 'Floods', value: '4' },
    { name: 'Landslides', value: '5' },
    { name: 'Sea and Lake Ice', value: '6' },
    { name: 'Severe Storms', value: '7' },
    { name: 'Snow', value: '8' },
    { name: 'Temperature Extremes', value: '9' },
    { name: 'Volcanoes', value: '10' },
    { name: 'Water Color', value: '11' },
    { name: 'Wildfires', value: '12' },
    { name: 'All', value: '13' },
  ];

function NasaEvents(){
    const [array, setArray]=useState();
    const [tempArray, setTempArray]=useState();
    const [loaded, setLoaded]=useState(false);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    function getButtonValue(value){
        setTempArray((prevValue)=>{
            return array.filter((array)=>{
                const {categories: [{title: event_category}]}=array;
                return value==='All' ? true : event_category===value;
            });
        });
        setLoaded(true);
      }

      useEffect(()=>{
        fetch("/eonet_events")
          .then((res) => res.json())
          .then((result) => {
            //console.log(result);
            setArray(result.events);
            setTempArray(result.events);
            setIsLoaded(true);
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
        return <div>Loading...</div>;
      } else 
      {
          console.log(array);
          return "Ok";
        /*return (
            <div>
                <h3 style={{textAlign: "center", marginTop: "50px"}}>Nasa EONET Events</h3>
                <ButtonGroupCustom radios={radios} getButtonValue={getButtonValue}/>
                { loaded ? 
                    tempArray.map((prop, index)=>{
                        return (
                            <NasaCard key={index} prop={prop}/>
                        );
                    }) : "Loading..."
                }
            </div>
        );*/
    }
}

export default NasaEvents;