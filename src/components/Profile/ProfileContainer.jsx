import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer"
import {useLocation, useNavigate, useParams} from "react-router-dom"


class ProfileContainer extends React.Component {
    componentDidMount () { 
        let userId = this.props.router.params.userId // обращение к юзер айди для того что бы вставлять параметр при вызове аякс запроса
        if (!userId) {userId = 2}
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
        .then(response => {
            this.props.setUserProfile(response.data)
        });
    }
    render () {
        return (
            <div>
                <Profile {...this.props} profile ={this.props.profile} />

            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})

function withRouter (Component) { //хок с помощью которого оборочивается контейнерная компонента с вызовом роутера
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router = {{location, navigate, params}} />
        )
    }
    return ComponentWithRouterProp;
}


export default connect(mapStateToProps, {setUserProfile}) (withRouter(ProfileContainer));