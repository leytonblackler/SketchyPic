import React, { Component } from 'react';
import styles from './Main.styles';
import { withStyles } from '@material-ui/core/styles';
import posed from 'react-pose';
import Logo from '../logo/Logo.jsx';
import DelayedPanel from '../delayed-panel/DelayedPanel.jsx';

// const LogoContainer = posed.div({
//     initial: {marginTop: 'calc((100vh / 2) - 110px)'},
//     shifted: {marginTop: 100}
// });

const LogoContainer = posed.div({
    initial: {
        marginTop: (window.innerHeight / 2) - 110
    },
    shifted: {
        marginTop: (window.innerHeight / 8),
        transition: {
            duration: 1500,
            ease: 'easeOut',
        }
    }
});

class Main extends Component {

    state = {
        shiftLogo: false
    }

    componentDidMount() {
        setTimeout(() => this.setState({ shiftLogo: true }), 8000);
    }

    render() {
        
        return (
            <div className={this.props.classes.main}>
    
                <LogoContainer pose={this.state.shiftLogo ? 'shifted' : 'initial'}>
                    <Logo className={this.props.classes.logo}/>
                </LogoContainer>
                <DelayedPanel />
                
            </div>
        );
    }
}

export default withStyles(styles) (Main);