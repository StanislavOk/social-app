import React from 'react';
import s from './DialogItems.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog_item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;