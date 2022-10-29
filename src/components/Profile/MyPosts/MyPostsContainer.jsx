import React from "react";
import { appDateActionCreate, upDateNewPostTextActionCreate } from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState().profilePage;
//                     let onAddPost = () => {
//                         store.dispatch(appDateActionCreate());
//                     }

//                     let onPostChange = (text) => {
//                         store.dispatch(upDateNewPostTextActionCreate(text));

//                     }
//                     return <MyPosts profilePage={state} upDateNewPost={onPostChange} addPost={onAddPost} />
//                 }
//             }
//         </StoreContext.Consumer>
//     )

// }

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        upDateNewPost: (text) => {dispatch(upDateNewPostTextActionCreate(text))},
        addPost: () => {dispatch(appDateActionCreate())}

    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;