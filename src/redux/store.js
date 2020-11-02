import ProfileReducer from "./ProfileReducer";
import DialogsReducer from "./DialogsReducer";

const personalPhoto = 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg';

let store = {
    _state: {
        Profile: {
            personalPhoto: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
            posts: [
                {
                    id: '1',
                    ava: personalPhoto,
                    text: 'Post1'
                },
                {
                    id: '2',
                    ava: personalPhoto,
                    text: 'Post2'
                },
                {
                    id: '3',
                    ava: personalPhoto,
                    text: 'Post3'
                },
                {
                    id: '4',
                    ava: personalPhoto,
                    text: 'Post4'
                },
                {
                    id: '5',
                    ava: personalPhoto,
                    text: 'Post5'
                },
                {
                    id: '6',
                    ava: personalPhoto,
                    text: 'Post6'
                },
            ],
            newPostText: 'Default-text'
        },
        DialogsPage: {
            text: [
                {text: 'Hi!', id: 1},
                {text: 'Hello!', id: 2},
                {text: 'Bye', id: 3},
                {text: 'Good morning!', id: 4}
            ],
            name: [
                {name: 'Stanislav', id: 1},
                {name: 'Alex', id: 2},
                {name: 'Mihail', id: 3},
                {name: 'Sasha', id: 4},
                {name: 'Dasha', id: 5},
                {name: 'Vladislav', id: 6},
            ],
            newTextMessage: ' '
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;  
    },

    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.Profile = ProfileReducer(this._state.Profile, action);
        this._state.DialogsPage = DialogsReducer(this._state.DialogsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
