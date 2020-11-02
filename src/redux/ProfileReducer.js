import { profileAPI } from "../api/api";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {
            id: '1',
            ava: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
            text: 'Post1'
        },
        {
            id: '2',
            ava: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
            text: 'Post2'
        },
        {
            id: '3',
            ava: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
            text: 'Post3'
        },
        {
            id: '4',
            ava: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
            text: 'Post4'
        },
        {
            id: '5',
            ava: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
            text: 'Post5'
        },
        {
            id: '6',
            ava: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
            text: 'Post6'
        },
    ],
    profile: null,
    status: ""
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                ava: 'https://cdn.collider.com/wp-content/uploads/2017/05/spongebob-squarepants-season-12.jpg',
                text: action.postText
            };
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default: {
            return state;
        }
    }
}

export const addPostActionCreator = (postText) => ({ type: ADD_POST, postText });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const setUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.setUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            });
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}


export default ProfileReducer;