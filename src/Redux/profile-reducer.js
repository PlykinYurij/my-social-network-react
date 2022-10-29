const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
    posts: [
        { id: 1, message: "Привет, как дела?", likesCount: 15 },
        { id: 2, message: "Мой первый пост", likesCount: 16 },

    ],
    newPostText: "ваш пост"
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

        default: return state;

    }
}

export const appDateActionCreate = () => ({ type: ADD_POST })

export const upDateNewPostTextActionCreate = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;