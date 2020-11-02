import s from "./DialogItems/DialogItems.module.css";
import React from "react";
import Dialog from "./DialogItems/DialogItems";
import Message from "./Messages/Messages";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from "../common/FormControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validator";

let maxLength50 = maxLengthCreator(50);

const Dialogs = (props) => {

    let NameElements = props.dialogs.name.map(elem => {
        return (<Dialog name={elem.name} id={elem.id} />);
    });

    let TextElements = props.dialogs.text.map(elem => {
        return (<Message text={elem.text} id={elem.id} />)
    });

    if (!props.isAuth) {
        return <Redirect to={'/login'} />
    };

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {NameElements}
            </div>
            <div className={s.messages}>
                {TextElements}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    );
}
//40:23 - 77
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field
                        component={Textarea}
                        name="newMessageBody"
                        validate={[required, maxLength50]}
                        placeholder={"Enter your message"} />
                </div>
                <div>
                    <button>
                        Send
                    </button>
                </div>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default Dialogs;


