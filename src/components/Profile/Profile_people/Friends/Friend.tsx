import React from "react";

import postAvatar from "../../../../img/avatar.jpg";

type typeFriendProps = {
  name: string;
  friend_state: string;
  time: string;
};

const Friend: React.FC<typeFriendProps> = ({ name, friend_state, time }) => {
  return (
    <div className="people__active-item">
      <div className="people__active-avatar">
        <img src={postAvatar} alt="" />
      </div>
      <div className="people__active-info">
        <div className="people__active-name">{name}</div>
        <div className="people__active-state">{friend_state}</div>
      </div>
      <div className="people__active-time">{time}</div>
    </div>
  );
};
export default Friend;
