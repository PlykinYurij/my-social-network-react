import { profileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    posts: [
        { id: 1, message: "Привет, как дела?", likesCount: 15 },
        { id: 2, message: "Мой первый пост", likesCount: 16 },

    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = action.newPostText;
            return {
                ...state,
                posts: [{ id: 5, likesCount: 0, message: text }, ...state.posts]
            }

        case SET_USER_PROFILE:
            return { ...state, profile: action.profile }

        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }

        default: return state;

    }
}

export const appDateActionCreate = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getUserProfile = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getUserProfile(userId)
                dispatch(setUserProfile(data))
    }
}

export const updateStatus = (status) => {
    return async (dispatch) => {
        let data = await profileAPI.updateStatus(status)
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            }
    }
}


export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data))
            })
    }

}
export default profileReducer;