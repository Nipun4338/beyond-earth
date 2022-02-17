import React, { useState, useEffect } from "react";
import SolarSystemCountCard from "./SolarSystemCountCard";


function SolarSystemCount(){
    const [tempArray, setTempArray]=useState();
    const [loaded, setLoaded]=useState(null);
    const [error, setError] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

      useEffect(()=>{
        fetch("https://beyond-earth-server.herokuapp.com/known_count")
          .then((res) => res.json())
          .then((result) => {
            setLoaded(false);
            setTempArray(result.knowncount);
            setIsLoaded(true);
            setLoaded(true);
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
        return (
            <div>
                <h3 style={{textAlign: "center", marginTop: "50px"}}>Solar System Info</h3>
                { loaded ? 
                    tempArray.map((prop, index)=>{
                        return (
                            <SolarSystemCountCard key={index} prop={prop}/>
                        );
                    }) : "Loading..."
                }
            </div>
        );
    }
}

export default SolarSystemCount;