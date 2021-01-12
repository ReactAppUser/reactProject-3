import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, unfollow,  toggleFollowingProgress, getUsers} from "../../redux/users-reducer";
import { getUsers2, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress} from "../../redux/users-selectors";
import Users from "./Users";
import Preloader from "../common/Preloader/preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsers(currentPage, pageSize);
       }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
       this.props.getUsers(pageNumber, pageSize);
    }
              

    render() {
        return <>

            {this.props.isFetching ?
                <Preloader /> : null}

            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

// let mapStateToProps = (state) => {
    // return {
        // users: state.usersPage.users,
        // pageSize: state.usersPage.pageSize,
        // totalUsersCount: state.usersPage.totalUsersCount,
        // currentPage: state.usersPage.currentPage,
        // isFetching: state.usersPage.isFetching,
        // followingInProgress: state.usersPage.followingInProgress,
    // }
// }

let mapStateToProps = (state) => {
    return {
        users: getUsers2(state),
        // users:  getUsersSuper(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}


export default compose(
     connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}))(UsersContainer)