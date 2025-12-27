import React, { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

function ButtonGroupCustom(propsEarth) {
  const [radioName, setRadioName] = useState("All");
  const isMobile = useMediaQuery("(min-width:990px)");
  const [isGet, setIsGet] = useState(true);

  function sendName(value) {
    propsEarth.getButtonValue(value);
    setRadioName(value);
  }

  useEffect(() => {
    if (isGet) {
      setIsGet(false);
      sendName(radioName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGet, radioName]);

  return (
    <ButtonGroup
      size="sm"
      style={{ display: "flex", justifyContent: "flex-end" }}
      vertical={isMobile ? false : true}
    >
      {propsEarth.radios.map((property, index) => {
        return (
          <ToggleButton
            key={index}
            id={`radio-${index}`}
            type="radio"
            variant={"outline-primary"}
            name={property.name}
            value={property.value}
            checked={radioName === property.name}
            onChange={(e) => {
              sendName(e.currentTarget.name);
            }}
          >
            {property.name}
          </ToggleButton>
        );
      })}
    </ButtonGroup>
  );
}

export default ButtonGroupCustom;
