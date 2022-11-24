import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/avatar2.png";
import Paginator from "../../common/Paginator/Paginator";
import classes from "./Users.module.css"

let Users = (props) => {
    return <div>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
         currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
        {
            props.users.map(user => <div key={user.id}>
                <span>
                    <div>
                        <NavLink to={"/profile/" + user.id}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={classes.avatar} />
                        </NavLink>
                    </div>
                    <div>
                        {user.followed
                            ? <button disabled={props.followingInPropress.some(id => id === user.id)} onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button disabled={props.followingInPropress.some(id => id === user.id)} onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}


                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{'user.location.city'}</div>
                        <div>{'user.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;