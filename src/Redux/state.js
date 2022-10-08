let store = {
  
    _state: {
    
        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Valera", avatar: "https://i.pinimg.com/736x/43/78/bf/4378bfa31a36ba9fdf0be29cfe2d5d41.jpg", },
                { id: 2, name: "Alina", avatar: "https://i.pinimg.com/736x/6e/59/89/6e598914c9878826831916f9e59a8a15.jpg", },
                { id: 3, name: "Yura", avatar: "https://img1.freepng.ru/20180514/bgw/kisspng-face-with-tears-of-joy-emoji-laughter-smiley-5af9b443dffb64.8338973915263140519174.jpg",},
                { id: 4, name: "Vovan", avatar: "https://stickerboom.ru/files/2012/03/26/454x5f1a-300x300.png", }
            ],
    
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
    getState () {
        return this._state;
    },
    _callSubscriber ()  {
        console.log ("state changed")
    },
    addPost () {
    
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText= ""
    },
    
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    
    },
    
    subscribe (observer) {
        this._callSubscriber = observer;
    },
}


export default store;