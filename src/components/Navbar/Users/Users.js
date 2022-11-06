import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../../assets/images/avatar2.png";
import classes from "./Users.module.css"
import { userAPI } from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div className={classes.pageList}>
            {
                pages.map(page => <span className={props.currentPage === page && classes.selectPage}
                    onClick={() => { props.onPageChanged(page) }}>{page}-</span>)
            }

        </div>
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
                                props.unfollow (user.id)
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