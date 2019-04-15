import React from 'react';
import styles from './Logo.styles';
import { withStyles } from '@material-ui/core/styles';

const logo = props => {
    return (
        <div>
            this is logo
        </div>
    );
}

export default withStyles(styles) (logo);