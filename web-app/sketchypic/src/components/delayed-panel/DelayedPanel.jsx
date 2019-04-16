import React, { Component } from 'react';
import styles from './DelayedPanel.styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Fade from '@material-ui/core/Fade';

class DelayedPanel extends Component {

    state = {
        delayFinished: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({delayFinished: true}), 9500);
    }

    render() {
        return this.state.delayFinished ? (
            <Fade in={true} timeout={2000}>
                <div className={this.props.classes.main}>
                    <span>Coming soon...</span>
                    <a href="https://github.com/leytonblackler/SketchyPic">
                        <IconButton aria-label="Delete" className={this.props.classes.githubButton}>
                            <img className={this.props.classes.githubLogo} src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="View GitHub Repository"/>
                        </IconButton>
                    </a>
                </div>
            </Fade>
        ) : null;
    }
}

export default withStyles(styles) (DelayedPanel);

// <Button className={this.props.classes.button}>Select a Photo</Button>