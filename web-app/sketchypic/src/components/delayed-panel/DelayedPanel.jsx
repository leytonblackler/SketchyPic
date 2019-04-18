import React, { Component } from 'react';
import styles from './DelayedPanel.styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import FooterButtons from './footer-buttons/FooterButtons.jsx';

class DelayedPanel extends Component {

    state = {
        delayFinished: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({delayFinished: true}), 0);
    }

    render() {
        return this.state.delayFinished ? (
            <Fade in={true} timeout={1500}>
                <div className={this.props.classes.main}>
                    <div className={this.props.classes.content}>
                        <span>Coming soon...</span>
                    </div>
                    <FooterButtons />
                </div>
            </Fade>
        ) : null;
    }
}

export default withStyles(styles) (DelayedPanel);