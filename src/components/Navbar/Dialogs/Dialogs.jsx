import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message"
import DialogItem from "./DialogsItem/DialogItem";

const Dialogs = (props) => {
    const dialogElements = props.state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    const messageElements = props.state.messageData.map((message) => <Message message={message.message} />)
    let newMessageElement = React.createRef();
    let addMassage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div><textarea ref={newMessageElement}></textarea></div>
                <div><button onClick={addMassage}>Add</button></div>
                
            </div>
        </div>
    )
}

export default Dialogs;