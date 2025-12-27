import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function SolarSystemCountCard(props) {
  const navigate = useNavigate();
  const [isMouse, setIsMouse] = useState(false);
  const [displayCount, setDisplayCount] = useState(0);
  var { id, knownCount, updateDate } = props.prop;

  // Animate count on mount
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = knownCount / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= knownCount) {
        setDisplayCount(knownCount);
        clearInterval(timer);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [knownCount]);

  if (id === "planet") {
    id = "Planet";
  } else if (id === "dwarfPlanet") {
    id = "Dwarf Planet";
  } else if (id === "comet") {
    id = "Comet";
  } else if (id === "asteroid") {
    id = "Asteroid";
  } else if (id === "moonsPlanet") {
    id = "Moons Planet";
  } else if (id === "moonsDwarfPlanet") {
    id = "Moons Dwarf Planet";
  } else if (id === "moonsAsteroid") {
    id = "Moons Asteroid";
  }

  return (
    <Card
      onMouseOver={() => setIsMouse(true)}
      onClick={() => {
        if (id === "Planet") {
          navigate("/planet");
        }
      }}
      onMouseOut={() => setIsMouse(false)}
      className="rounded mx-auto d-block"
      sx={{ maxWidth: 600 }}
      style={{
        color: "white",
        cursor: "pointer",
        margin: "20px",
        backgroundColor: isMouse !== true ? "#0c0e10" : "#006fb9",
        transition: "all 0.3s ease",
      }}
    >
      <CardContent>
        <Row>
          <Col>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "left", fontFamily: "Montserrat" }}
            >
              {id}
            </Typography>
          </Col>
          <Col>
            <Typography
              variant="body2"
              style={{
                textAlign: "right",
                fontFamily: "Montserrat",
                fontSize: "1.2rem",
                fontWeight: "bold",
                color: isMouse ? "#00d4ff" : "white",
              }}
            >
              Total Count:{" "}
              <span
                style={{
                  color: "#00d4ff",
                  textShadow: "0 0 10px rgba(0,212,255,0.5)",
                }}
              >
                {displayCount.toLocaleString()}
              </span>
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              style={{
                textAlign: "left",
                fontFamily: "Ariels",
                color: "gray",
                fontWeight: "normal",
              }}
            >
              Last Update:
            </Typography>
          </Col>
          <Col xs={8}>
            <Typography
              gutterBottom
              variant="p"
              component="div"
              style={{ textAlign: "left", fontFamily: "Montserrat" }}
            >
              {updateDate}
            </Typography>
          </Col>
        </Row>
      </CardContent>
    </Card>
  );
}

export default SolarSystemCountCard;
