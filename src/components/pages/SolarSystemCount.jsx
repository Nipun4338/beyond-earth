import React from "react";
import SolarSystemCountCard from "./SolarSystemCountCard";
import SectionLoader from "../elements/SectionLoader";

function SolarSystemCount(props) {
  const tempArray = props.props;
  // Ensure tempArray is an array before mapping
  const isValid = Array.isArray(tempArray) && tempArray.length > 0;

  return (
    <div>
      <h3 style={{ textAlign: "center", marginTop: "50px", color: "white" }}>
        Solar System Info
      </h3>
      {isValid ? (
        tempArray.map((prop, index) => {
          return <SolarSystemCountCard key={index} prop={prop} />;
        })
      ) : (
        <SectionLoader type="planets" />
      )}
    </div>
  );
}

export default SolarSystemCount;
