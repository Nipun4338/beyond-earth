/*import React, {useEffect, useState} from "react";
import { useMediaQuery } from "@mui/material";
import { ButtonGroup, ToggleButton } from "react-bootstrap";


function ButtonGroupCustom(props) {
  const [checked, setChecked] = useState(false);
  const [radioName, setRadioName] = useState('All');
  const isMobile = useMediaQuery('(min-width:990px)');

  function sendName(value){
    props.getButtonValue(value);
    setRadioName(value);
  }

  useEffect(()=>{
    sendName(radioName);
  },[]);

  return (
      <ButtonGroup size='sm' style={{display: 'flex', justifyContent: 'flex-end'}} vertical={isMobile ? false : true}>
      {
      props.radios.map((property, index)=>{
        {
          return (
            <ToggleButton
            key={index}
            id={`radio-${index}`}
            type="radio"
            variant={'outline-primary'}
            name={property.name}
            value={property.value}
            checked={radioName === property.name}
            onChange={(e) => 
            {
              sendName(e.currentTarget.name);
            }
          }
          >
            {property.name}
          </ToggleButton>
          );
        }
      })}
      </ButtonGroup>
  );
}

export default ButtonGroupCustom;*/