import React from 'react';
import styles from './Main.styles';
import { withStyles } from '@material-ui/core/styles';

const main = props => {
    return <div className={props.classes.main}>this is main</div>
}

export default withStyles(styles) (main);