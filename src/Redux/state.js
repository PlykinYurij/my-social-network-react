const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store = {

    _state: {

        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Valera", avatar: "https://i.pinimg.com/736x/43/78/bf/4378bfa31a36ba9fdf0be29cfe2d5d41.jpg", },
                { id: 2, name: "Alina", avatar: "https://i.pinimg.com/736x/6e/59/89/6e598914c9878826831916f9e59a8a15.jpg", },
                { id: 3, name: "Yura", avatar: "https://img1.freepng.ru/20180514/bgw/kisspng-face-with-tears-of-joy-emoji-laughter-smiley-5af9b443dffb64.8338973915263140519174.jpg", },
                { id: 4, name: "Vovan", avatar: "https://stickerboom.ru/files/2012/03/26/454x5f1a-300x300.png", }
            ],
            newMessageText: "введите сообщение...",

            messageData: [
                { id: 1, message: "Hello!" },
                { id: 2, message: "How are you?" },
                { id: 3, message: "I'm good" },
            ],
        },

        profilePage: {

            posts: [
                { id: 1, message: "Привет, как дела?", likesCount: 15 },
                { id: 2, message: "Мой первый пост", likesCount: 16 },

            ],
            newPostText: "ваш пост"

        }


    },

    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = "";
    },
    _addMessage () {
        let newMessage = {
            id: 4,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messageData.push(newMessage);
        this._callSubscriber(this._state);
        this._state.dialogsPage.newMessageText = "";

    },

    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);

    },

    _updateNewMessageText (newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === "ADD-POST") {
            this._addPost();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._updateNewPostText(action.newText)
        } else if (action.type === "ADD-MESSAGE") {
            this._addMessage();
        } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
            this._updateNewMessageText (action.newText);
        }
    }


}

export const appDateActionCreate = () => {
    return {
        type: ADD_POST
    }
}

export const appDateActionCreateMessage = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const upDateNewPostTextActionCreate = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const updateNewMessageTextActionCreate = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;