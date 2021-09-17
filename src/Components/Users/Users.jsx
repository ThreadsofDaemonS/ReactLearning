import React from "react";
import Paginator from "../../common/Paginator/Paginator";
import User from "./User";

let Users = ({
  users,
  onPageChanged,
  currentPage,
  totalUsersCount,
  pageSize,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
      />
      {users.map((u) => (
        <User
          user={u}
          followingInProgress={props.followingInProgress}
          unfollow={props.unfollow}
          follow={props.follow}
        />
      ))}
    </div>
  );
};

export default Users;
