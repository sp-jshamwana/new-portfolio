import { Card } from "antd";
import React from "react";

const PodcastCard = ({ podcast }) => {
    return (
      <div className="podcastCardContainer">
        <Card
          className="podcastCard"
          cover={<img alt={podcast.collectionName} src={podcast.artworkUrl100} />}
        >
          <div className="cardContent">
            <h3 className="cardTitle">{podcast.collectionName}</h3>
            <p className="cardArtist">{podcast.artistName}</p>
            <a href={podcast.collectionViewUrl} target="_blank" rel="noopener noreferrer" className="text-purple-800 hover:underline">
              View on Apple Podcasts
            </a>
          </div>
        </Card>
      </div>
    );
  };

export default PodcastCard;