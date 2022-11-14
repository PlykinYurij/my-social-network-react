import React from "react";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message"
import DialogItem from "./DialogsItem/DialogItem";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormControl/FormsControl";
import { maxLengthCreator, required } from "../../../utils/validator/validators";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    const dialogElements = state.dialogsData.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} avatar={dialog.avatar} />)
    const messageElements = state.messageData.map((message) => <Message message={message.message} key={message.id} />)

    const addNewMessage = (values) => {
       props.sendMessage(values.newMessageBody)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div> <AddMessageFormRedux onSubmit={addNewMessage} /></div>


            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"newMessageBody"} placeholder={"Enter your message"}
                validate={[required, maxLengthCreator(50)]}></Field>
            </div>
            <div>
                <button >Send</button>
            </div>
        </form>
    )
}


const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(AddMessageForm)

export default Dialogs;