import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validator/validators";
import { Textarea } from "../../common/FormControl/FormsControl";

const MyPosts = (props) => {
    const onSubmit = (values) => {
        props.addPost(values.NewPostText)
    }
    let state = props.profilePage
    const postsElements = state.posts.map((post) => <Post message={post.message} key={post.id} likesCount={post.likesCount} />)
    return (
        <div className={classes.postsBlock}>
            <h3>My post</h3>
            <AddNewPostFormRedux onSubmit={onSubmit} />
            {postsElements}

        </div>

    );
}

const AddNewPostForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={Textarea} name={"NewPostText"} placeholder={"Enter your post"} 
            validate={[required, maxLengthCreator(10)]} />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>
}

const AddNewPostFormRedux  = reduxForm({
    form: "NewPost"
})(AddNewPostForm)

export default MyPosts;