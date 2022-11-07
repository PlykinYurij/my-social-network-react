import React from "react";
import { connect } from "react-redux";
import {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers
} from "../../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import { userAPI } from "../../api/api";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (page) => {
        this.props.getUsers(page, this.props.pageSize)
    }
    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInPropress={this.props.followingInPropress}

            />
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInPropress: state.usersPage.followingInPropress,

    }
}



export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)