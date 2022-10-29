import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let state = props.profilePage
    const postsElements = state.posts.map((post) => <Post message={post.message}  key={post.id} likesCount={post.likesCount} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.upDateNewPost (text);

    }
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={state.newPostText} /></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            {postsElements}

        </div>

    );
}

export default MyPosts;