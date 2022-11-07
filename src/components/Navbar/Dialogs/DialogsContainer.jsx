import React from "react";
import { appDateActionCreateMessage, updateNewMessageTextActionCreate } from "../../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (text) => {dispatch(updateNewMessageTextActionCreate(text))},
        sendMessage: () => {dispatch(appDateActionCreateMessage())}

    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;