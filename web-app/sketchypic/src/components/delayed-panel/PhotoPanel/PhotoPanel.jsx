import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Zoom from "@material-ui/core/Zoom";

const PhotoPanel = props => {
  const renderActionArea = children =>
    props.onClick ? (
      <CardActionArea onClick={() => props.onClick(props.photoName)}>
        {children}
      </CardActionArea>
    ) : (
      children
    );

  return (
    <Zoom in={props.visible}>
      <Card
        style={{
          width: props.size,
          height: props.size,
          borderRadius: 10
        }}
      >
        {renderActionArea(
          <CardMedia
            style={{
              width: props.size,
              height: props.size
            }}
            image={props.imagePath}
          />
        )}
      </Card>
    </Zoom>
  );
};

export default PhotoPanel;
