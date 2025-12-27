import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Col, Row } from "react-bootstrap";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CardActions from "@mui/material/CardActions";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Astronauts() {
  const [astros, setAstros] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [isMouse, setIsMouse] = useState(false);

  useEffect(() => {
    fetch("http://api.open-notify.org/astros.json")
      .then((res) => res.json())
      .then((data) => {
        setAstros(data.people);
      })
      .catch((err) => {
        console.error("Error fetching astronauts:", err);
        // Fallback data
        setAstros([
          { name: "Jasmin Moghbeli", craft: "ISS" },
          { name: "Andreas Mogensen", craft: "ISS" },
          { name: "Satoshi Furukawa", craft: "ISS" },
          { name: "Konstantin Borisov", craft: "ISS" },
          { name: "Oleg Kononenko", craft: "ISS" },
          { name: "Nikolai Chub", craft: "ISS" },
          { name: "Loral O'Hara", craft: "ISS" },
        ]);
      });
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h3 style={{ textAlign: "center" }}>People in Space Right Now</h3>
      <Card
        onMouseOver={() => setIsMouse(true)}
        onMouseOut={() => setIsMouse(false)}
        className="rounded mx-auto d-block"
        sx={{ maxWidth: 600 }}
        style={{ backgroundColor: "#0c0e10", color: "white", margin: "20px" }}
      >
        <CardContent
          style={{ backgroundColor: isMouse !== true ? "#0c0e10" : "#006fb9" }}
        >
          <Row>
            <Col>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ textAlign: "center", fontFamily: "Montserrat" }}
              >
                Total Count: {astros.length}
              </Typography>
            </Col>
          </Row>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon style={{ fill: "white" }} />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {astros.map((astro, index) => (
              <Row
                key={index}
                style={{
                  marginBottom: "10px",
                  borderBottom: "1px solid #333",
                  paddingBottom: "5px",
                }}
              >
                <Col xs={6}>
                  <Typography
                    variant="body1"
                    style={{ textAlign: "left", fontFamily: "Montserrat" }}
                  >
                    {astro.name}
                  </Typography>
                </Col>
                <Col xs={6}>
                  <Typography
                    variant="body2"
                    style={{
                      textAlign: "right",
                      fontFamily: "Montserrat",
                      color: "#ccc",
                    }}
                  >
                    {astro.craft}
                  </Typography>
                </Col>
              </Row>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

export default Astronauts;
