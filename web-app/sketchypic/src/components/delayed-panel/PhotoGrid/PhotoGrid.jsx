import React, { Component } from "react";
import styled from "styled-components";
import PhotoPanel from "../PhotoPanel/PhotoPanel";

const PHOTO_NAMES = [
  "mushroom",
  "bird",
  "clock",
  "duck",
  "mug",
  "penguin",
  "flamingo",
  "shark"
];

const GRID_SQUARE_SIZE = "15vh";

class PhotoGrid extends Component {
  state = {
    selected: null
  };
  onPhotoPanelClicked = photoName => {
    this.setState({ selected: photoName, hideAll: false });
    setTimeout(() => {
      this.setState({ hideAll: true });
      setTimeout(() => this.props.onPhotoChosen(photoName), 750);
    }, 750);
  };
  render() {
    return (
      <MainContainer>
        <GridContainer>
          <Grid>
            {PHOTO_NAMES.map(photoName => (
              <PhotoPanel
                key={photoName}
                photoName={photoName}
                imagePath={"images/photos/" + photoName + ".jpg"}
                visible={
                  (!this.state.selected || this.state.selected === photoName) &&
                  !this.state.hideAll
                }
                onClick={this.state.selected ? null : this.onPhotoPanelClicked}
                size={GRID_SQUARE_SIZE}
              />
            ))}
          </Grid>
        </GridContainer>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: inline-block;
`;

const Grid = styled.div`
  width: auto;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: ${GRID_SQUARE_SIZE} ${GRID_SQUARE_SIZE} ${GRID_SQUARE_SIZE} ${GRID_SQUARE_SIZE};
  grid-template-rows: ${GRID_SQUARE_SIZE} ${GRID_SQUARE_SIZE};
`;

export default PhotoGrid;

// <Grid container spacing={3}>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//       </Grid>
//       <Grid container spacing={3}>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//         <Grid item xs={6}>
//           <Paper className={classes.paper}>xs=6</Paper>
//         </Grid>
//         <Grid item xs>
//           <Paper className={classes.paper}>xs</Paper>
//         </Grid>
//       </Grid>
