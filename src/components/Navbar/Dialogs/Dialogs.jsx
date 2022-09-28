import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message"
import DialogItem from "./DialogsItem/DialogItem";

const Dialogs = (props) => {
    const dialogElements = props.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    const messageElements = props.messageData.map((message) => <Message message={message.message} />)
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;