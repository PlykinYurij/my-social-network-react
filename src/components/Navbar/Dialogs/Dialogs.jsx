import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog + " " + classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>

    )
}

const Messeng = (props) => {
    return (
        <div>
            <NavLink className={classes.messeng}>{props.messeng}</NavLink>
        </div>
    )
}


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems} >
                <DialogItem name="Valera" id="1" />
                <DialogItem name="Alina" id="2" />
                <DialogItem name="Yura" id="3" />

            </div>
            <div className={classes.messenges}>
                <Messeng messeng="Hello!" />
                <Messeng messeng="How are you?" />
                <Messeng messeng="I'm good" />

            </div>
        </div>
    )
}

export default Dialogs;