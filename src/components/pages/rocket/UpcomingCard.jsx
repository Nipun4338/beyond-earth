import React, {useState} from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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

function UpcomingCard(values){
    const [expanded, setExpanded] = useState(false);
    const [mouse, setMouse]=useState(false);

    function changeMouse(){
        setMouse(true);
    }
    /*const sourceArray=useState(eonet.sources);
    const tempSourceArray=useState(sources);*/

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card onMouseOver={changeMouse} sx={{ maxWidth: 600 }} className="rounded mx-auto d-block" style={{backgroundColor: "#0c0e10", color: "white"}}>
        <CardActionArea onClick={handleExpandClick}>
        <CardMedia
            component="img"
            image={values.values.image}
            alt="Launcher"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center", fontFamily: "Montserrat"}}>
            {values.values.mission ? values.values.mission.name : values.values.name}
            </Typography>
            </CardContent>
            <Grid container direction="row" alignItems="center">
            <ExpandMore
            expand={expanded}
            aria-expanded={expanded}
            aria-label="show more"
            >
            <ExpandMoreIcon style={{fill: "white"}}/>
            </ExpandMore>
            </Grid>
        
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        { mouse===true ? 
            <Typography variant="body2" style={{fontFamily: "Montserrat"}}>
            {values.values.window_start}
            </Typography>
            : null
            }
        </CardContent>
        </Collapse>
        </CardActionArea>
        </Card>
    );
}

export default UpcomingCard;