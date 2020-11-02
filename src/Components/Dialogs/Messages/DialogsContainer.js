import Dialogs from "../Dialogs";
import { sendMessageCreator } from "../../../redux/DialogsReducer";
import { connect } from "react-redux";
import { withAuthRedirect } from '../../../hoc/WithAuthRedirect';
import { compose } from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.DialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)



