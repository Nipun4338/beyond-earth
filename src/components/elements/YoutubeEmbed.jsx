import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedUrl }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`${embedUrl}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
    embedUrl: PropTypes.string.isRequired
};

export default YoutubeEmbed;