import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from "../../Redux/profile-reducer"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId // обращение к юзер айди для того что бы вставлять параметр при вызове аякс запроса
        if (!userId) { userId = 26542 }
        this.props.getUserProfile(userId)
        this.props.getStatus (userId)
    }
    render() {

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth

})



function withRouter(Component) { //хок с помощью которого оборочивается контейнерная компонента с вызовом роутера
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{ location, navigate, params }} />
        )
    }
    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)