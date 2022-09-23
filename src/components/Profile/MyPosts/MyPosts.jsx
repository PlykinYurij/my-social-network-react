import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
            <Post message="Привет, как дела?" likesCount="15" />
            <Post message="Мой первый пост" likesCount="16" />

        </div>

    );
}

export default MyPosts;