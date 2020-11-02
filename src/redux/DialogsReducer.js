const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    text: [
        { text: 'Hi!', id: 1 },
        { text: 'Hello!', id: 2 },
        { text: 'Bye', id: 3 },
        { text: 'Good morning!', id: 4 }
    ],
    name: [
        { name: 'Stanislav', id: 1 },
        { name: 'Alex', id: 2 },
        { name: 'Mihail', id: 3 },
        { name: 'Sasha', id: 4 },
        { name: 'Dasha', id: 5 },
        { name: 'Vladislav', id: 6 },
    ]
}

const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody;
            return {
                ...state,
                text: [...state.text, { id: 6, text: body }]
            }
        }
        default: {
            return state;
        }
    }
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });

export default DialogsReducer;
