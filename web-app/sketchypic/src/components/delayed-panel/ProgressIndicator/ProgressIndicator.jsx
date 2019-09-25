import React, { Component } from "react";
import styled from "styled-components";
import { GridLoader } from "react-spinners";
import Zoom from "@material-ui/core/Zoom";

class ProgressIndicator extends Component {
  render() {
    return (
      <Zoom in={this.props.visible}>
        <MainContainer>
          <Text>{this.props.message}</Text>
          <GridLoader loading size={14} sizeUnit={"px"} color={"#000000"} />
        </MainContainer>
      </Zoom>
    );
  }
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  margin-bottom: 20px;
`;

export default ProgressIndicator;
