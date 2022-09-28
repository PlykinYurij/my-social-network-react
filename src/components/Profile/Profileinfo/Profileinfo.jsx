import React from "react";
import classes from "./Profileinfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.profileInfoBlock}>
            <div>
                <img className={classes.footerPicter} src="https://img2.goodfon.ru/original/3360x1050/1/8d/gory-vershiny-dolina-reka-les.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatarBlock}>
                    <img src="https://i1.sndcdn.com/avatars-000304187408-ujccd9-t500x500.jpg"></img>
                </div>
                <div className={classes.infoBlock}>
                    <p>Yura Plykin</p>
                    <p>Age: 25</p>
                    <p>My hobbies: frontend</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;