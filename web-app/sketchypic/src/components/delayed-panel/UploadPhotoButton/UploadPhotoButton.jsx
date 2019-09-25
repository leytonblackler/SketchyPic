import React, { Component } from "react";
import styled from "styled-components";
import { withSnackbar } from "notistack";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

class uploadPhotoButton extends Component {
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
      <span>
        <StyledInput
          ref={"file-upload"}
          type="file"
          accept="image/x-png,image/gif,image/jpeg"
          onChange={this.handleImageUpload}
        />
        <StyledButton
          variant="contained"
          styles={{ textTransform: "none" }}
          onClick={() => this.refs["file-upload"].click()}
        >
          <StyledCloudUploadIcon color="black" />
          Upload a Photo
        </StyledButton>
      </span>
    );
  }
}

const StyledButton = styled(Button)`
  && {
    display: flex;
    justify-content: space-evenly;
    text-transform: none;
    border-radius: 50px;
    background-color: white;
  }
`;

const StyledCloudUploadIcon = styled(CloudUploadIcon)`
  margin-right: 10px;
`;

const StyledInput = styled.input`
  position: absolute;
  visibility: hidden;
`;

export default withSnackbar(uploadPhotoButton);
