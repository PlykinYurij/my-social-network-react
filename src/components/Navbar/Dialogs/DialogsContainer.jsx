import React from "react";
import { appDateActionCreateMessage, updateNewMessageTextActionCreate } from "../../../Redux/dialogs-reducer";
// import StoreContext from "../../../StoreContext";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().dialogsPage;

//                     let onSendMassageClick = () => {
//                         store.dispatch(appDateActionCreateMessage());
//                     }

//                     let onMessageChange = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreate(text));
//                     }
//                     return <Dialogs updateNewMessage={onMessageChange} sendMessage={onSendMassageClick} dialogsPage={state} />

//                 }
//             }
//         </StoreContext.Consumer>
//     )

    
// }

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
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