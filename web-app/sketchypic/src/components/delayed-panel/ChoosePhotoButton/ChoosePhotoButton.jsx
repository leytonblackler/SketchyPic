import React, { Component } from "react";
import styled from "styled-components";
import { withSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import PhotoIcon from "@material-ui/icons/Photo";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Zoom from "@material-ui/core/Zoom";

class ChoosePhotoButton extends Component {
  handleImageUpload = event => {
    const photo = event.target.files[0];
    console.log(photo);
    // this.props.enqueueSnackbar("The photo file size must not exceed 10MB.", {
    //   variant: "error",
    //   autoHideDuration: 1000
    // });

    const API_URL = "http://127.0.0.1:5000";

    const formData = new FormData();
    formData.append("photo", photo);

    fetch(`${API_URL}/submit`, {
      method: "POST",
      body: formData
    })
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        console.log(jsonResponse);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Zoom in={true}>
        <div style={{ display: "flex" }}>
          <StyledButton
            disabled
            variant="contained"
            styles={{ textTransform: "none" }}
          >
            <StyledUploadIcon />
            Upload a Photo
          </StyledButton>
          <StyledButton
            variant="contained"
            styles={{ textTransform: "none" }}
            onClick={this.props.onClick}
          >
            <StyledPhotoIcon />
            Choose a Photo
          </StyledButton>
        </div>
      </Zoom>
    );
  }
}

const StyledButton = styled(Button)`
  && {
    font-family: CircularStd;
    display: flex;
    justify-content: space-evenly;
    text-transform: none;
    border-radius: 50px;
    background-color: white;
    margin: 20px;
  }
`;

const StyledPhotoIcon = styled(PhotoIcon)`
  margin-right: 10px;
`;

const StyledUploadIcon = styled(CloudUploadIcon)`
  margin-right: 10px;
`;

export default withSnackbar(ChoosePhotoButton);
