import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";


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

    dispatch(action) {
        this._state.profilePage = profileReducer (this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer (this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }


}




export default store;