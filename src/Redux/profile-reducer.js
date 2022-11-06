import { profileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        { id: 1, message: "Привет, как дела?", likesCount: 15 },
        { id: 2, message: "Мой первый пост", likesCount: 16 },

    ],
    newPostText: "ваш пост",
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                newPostText: "",
                posts: [{ id: 5, likesCount: 0, message: text }, ...state.posts]
            }
        // let newPost = {
        //     id: 5,
        //     message: state.newPostText,
        //     likesCount: 0
        // };
        // let stateCopy = { ...state };
        // stateCopy.posts = [...state.posts ];
        // stateCopy.newPostText = {...state.newPostText}
        // stateCopy.posts.push(newPost);
        // stateCopy.newPostText = "";
        // return stateCopy;


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        // let stateCopy = { ...state };
        // stateCopy.newPostText = action.newText;
        // return stateCopy;

        case SET_USER_PROFILE: 
        return {...state, profile: action.profile}

        default: return state;

    }
}

export const appDateActionCreate = () => ({ type: ADD_POST })

export const upDateNewPostTextActionCreate = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getUserProfile(userId)
        .then(data => {
            dispatch (setUserProfile(data))
        });
    }
}
 
export default profileReducer;