import React from 'react';
import styles from './Main.styles';
import { withStyles } from '@material-ui/core/styles';

import Logo from '../logo/Logo.jsx';
import DelayedPanel from '../delayed-panel/DelayedPanel.jsx';

const main = props => {
    return (
        <div className={props.classes.main}>
            <Logo />
            <DelayedPanel />
        </div>
    );
}

export default withStyles(styles) (main);