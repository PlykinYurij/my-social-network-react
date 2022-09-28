import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div>
            <NavLink className={classes.message}>{props.message}</NavLink>
        </div>
    )
}


export default Message;