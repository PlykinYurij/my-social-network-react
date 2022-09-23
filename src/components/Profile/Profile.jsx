import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div>
        <img className={classes.footerPicter} src="https://img2.goodfon.ru/original/3360x1050/1/8d/gory-vershiny-dolina-reka-les.jpg" />
      </div>
      <div>
        ava + desp
      </div>
      <MyPosts />
    </div>
  )
}
export default Profile;