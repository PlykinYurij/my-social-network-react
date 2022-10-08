import React from "react";
import { addPost } from "../../Redux/state";
import MyPosts from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.profilePage.posts}
               addPost={props.addPost}
               newPostText={props.profilePage.newPostText}
               updateNewPostText={props.updateNewPostText} />
    </div>
  )
}
export default Profile;