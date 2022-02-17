import React, { useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


function SolarSystemCountCard(props){
    const navigate = useNavigate();
    const [isMouse, setIsMouse]=useState(false);
    var {id, knownCount, updateDate }=props.prop;
    if(id==='planet')
    {
        id='Planet';
    }
    else if(id==='dwarfPlanet')
    {
        id='Dwarf Planet';
    }
    else if(id==='comet')
    {
        id='Comet';
    }
    else if(id==='asteroid')
    {
        id='Asteroid';
    }
    else if(id==='moonsPlanet')
    {
        id='Moons Planet';
    }
    else if(id==='moonsDwarfPlanet')
    {
        id='Moons Dwarf Planet';
    }
    else if(id==='moonsAsteroid')
    {
        id='Moons Asteroid';
    }

    return (
        <Card onMouseOver={()=>setIsMouse(true)} onClick={() => { 
            if(id==='Planet')
            {
                navigate("/planet");
            }

            }} onMouseOut={()=>setIsMouse(false)} className="rounded mx-auto d-block" sx={{ maxWidth: 600 }} style={{ color: "white", cursor:"pointer", margin: "20px", backgroundColor: isMouse!==true ? "#0c0e10" : "blue"}}
        >
            <CardContent>
            <Row>
                <Col>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign: "left", fontFamily: "Montserrat"}}>
                        {id}
                    </Typography>
                </Col>
                <Col>
                    <Typography variant="body2" style={{textAlign: "right", fontFamily: "Montserrat"}}>
                        Total Count: {knownCount}
                    </Typography>
                </Col>
            </Row>
            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "gray", fontWeight:"normal"}}>
            Last Update: 
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat"}}>
                {updateDate}
            </Typography>
            </Col>
            </Row>
            </CardContent>
        </Card>
    );
}

export default SolarSystemCountCard;