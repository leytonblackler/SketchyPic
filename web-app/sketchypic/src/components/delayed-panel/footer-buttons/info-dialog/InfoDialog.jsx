import React from 'react';
import styles from './InfoDialog.styles';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

const contentText = (
    <React.Fragment>
        <p>SketchyPic is an individual engineering research honours project conducted as part of fulfilment of the fourth year of the Victoria University of Wellington Bachelor of Engineering with Honours degree. The underlying purpose of the project is to showcase the skills learnt during the degree and to demonstrate independant and critical thinking.</p>
        <p>The aim of the project is to research and utilise state of the art deep learning techniques in order to design, implement and evaluate a system capable of creating high quality line drawings based on given ordinary photographs.</p>
    </React.Fragment>
);

const infoDialog = props => {
    return (
        <Dialog open={props.open} disableRestoreFocus={true} PaperProps={{style: {borderRadius: 20, width: 400}}}>
            <DialogTitle className={props.classes.titleContainer}>
                <div className={props.classes.titleContents}>
                    <h3>What is SketchyPic?</h3>
                    <IconButton className={props.classes.closeButton} onClick={props.onClose}>
                        <Icon path={mdiClose} size={'30px'} color="black"/>
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent className={props.classes.contentContainer}>
                <div>{contentText}</div>
            </DialogContent>
        </Dialog>
    );
}

export default withStyles(styles) (infoDialog);