import React, { useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styled } from '@mui/material/styles';
import { Col, Row } from "react-bootstrap";


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function PlanetCard(props){
    const { englishName, bodyType, discoveredBy, 
        discoveryDate, gravity, escape, meanRadius, avgTemp,
    mass:{massValue, massExponent}, vol: {volValue, volExponent}}=props.prop;
    const [expanded, setExpanded] = useState(false);
    const [isMouse, setIsMouse]=useState(false);
    /*const sourceArray=useState(eonet.sources);
    const tempSourceArray=useState(sources);*/

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    /*function getSourceTitle(value){
            return sourceArray.map((sourceArray)=>{
                const {id: source_id}=sourceArray;
                return value===source_id ? sourceArray.title: null;
            });
      }*/

    return (
        <Card  onMouseOver={()=>setIsMouse(true)} onMouseOut={()=>setIsMouse(false)} className="rounded mx-auto d-block" sx={{ maxWidth: 900 }} style={{backgroundColor: "#0c0e10", color: "white", margin: "20px"}}>
            <CardContent style={{backgroundColor: isMouse!==true ? "#0c0e10" : "#006fb9"}}>
            <Row>
                <Col>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign: "left", fontFamily: "Montserrat"}}>
                        {englishName}
                    </Typography>
                </Col>
                <Col>
                    <Typography variant="body2" style={{textAlign: "right", fontFamily: "Montserrat"}}>
                        {gravity} m/s²
                    </Typography>
                </Col>
            </Row>
            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Category: 
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {bodyType}
            </Typography>
            </Col>
            </Row>

            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Discovered By: 
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {discoveredBy}
            </Typography>
            </Col>
            </Row>

            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Discovery Date:
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {discoveryDate}
            </Typography>
            </Col>
            </Row>
            </CardContent>

            
        <CardActionArea onClick={handleExpandClick}>
        <CardActions disableSpacing>
            <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon style={{fill: "white"}}/>
            </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Escape:
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {escape} m/s-1
            </Typography>
            </Col>
            </Row>

            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Mean Radius:
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {meanRadius} Km
            </Typography>
            </Col>
            </Row>

            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Average Temperature:
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {avgTemp} K
            </Typography>
            </Col>
            </Row>

            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Mass:
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {massValue}x10^{massExponent} Kg
            </Typography>
            </Col>
            </Row>

            <Row>
            <Col xs={3}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "white", fontWeight:"normal"}}>
            Volume:
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat", fontWeight:"normal"}}>
                {volValue}x10^{volExponent} Km3
            </Typography>
            </Col>
            </Row>
            </CardContent>
        </Collapse>
        </CardActionArea>
        </Card>
    );
}

export default PlanetCard;