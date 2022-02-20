import React from "react";
import Nasa from "./Nasa";
import SolarSystemCount from "./SolarSystemCount";

function Body(props){
    const {media_type, title, url, explanation}=props.apod;
    return(
        <div>
            <div>
            <Nasa url={url} title={title} media_type={media_type} explanation={explanation}/> 
            <SolarSystemCount props={props.solar}/>
            </div>
        </div>
    );
}

export default Body;