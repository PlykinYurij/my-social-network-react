import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
// import classes from "./Profile.module.css";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  )
}
export default Profile;