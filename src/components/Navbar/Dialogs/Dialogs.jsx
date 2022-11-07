import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message"
import DialogItem from "./DialogsItem/DialogItem";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    const dialogElements = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar} />)
    const messageElements = state.messageData.map((message) => <Message message={message.message} key={message.id}/>)
    let newMessageElement = React.createRef();
    let onSendMassageClick = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessage(text);
    }

    if (!props.isAuth) {
        return <Navigate to={"/login"} />
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea></div>
                <div><button onClick={onSendMassageClick}>Add</button></div>
                
            </div>
        </div>
    )
}

export default Dialogs;