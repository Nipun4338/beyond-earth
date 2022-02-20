import React, { useState, useEffect } from "react";
import SolarSystemCountCard from "./SolarSystemCountCard";


function SolarSystemCount(props){
    const [tempArray, setTempArray]=useState();
    const [loaded, setLoaded]=useState();

    useEffect(()=>{
      setLoaded(false);
      setTempArray(props.props);
      setLoaded(true);
    }, [props.props])
    
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

export default SolarSystemCount;