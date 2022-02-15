import React, { useEffect, useState } from "react";
import Nasa from "./pages/Nasa";
import CircularProgressWithLabel from "./elements/Loading";

function Body(){
    const [error, setError] = useState(null);
    const [data, setData]=useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
    fetch("https://beyond-earth-server.herokuapp.com/apod")
      .then((res) => res.json())
      .then((result) => {
        setIsLoaded(false);
        setData(result);
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
      const {media_type, title, url, explanation}=data;
    return(
        <div>
            {isLoaded ? <Nasa url={url} title={title} media_type={media_type} explanation={explanation}/> : 
            <CircularProgressWithLabel style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }}/>}
        </div>
    );
  }
}

export default Body;