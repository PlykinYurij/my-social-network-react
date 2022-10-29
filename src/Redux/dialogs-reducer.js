const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let text = state.newMessageText
            return {
                ...state,
                newMessageText: "",
                messageData: [...state.messageData, {id: 4, message: text}]
            }
            // let newMessage = {
            //     id: 4,
            //     message: state.newMessageText
            // };
            // let stateCopy = {...state}
            // stateCopy.messageData = [...state.messageData]
            // stateCopy.messageData.push(newMessage);
            // stateCopy.newMessageText = "";
            // return stateCopy;
    
        case UPDATE_NEW_MESSAGE_TEXT: 
            return {
                ...state,
                newMessageText: action.newText
            }
            // let stateCopy = {...state}
            // stateCopy.newMessageText = action.newText;
            // return stateCopy;
        
        default: return state;
    }
}
export const appDateActionCreateMessage = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreate = (text) => 
        ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer;