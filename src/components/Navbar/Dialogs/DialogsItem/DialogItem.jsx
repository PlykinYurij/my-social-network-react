import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs.module.css";

const setActive = ({isActive}) => isActive ? classes.active : " ";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <div className={classes.avatar}><img src= {props.avatar} alt="avatar" /></div>
            <div><NavLink to={path} className={setActive}>{props.name}</NavLink></div>
        </div>

    )
}

export default DialogItem;