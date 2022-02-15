import React, { useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Link } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styled } from '@mui/material/styles';
import { Col, Row } from "react-bootstrap";
import eonet from "../sources/EonetSources";


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

function NasaCard(props){
    const {title:event_title, id:event_id, categories: [{title: event_category}], sources: sources}=props.prop;
    const [expanded, setExpanded] = useState(false);
    const [sourceArray, setSourceArray]=useState(eonet.sources);
    const [tempSourceArray, setTempSourceArray]=useState(sources);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    function getSourceTitle(value){
            return sourceArray.map((sourceArray)=>{
                const {id: source_id}=sourceArray;
                return value===source_id ? sourceArray.title: null;
            });
      }

    return (
        <Card className="rounded mx-auto d-block" sx={{ maxWidth: 600 }} style={{backgroundColor: "#0c0e10", color: "white", margin: "20px"}}>
            <CardContent>
            <Row>
                <Col>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign: "left", fontFamily: "Montserrat"}}>
                        {event_title}
                    </Typography>
                </Col>
                <Col>
                    <Typography variant="body2" style={{textAlign: "right", fontFamily: "Montserrat"}}>
                        #{event_id}
                    </Typography>
                </Col>
            </Row>
            <Row>
            <Col xs={2}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Ariels", color: "gray", fontWeight:"normal"}}>
            Category: 
            </Typography>
            </Col>
            <Col xs={8}>
            <Typography gutterBottom variant="p" component="div" style={{textAlign: "left", fontFamily: "Montserrat"}}>
                {event_category}
            </Typography>
            </Col>
            </Row>
            </CardContent>
        <CardActionArea>
        <CardActions disableSpacing onClick={handleExpandClick}>
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
            <Typography link>Sources:</Typography>
            {
                tempSourceArray.map((prop)=>{
                    return (
                        <div>
                            <Link
                            variant="body2"
                            href={prop.url}
                            target="_blank"
                            underline="hover"
                            >
                            {getSourceTitle(prop.id)}
                            </Link>
                            <br/>
                        </div>
                    );
                })
            }
            </CardContent>
        </Collapse>
        </CardActionArea>
        </Card>
    );
}

export default NasaCard;