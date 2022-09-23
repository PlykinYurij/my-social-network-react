import React from "react";
import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.post}>
            <div className={classes.item}>
                <div><img className={classes.picture} src="https://i1.sndcdn.com/avatars-000304187408-ujccd9-t500x500.jpg" /></div>
                <div><p>{props.message}</p></div>
            </div>
            <span>&#9825; {props.likesCount}</span>
            

        </div>
    )
}

export default Post;