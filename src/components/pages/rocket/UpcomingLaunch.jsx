import React from "react";
import UpcomingEvent from "./UpcomingEvent";


function UpcomingLaunch(props){

    return(
        <div style={{marginTop: "70px"}}>
            <UpcomingEvent tweets={props.rocket}/>
        </div>
    );
}

export default UpcomingLaunch;