import React from "react";
import s from "./styleUsers.module.css";
import userPhoto from '../../assets/images/user.jpg';
import { NavLink } from "react-router-dom";
import * as axios from 'axios';
import { usersAPI } from "../../api/api";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => { props.onPageChange(p) }} className={(props.currentPage === p) && s.selectedPage}> {p} </span>
            })}
        </div>
        {
            props.users.map(i => <div key={i.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + i.id}>
                            <img src={i.photos.small != null ? i.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>
                    <div>
                        {
                            i.followed ?
                                <button onClick={() => {
                                    props.unfollow(i.id);
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                   props.follow(i.id);
                                }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{i.name}</div>
                        <div>{i.status}</div>
                    </span>
                    <span>
                        <div>{'i.location.city'}</div>
                        <div>{'i.location.country'}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}
export default Users;