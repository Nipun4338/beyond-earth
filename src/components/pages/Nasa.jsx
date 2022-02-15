import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import MyVerticallyCenteredModal from '../elements/CustomModal';
import NasaEvents from "./NasaEvents";


function Nasa(props){
    const [mouse, setMouse]=useState(false);
    const [modalShow, setModalShow] = React.useState(false);

    function changeMouse(){
        setMouse(true);
    }

    return (
    <div style={{marginTop: "50px"}}>
    <h2 style={{fontWeight: "bolder"}}>NASA</h2>
    <h3 style={{textAlign: "center"}}>Nasa Astronomy Picture of the Day</h3>
    <Card onMouseOver={changeMouse} onClick={() => setModalShow(true)} sx={{ maxWidth: 600 }} className="rounded mx-auto d-block" style={{backgroundColor: "#0c0e10", color: "white"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={props.url}
          alt="APOD"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center", fontFamily: "Montserrat"}}>
            {props.title}
          </Typography>
          { mouse===true ? 
          <Typography variant="body2" style={{fontFamily: "Montserrat"}}>
            {props.explanation}
          </Typography>
          : null
          }
        </CardContent>
      </CardActionArea>
    </Card>
    
    <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        onClick={() => setModalShow(false)}
        title={props.title}
        image={props.url}
      />


      <NasaEvents />
    </div>
    );
}

export default Nasa;