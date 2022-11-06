import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData, authMe } from "../../Redux/auth-reducer";
import { headerAPI } from "../api/api";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authMe()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect (mapStateToProps, {setAuthUserData, authMe}) (HeaderContainer);