import React from 'react';
import Paginator2 from '../common/Paginator/Paginator2.jsx';
import User from './User';

let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props }) => {
    return <div>
        <Paginator2 currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize} totalUsersCount={totalUsersCount} />
        <div>
        {
            users.map(u => <User user={u} followingInProgress={props.followingInProgress}
                unfollow={props.unfollow} follow={props.follow} key={u.id} />
            )

        }
        </div>
    </div>
}

export default Users;