import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message"
import DialogItem from "./DialogsItem/DialogItem";
import { appDateActionCreateMessage, updateNewMessageTextActionCreate } from "../../../Redux/state";

const Dialogs = (props) => {
    const dialogElements = props.dialogsPage.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    const messageElements = props.dialogsPage.messageData.map((message) => <Message message={message.message} />)
    let newMessageElement = React.createRef();
    let addMassage = () => {
        props.dispatch (appDateActionCreateMessage());
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch (updateNewMessageTextActionCreate(text));
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div><textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessageText}></textarea></div>
                <div><button onClick={addMassage}>Add</button></div>
                
            </div>
        </div>
    )
}

export default Dialogs;