import React from "react";

const UsersInfo = ({ user }) => {
  return (
    <div className="all-users">
      <img src={user.picture.large} alt="" />
      <div className="users-info">
        <h3>
          {user.name.first} {user.name.last}
        </h3>
        <p className="user-mail">Mail: {user.email}</p>
        <p className="user-location">{user.location.country} - {user.location.city}</p>
        <p className="phone">{user.cell}</p>
      </div>
    </div>
  );
};

export default UsersInfo;
