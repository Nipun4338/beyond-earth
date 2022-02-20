import React, {useState, useEffect} from "react";
import CircularProgressWithLabel from "../../elements/Loading";
import UpcomingEvent from "./UpcomingEvent";


function UpcomingLaunch(){
    const [error, setError] = useState(null);
    const [data, setData]=useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
    fetch("https://spacelaunchnow.me/api/3.5.0/launch/upcoming/?format=json&limit=100")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(false);
        setData(result.results);
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
    return <div style={{
      position: 'absolute', left: '50%', top: '50%',
      transform: 'translate(-50%, -50%)'
  }}><CircularProgressWithLabel /></div>;
  } else
  { 
    return(
        <div style={{marginTop: "70px"}}>
            <UpcomingEvent tweets={data}/>
        </div>
    );
  }
}

export default UpcomingLaunch;