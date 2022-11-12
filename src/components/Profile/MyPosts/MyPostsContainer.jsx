import React from "react";
import { appDateActionCreate } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(appDateActionCreate(newPostText))}

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;