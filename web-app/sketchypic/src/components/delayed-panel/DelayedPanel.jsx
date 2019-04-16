import React, { Component } from 'react';
import styles from './DelayedPanel.styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';

class DelayedPanel extends Component {

    render() {
        return (
            <Fade in={true}>
                <div className={this.props.classes.main}>
                    <Button variant="normal" className={this.props.classes.button}>
                        Select a Photo
                    </Button>
                    <IconButton aria-label="Delete" className={this.props.classes.githubButton}>
                        <img className={this.props.classes.githubLogo} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="View GitHub Repository"/>
                    </IconButton>
                </div>
            </Fade>
        );
    }
}

export default withStyles(styles) (DelayedPanel);