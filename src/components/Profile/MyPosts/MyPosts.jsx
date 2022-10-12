import React from "react";
import { appDateActionCreate, upDateNewPostTextActionCreate } from "../../../Redux/state";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.posts.map((post) => <Post message={post.message} likesCount={post.likesCount} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch (appDateActionCreate());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch (upDateNewPostTextActionCreate (text));

    }
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.posts.newPostText} /></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            {postsElements}

        </div>

    );
}

export default MyPosts;