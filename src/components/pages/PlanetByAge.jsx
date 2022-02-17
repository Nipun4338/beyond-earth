import React from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button, Col, Row } from "react-bootstrap";
import DesktopDatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';

function PlanetByAge(){
    const [value, setValue] = React.useState(new Date());
    const color = "white";

    function sendDate(){
        console.log(value);
    }
    
    return (
        <div style={{marginTop: "70px"}}>
            <h4 style={{textAlign: "center"}}>Find your age on Planets!</h4>
            <div className="input-container">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <label style={{color: 'white', margin: '5px'}}>Enter Birthdate: </label>
            <DesktopDatePicker
                label="Custom input"
                value={value}
                variant="inline"
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={({ inputRef, inputProps, InputProps }) => (
                <Box sx={{
                  svg: { color },
                  input: 'black' ,
                  label: { color },
                  display: 'flex', alignItems:'center',
                  margin: '20px'
                }}>
                    <input ref={inputRef} {...inputProps} />
                    {InputProps?.endAdornment}
                </Box>
                )}
            />
            <Button onClick={sendDate} type="submit" variant="outline-primary" id="date">Submit</Button>
            </LocalizationProvider>
            </div>
        </div>
    );
}

export default PlanetByAge;