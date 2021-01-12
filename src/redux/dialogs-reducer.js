const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Piter'},
        {id: 2, name: 'Nasty'},
        {id: 3, name: 'Nick'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Marina'},
        {id: 6, name: 'Nika'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your girl?'},
        {id: 3, message: 'Hello'},
        {id: 4, message: 'Nice!'},
        {id: 5, message: 'Yo'}
    ],
    
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}],
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;