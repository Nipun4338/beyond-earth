import React, { useEffect, useState } from "react";
import Nasa from "./pages/Nasa";

function Body(){
    const [error, setError] = useState(null);
    const [data, setData]=useState();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
    fetch("/apod")
      .then((res) => res.json())
      .then((result) => {
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
    return <div>Loading...</div>;
  } else 
  {
      const {media_type, title, url, explanation}=data;
    return(
        <div>
            <Nasa url={url} title={title} media_type={media_type} explanation={explanation}/>
        </div>
    );
  }
}

export default Body;