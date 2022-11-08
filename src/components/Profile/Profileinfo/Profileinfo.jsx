import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./Profileinfo.module.css";
import Status from "./Status";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={classes.profileInfoBlock}>
            <div>
                <img className={classes.footerPicter} src="https://img2.goodfon.ru/original/3360x1050/1/8d/gory-vershiny-dolina-reka-les.jpg" />
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatarBlock}>
                    <img src={props.profile.photos.large}></img>
                </div>
                <div className={classes.infoBlock}>
                    <p>{props.profile.fullName}</p>
                    <Status status="Hello world" />
                    <p>Обо мне: {props.profile.aboutMe}</p>
                    <p>Контакты: 
                    <p>vk: {props.profile.contacts.vk}</p>
                    <p>instagram: {props.profile.contacts.instagram}</p>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;