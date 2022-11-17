import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

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
                    <div>{props.profile.fullName}</div>
                    <div><ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} /></div>
                    <div>Обо мне: {props.profile.aboutMe}</div>
                    <div>Контакты: 
                    <div>vk: {props.profile.contacts.vk}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;