import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import SectionLoader from "../elements/SectionLoader";

function SpaceNews() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=3")
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.results || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching space news:", err);
        // Fallback data
        setArticles([
          {
            title:
              "NASA's James Webb Space Telescope Discovers Most Distant Galaxy",
            summary:
              "Scientists using the James Webb Space Telescope have identified the most distant known galaxy, dating back to just 300 million years after the Big Bang.",
            url: "#",
            published_at: "2024-01-15",
          },
          {
            title:
              "SpaceX Successfully Launches Starship on Orbital Test Flight",
            summary:
              "SpaceX's massive Starship rocket completed its first successful orbital test flight, marking a major milestone in the company's plans for Mars missions.",
            url: "#",
            published_at: "2024-01-10",
          },
          {
            title: "New Earth-Like Exoplanet Discovered in Habitable Zone",
            summary:
              "Astronomers have discovered a potentially habitable exoplanet orbiting a nearby star, with conditions that might support liquid water.",
            url: "#",
            published_at: "2024-01-05",
          },
        ]);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div style={{ marginTop: "50px", marginBottom: "50px" }}>
        <h3 style={{ textAlign: "center", color: "white" }}>
          Latest Space News
        </h3>
        <SectionLoader type="satellite" />
      </div>
    );
  }

  return (
    <div style={{ marginTop: "50px", marginBottom: "50px" }}>
      <h3 style={{ textAlign: "center", color: "white" }}>Latest Space News</h3>
      {articles.map((article, index) => (
        <Card
          key={index}
          className="rounded mx-auto d-block"
          sx={{ maxWidth: 900 }}
          style={{ backgroundColor: "#0c0e10", color: "white", margin: "20px" }}
        >
          <CardActionArea onClick={() => window.open(article.url, "_blank")}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ fontFamily: "Montserrat" }}
              >
                {article.title}
              </Typography>
              <Typography
                variant="body2"
                style={{
                  fontFamily: "Montserrat",
                  color: "#ccc",
                  marginBottom: "10px",
                }}
              >
                {new Date(article.published_at).toLocaleDateString()}
              </Typography>
              <Typography variant="body1" style={{ fontFamily: "Montserrat" }}>
                {article.summary}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </div>
  );
}

export default SpaceNews;
