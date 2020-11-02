import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/ProfileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return{
        posts: state.Profile.posts,
        newPostText: state.Profile.newPostText
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
        addNewPost: (postText) =>{
            dispatch(addPostActionCreator(postText));
        }
    }
}

let PostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts);

export default PostsContainer;