import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setAuthData} from "../../redux/Auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setAuthUserData();
    }

    render() {
        return <Header {...this.props} />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, {setAuthUserData: setAuthData })(HeaderContainer);