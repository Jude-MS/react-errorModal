import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';

const ErrorModal = (props) => {


    const Backdrop = (props) => {
        return <div className={classes.backdrop} onClick={props.onConfirm} />
    }

    const Modal = (props) => {
        return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button name="Okay" onClick={props.onConfirm} />
        </footer>
    </Card>
    }

    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<Modal title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('modal-root'))}
        </Fragment>
    )
}

export default ErrorModal;
