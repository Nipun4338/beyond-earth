import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Col, Row } from "react-bootstrap";

function Apis(){
    const [isMouse, setIsMouse]=useState(false);

    return (
        <div style={{textAlign:'center', margin:'70px'}}>
        <h1>Hover Please!</h1>
        <Card  onMouseOver={()=>setIsMouse(true)} onMouseOut={()=>setIsMouse(false)} className="rounded mx-auto d-block" sx={{ maxWidth: 1000 }} style={{backgroundColor: "#0c0e10", color: "white", margin: "20px"}}>
            <CardContent style={{color: isMouse!==true ? "#0c0e10" : "#006fb9"}}>
            <Row>
                <Col>
                    <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontSize:'2vw', fontWeight:'normal'}}>
                I was inspired by the SpaceXtale and tried to reinvent it while learning React.
            Though because of Nasa's EONET api(not able to fetch though they said it was free?) I couldn't make it
            much interesting. Hope in future I will update more things! <br />
                    </Typography>
                </Col>
            </Row>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontSize:'2vw'}}>
            <Col>
            1. <a href="https://github.com/nasa/apod-api" style={{textDecoration:'none', fontWeight:'normal', color: 'inherit'}}>Nasa APOD</a>
            </Col>
            <Col>
            2. <a href="https://api.le-systeme-solaire.net/en/" style={{textDecoration:'none', fontWeight:'normal', color: 'inherit'}}>Solar System OpenData by </a>
            </Col>
            <Col>
            3. <a href="https://spacelaunchnow.me/" style={{textDecoration:'none', fontWeight:'normal', color: 'inherit'}}>Spacelaunchnow </a>
            </Col>
            </Typography>
            </CardContent>
        </Card>
        </div>
    );
}

export default Apis;