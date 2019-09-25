import React, { Component } from "react";
import styled from "styled-components";
import Fade from "@material-ui/core/Fade";
import PhotoPanel from "../PhotoPanel/PhotoPanel";
import Button from "@material-ui/core/Button";
import UndoIcon from "@material-ui/icons/Undo";

class Result extends Component {
  state = {
    restarting: false
  };

  onRestartClicked = () => {
    this.setState({ restarting: true });
    setTimeout(this.props.onRestart, 750);
  };

  render() {
    const { photoName, size, visible } = this.props;
    return (
      <MainContainer>
        <ImagesContainer>
          <Fade in={!this.state.restarting}>
            <TitledContainer>
              <Text>Input Photo</Text>
              <PhotoPanel
                photoName={photoName}
                imagePath={"images/photos/" + photoName + ".jpg"}
                visible={visible}
                size={size}
              />
            </TitledContainer>
          </Fade>
          <Fade in={!this.state.restarting}>
            <TitledContainer>
              <Text>Output Sketch</Text>
              <PhotoPanel
                photoName={photoName}
                imagePath={"images/sketches/" + photoName + ".png"}
                visible={visible}
                size={size}
              />
            </TitledContainer>
          </Fade>
        </ImagesContainer>
        <Fade in={!this.state.restarting}>
          <StyledButton
            variant="contained"
            styles={{ textTransform: "none" }}
            onClick={this.onRestartClicked}
          >
            <StyledUndoIcon />
            Try Another Photo
          </StyledButton>
        </Fade>
      </MainContainer>
    );
  }
}

const MainContainer = styled.div`
  //   background-color: magenta;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImagesContainer = styled.div`
  //   background-color: orange;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  //   font-size: 16pt;
  margin-bottom: 20px;
`;

const TitledContainer = styled.div`
  //   background-color: lime;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledButton = styled(Button)`
  && {
    display: flex;
    justify-content: space-evenly;
    text-transform: none;
    border-radius: 50px;
    background-color: white;
    margin: 20px;
  }
`;

const StyledUndoIcon = styled(UndoIcon)`
  margin-right: 10px;
`;

// const Text = styled.span`
//   margin-bottom: 20px;
// `;

export default Result;
