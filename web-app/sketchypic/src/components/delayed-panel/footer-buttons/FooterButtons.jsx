import React from 'react';
import styles from './FooterButtons.styles';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react'
import { mdiGithubCircle, mdiAccountCircle, mdiHelpCircle } from '@mdi/js'

const footerButtons = props => {
    return (
        <div className={props.classes.main}>
            <a href="">
                <Tooltip title="What's this?" placement="top" PopperProps={{style: {marginLeft: 15}}}>
                    <IconButton className={props.classes.circleButton}>
                        <Icon path={mdiHelpCircle} size={'50px'} color="black"/>
                    </IconButton>
                </Tooltip>
            </a>
            <a href="https://github.com/leytonblackler/SketchyPic">
                <Tooltip title="View the GitHub repository" placement="top" PopperProps={{style: {marginLeft: 15}}}>
                    <IconButton className={props.classes.circleButton}>
                        <Icon path={mdiGithubCircle} size={'50px'} color="black"/>
                    </IconButton>
                </Tooltip>
            </a>
            <a href="https://leytonblackler.dev/">
                <Tooltip title="Check out my personal developer website" placement="top"  PopperProps={{style: {marginLeft: 10}}}>
                    <IconButton className={props.classes.circleButton}>
                        <Icon path={mdiAccountCircle} size={'50px'} color="black"/>
                    </IconButton>
                </Tooltip>
            </a>
        </div>
    );
}

export default withStyles(styles) (footerButtons);