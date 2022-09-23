import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post message="Привет, как дела?" likesCount="15"/>
            <Post message="Мой первый пост" likesCount="16"/>
            
        </div>

    );
}

export default MyPosts;