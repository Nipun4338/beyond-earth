import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { Button } from "react-bootstrap";
import DesktopDatePicker from '@mui/lab/DatePicker';
import Box from '@mui/material/Box';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import dateFormat from "dateformat";
import { Image } from "react-bootstrap";

const planets=[
    { name: 'Mercury', value: 'Mercurian', days: 58.6, years: 87.97, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/mercury.gif"},
    { name: 'Venus', value: 'Venusian', days: 243, years: 224.7, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/venus.gif"},
    { name: 'Earth', value: 'Earth', days: 1, years: 365.26, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/earth.gif"},
    { name: 'Mars', value: 'Martian', days: 1.03, years: 686.98, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/mars.gif"},
    { name: 'Jupiter', value: 'Jovian', days: 0.41, years: 4332.71, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/jupiter.gif"},
    { name: 'Saturn', value: 'Saturnian', days: 0.45, years: 10759.5, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/saturn.gif"},
    { name: 'Uranus', value: 'Uranian', days: 0.72, years: 30685, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/uranus.gif"},
    { name: 'Neptune', value: 'Neptunian', days: 0.67, years: 60190, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/neptune.gif"},
    { name: 'Pluto', value: 'Plutonian', days: 6.39, years: 90800, total_days: null, age: null, next_bday: null, image: "https://www.exploratorium.edu/ronh/age/images/pluto.gif"}
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#040607' : '#040607',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
  }));

function PlanetByAge(){
    const [value, setValue] = React.useState(new Date());
    const [dateArray, setDateArray]=React.useState(planets);
    const color = "white";

    function int_zero(e) {
        return 1 > e ? 0 : parseInt(e, 10)
    }

    function calculation(props, diff1){
        //convert milliseconds into years
        ///For earth
        let today = new Date(),
        diff=diff1/864e5,
        total_days=diff1/(1000*60*60*24),
        years = int_zero(10 * diff / props.years) / 10,
        exact_total_days = Math.floor(total_days / props.days),
        next_birthday=new Date((today.getTime()+props.years*(1-(diff/props.years-parseInt(diff / props.years)))* 24 * 3600 * 1e3)),
        bday=dateFormat(next_birthday, "dddd, mmmm dS, yyyy"); // "Dec 20"

        props.total_days=exact_total_days;
        props.age=years;
        props.next_bday=bday;
    }

    //calculate age
    function calculateAge(){
        const date=value.toLocaleDateString();
        //earth milliseconds in a year 1000*24*60*60*365.24 = 31556736000; 
        let today = new Date(),
        //birthay has 'Dec 25 1998'
        dob = new Date(date),
        //difference in milliseconds
        diff = today.getTime() - dob.getTime();
        var temp=[...planets];
        temp.map((prop, index)=>{
            return (calculation(prop, diff));
        });
        setDateArray(temp);
    }
    
    return (
        <div style={{marginTop: "70px"}}>
            <h4 style={{textAlign: "center"}}>Find your age on Planets!</h4>
            <div className="input-container">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
            <label style={{color: 'white', margin: '5px'}}>Enter Birthdate</label>
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
            <Button onClick={calculateAge} type="submit" variant="outline-primary" id="date">Submit</Button>
            </LocalizationProvider>

            <Box sx={{ flexGrow: 1, marginTop: "20px" }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {dateArray.map((prop, index) => (
                <Grid item xs={4} sm={4} md={4} key={index}>
                    <Item>
                        <h3>{prop.name}</h3>
                        <Image src={prop.image}/>
                        <p style={{fontWeight: 'normal'}}>Your age is</p>
                        <p style={{fontWeight: 'normal'}}>{prop.total_days} Mercurian Days</p>
                        <p style={{fontWeight: 'normal'}}>{prop.age} Mercurian Years</p>
                        <p style={{fontWeight: 'normal'}}>Next Birthday: {prop.next_bday}</p>
                    </Item>
                </Grid>
                ))}
            </Grid>
            </Box>
            </div>
        </div>
    );
}

export default PlanetByAge;