import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { setUserProfileThunkCreator, getStatus, updateStatus } from "../../redux/ProfileReducer";
import { withRouter } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 8470;
        }
        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.Profile.profile,
    status: state.Profile.status
});

export default compose(
    connect(mapStateToProps,
        { setUserProfile: setUserProfileThunkCreator, getStatus, updateStatus }
    ),
    withRouter,
    /* withAuthRedirect */
)(ProfileContainer)
