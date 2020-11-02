import m from "./MyPosts.module.css";
import React from "react";
import MyPost from "../../Post/MyPost";
import { reduxForm } from "redux-form";
import { Field } from 'redux-form';
import { maxLengthCreator } from "../../../utils/validators/validator";
import { required } from "../../../utils/validators/validator";
import {Textarea} from '../../../Components/common/FormControls/FormsControls';
const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

    let onAddPost = (values) => {
        props.addNewPost(values.postText);
    }

    let PostElement = props.posts.map(elem => {
        return (<MyPost ava={elem.ava} id={elem.id} text={elem.text} />);
    });

    return (
        <div className='posts'>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={onAddPost} />
            </div>
            <div className={m.items}>
                <ul>
                    {PostElement}
                </ul>
            </div>
        </div>
    )
}

const addPostForm = (props) => {
    return (<div>
        <h1>Add new post: </h1>
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                name='postText'
                placeholder={'Add new post'}
                validate={[required, maxLength10]}
            />
            <div>
                <button>Add Post</button>
            </div>
        </form>
    </div>
    )
}

const AddPostFormRedux = reduxForm({
    form: 'addNewPost'
})(addPostForm);


export default MyPosts;