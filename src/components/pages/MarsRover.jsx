import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import SectionLoader from "../elements/SectionLoader";
import MyVerticallyCenteredModal from "../elements/CustomModal";

function MarsRover() {
  // Use static data to avoid NASA API rate limits
  const [roverData] = useState({
    img_src: "/mars_rover.png",
    camera: {
      full_name: "Front Hazard Avoidance Camera",
    },
    earth_date: "2015-05-30",
    sol: 1000,
    rover: {
      name: "Curiosity",
    },
  });
  const [modalShow, setModalShow] = useState(false);
  const [isMouse, setIsMouse] = useState(false);

  if (!roverData) {
    return (
      <div style={{ marginTop: "50px" }}>
        <h3 style={{ textAlign: "center", color: "white" }}>
          Mars Rover: Curiosity
        </h3>
        <SectionLoader type="rover" />
      </div>
    );
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <h3 style={{ textAlign: "center" }}>Mars Rover: Curiosity</h3>
      <Card
        onMouseOver={() => setIsMouse(true)}
        onMouseOut={() => setIsMouse(false)}
        onClick={() => setModalShow(true)}
        className="rounded mx-auto d-block"
        sx={{ maxWidth: 600 }}
        style={{
          backgroundColor: "#0c0e10",
          color: "white",
          cursor: "pointer",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="300"
            image={roverData.img_src}
            alt="Mars Rover"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center", fontFamily: "Montserrat" }}
            >
              {roverData.camera.full_name}
            </Typography>
            {isMouse && (
              <Typography
                variant="body2"
                style={{ textAlign: "center", fontFamily: "Montserrat" }}
              >
                Earth Date: {roverData.earth_date}
              </Typography>
            )}
          </CardContent>
        </CardActionArea>
      </Card>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title={`Mars Rover - ${roverData.camera.full_name}`}
        image={roverData.img_src}
        description={`Taken by the ${roverData.rover.name} rover on ${roverData.earth_date} (Sol ${roverData.sol}).`}
      />
    </div>
  );
}

export default MarsRover;
