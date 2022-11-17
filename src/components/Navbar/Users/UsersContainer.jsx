import React from "react";
import { connect } from "react-redux";
import {
    follow, unfollow, setCurrentPage,
    toggleFollowingProgress, getUsers
} from "../../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import withAuthRedirect from "../../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getCurrentPage, getFollowingInPropress, getIsFetching, getPageSize, getTotalUsersCount, getUsersPage } from "../../../Redux/users-selectors";

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
        users: getUsersPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInPropress: getFollowingInPropress(state),

    }
}





export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress, getUsers
    }),
    withAuthRedirect
)(UsersContainer)