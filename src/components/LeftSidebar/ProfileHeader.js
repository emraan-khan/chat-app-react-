import React from "react";

function ProfileHeader({ user }) {
  return (
    <>
      <div className="left-header">
        <img className="avatar" src={user.image} alt="profile-pic" />
        
      </div>
    </>
  );
}

export default ProfileHeader;