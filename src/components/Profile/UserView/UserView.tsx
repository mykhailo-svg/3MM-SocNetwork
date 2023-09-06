import "../Profile.scss";

import React from "react";

import User_cover from "../User_cover/User_cover";
import User_about from "../User_about/User_about";
import MyPosts from "../Posts/MyPosts";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { useActions } from "../../../hooks/useActions";

const UserView: React.FC = () => {
  const { fetchUserById } = useActions();

  const userInfo = useTypedSelector((state) => state.user_reducer.About);
  const userPosts = useTypedSelector((state) => state.profile_reducer.Posts);

  fetchUserById(useParams().id);

  return (
    <div className="_container">
      <section className="cover">
        <User_cover userCoverInfo={userInfo} />
      </section>

      <div className="profile__main-row">
        <User_about userData={userInfo} />

        <section className="posts__container dark-block">
          <MyPosts myPostsData={userPosts} />
        </section>
      </div>
    </div>
  );
};

export default UserView;
