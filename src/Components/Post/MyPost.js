import myPost from ".//MyPost.module.css";
import React from "react";

const MyPost = (props) => {
    return (
        <div>
            <li className={myPost.item}>
                <img src={props.ava}/>
                {props.text}
            </li>
        </div>
    );
}
export default MyPost;