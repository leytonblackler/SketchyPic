import React, { Component } from "react";
import styles from "./DelayedPanel.styles";
import { withStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import FooterButtons from "./footer-buttons/FooterButtons.jsx";
import ChoosePhotoButton from "./ChoosePhotoButton/ChoosePhotoButton";
import PhotoGrid from "./PhotoGrid/PhotoGrid";
import ProgressIndicator from "./ProgressIndicator/ProgressIndicator";
import Result from "./Result/Result";

const Status = {
  SHOWING_CHOOSE_PHOTO_BUTTON: 1,
  WAITING_FOR_PHOTO_CHOICE: 2,
  SHOWING_PROGRESS: 3,
  SHOWING_RESULT: 4
};

const PROGRESS_MESSAGES = [
  "Uploading photo...",
  "Detecting salient regions of photo...",
  "Generating saliency map...",
  "Converting saliency map into a binary mask...",
  "Extracting salient regions from photo...",
  "Detecting segments within extracted region...",
  "Generating segment map...",
  "Applying Sobel edge detection operator to segment map...",
  "Inverting edge map...",
  "Loading pre-trained model...",
  "Generating sketch using model...",
  "Downloading sketch..."
];

class DelayedPanel extends Component {
  state = {
    status: Status.SHOWING_CHOOSE_PHOTO_BUTTON,
    delayFinished: false,
    progressMessage: ""
  };

  componentDidMount() {
    setTimeout(() => this.setState({ delayFinished: true }), 9000);
    // setTimeout(() => this.setState({ delayFinished: true }), 0);
  }

  onChoosePhotoClicked = () => {
    this.setState({
      status: Status.WAITING_FOR_PHOTO_CHOICE
    });
  };

  randomDuration = (max, min) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  onPhotoChosen = photoName => {
    this.setState({
      status: Status.SHOWING_PROGRESS,
      progressMessage: PROGRESS_MESSAGES[0],
      chosenPhotoName: photoName
    });
    const messages = [...PROGRESS_MESSAGES];
    messages.shift();
    let totalTimeout = 0;
    messages.forEach((message, index) => {
      const timeout = this.randomDuration(1500, 3000);
      totalTimeout += timeout;
      setTimeout(
        () => this.setState({ progressMessage: message }),
        totalTimeout
      );
      if (index === messages.length - 1) {
        totalTimeout += timeout;
        setTimeout(() => {
          this.setState({ progressMessage: "" });
          setTimeout(
            () => this.setState({ status: Status.SHOWING_RESULT }),
            750
          );
        }, totalTimeout);
      }
    });
  };

  onRestart = () => {
    this.setState({ status: Status.SHOWING_CHOOSE_PHOTO_BUTTON });
  };

  renderCurrentContent = () => {
    const { status, progressMessage, chosenPhotoName } = this.state;
    switch (status) {
      case Status.SHOWING_CHOOSE_PHOTO_BUTTON:
        return <ChoosePhotoButton onClick={this.onChoosePhotoClicked} />;
      case Status.WAITING_FOR_PHOTO_CHOICE:
        return <PhotoGrid onPhotoChosen={this.onPhotoChosen} />;
      case Status.SHOWING_PROGRESS:
        return (
          <ProgressIndicator
            visible={progressMessage !== ""}
            message={progressMessage}
          />
        );
      case Status.SHOWING_RESULT:
        return (
          <Result
            visible={true}
            photoName={chosenPhotoName}
            size={"20vh"}
            onRestart={this.onRestart}
          />
        );
      default:
        return null;
    }
  };

  render() {
    return this.state.delayFinished ? (
      <Fade in={true} timeout={1500}>
        <div className={this.props.classes.main}>
          <div className={this.props.classes.content}>
            {this.renderCurrentContent()}
          </div>
          <FooterButtons />
        </div>
      </Fade>
    ) : null;
  }
}

export default withStyles(styles)(DelayedPanel);
