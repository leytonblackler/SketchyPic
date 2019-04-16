import React, { Component } from 'react';
import styles from './DelayedPanel.styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react'
import { mdiGithubCircle, mdiAccountCircle, mdiHelpCircle } from '@mdi/js'
import Fade from '@material-ui/core/Fade';
import Tooltip from '@material-ui/core/Tooltip';

class DelayedPanel extends Component {

    state = {
        delayFinished: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({delayFinished: true}), 9000);
    }

    render() {
        return this.state.delayFinished ? (
            <Fade in={true} timeout={1500}>
                <div className={this.props.classes.main}>
                    <div className={this.props.classes.content}>
                        <span>Coming soon...</span>
                    </div>
                    <div className={this.props.classes.circleButtonsContainer}>
                        <a href="">
                            <Tooltip title="What's this?" placement="top" PopperProps={{style: {marginLeft: 15}}}>
                                <IconButton className={this.props.classes.circleButton}>
                                    <Icon path={mdiHelpCircle} size={'50px'} color="black"/>
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a href="https://github.com/leytonblackler/SketchyPic">
                            <Tooltip title="View the GitHub repository" placement="top" PopperProps={{style: {marginLeft: 15}}}>
                                <IconButton className={this.props.classes.circleButton}>
                                    <Icon path={mdiGithubCircle} size={'50px'} color="black"/>
                                </IconButton>
                            </Tooltip>
                        </a>
                        <a href="https://leytonblackler.dev/">
                            <Tooltip title="Check out my personal developer website" placement="top"  PopperProps={{style: {marginLeft: 10}}}>
                                <IconButton className={this.props.classes.circleButton}>
                                    <Icon path={mdiAccountCircle} size={'50px'} color="black"/>
                                </IconButton>
                            </Tooltip>
                        </a>
                    </div>
                </div>
            </Fade>
        ) : null;
    }
}

export default withStyles(styles) (DelayedPanel);