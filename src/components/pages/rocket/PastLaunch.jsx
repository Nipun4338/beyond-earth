import React from "react";
import PastEvent from "./PastEvent";


function PastLaunch(props){

    return(
        <div style={{marginTop: "70px"}}>
            <PastEvent tweets={props.rocket}/>
        </div>
    );
}

export default PastLaunch;