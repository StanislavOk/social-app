import React from "react";
import Users from "./Users.js";
import { connect } from "react-redux";
import { follow, unfollow, getUsersThunkCreator, setCurrentPage} from "../../redux/UsersReduser";
import Preloader from "../common/Preloader/Preloader.js";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/WithAuthRedirect.js";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

class UsersContainer extends React.Component {

    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />;
        </>
    }
}

export default compose(
    withAuthRedirect,
    connect(
        mapStateToProps, 
        { follow, unfollow, setCurrentPage, 
            getUsers: getUsersThunkCreator })
    )(UsersContainer);