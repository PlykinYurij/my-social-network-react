import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)

    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>
            </div>
           {postsElements}

        </div>

    );
}

export default MyPosts;