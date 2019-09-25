import React, { Component } from "react";
import styles from "./FooterButtons.styles";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@mdi/react";
import { mdiGithubCircle, mdiAccountCircle, mdiHelpCircle } from "@mdi/js";
import InfoDialog from "./info-dialog/InfoDialog";

class FooterButtons extends Component {
  state = {
    infoDialogOpen: false
  };

  handleInfoDialogButtonClicked = () => {
    this.setState({ infoDialogOpen: true });
  };

  handleInfoDialogClose = () => {
    this.setState({ infoDialogOpen: false });
  };

  render() {
    return (
      <div className={this.props.classes.main}>
        <Tooltip
          title="What's this?"
          placement="top"
          disableTriggerFocus={true}
          PopperProps={{ style: { marginLeft: 15 } }}
        >
          <IconButton
            className={this.props.classes.circleButton}
            onClick={this.handleInfoDialogButtonClicked}
          >
            <Icon path={mdiHelpCircle} size={"50px"} color="black" />
          </IconButton>
        </Tooltip>
        <InfoDialog
          open={this.state.infoDialogOpen}
          onClose={this.handleInfoDialogClose}
        />
        <a href="https://github.com/leytonblackler/SketchyPic">
          <Tooltip
            title="View the GitHub repository"
            placement="top"
            disableTriggerFocus={true}
            PopperProps={{ style: { marginLeft: 15 } }}
          >
            <IconButton className={this.props.classes.circleButton}>
              <Icon path={mdiGithubCircle} size={"50px"} color="black" />
            </IconButton>
          </Tooltip>
        </a>
        <a href="https://leytonblackler.dev/">
          <Tooltip
            title="Check out my personal developer website"
            placement="top"
            disableTriggerFocus={true}
            PopperProps={{ style: { marginLeft: 10 } }}
          >
            <IconButton className={this.props.classes.circleButton}>
              <Icon path={mdiAccountCircle} size={"50px"} color="black" />
            </IconButton>
          </Tooltip>
        </a>
      </div>
    );
  }
}

export default withStyles(styles)(FooterButtons);
