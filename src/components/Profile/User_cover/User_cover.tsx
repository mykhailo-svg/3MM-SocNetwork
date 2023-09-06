import { Skeleton } from "@mui/material";

import React from "react";

type typeUser_coverProps = {
  userCoverInfo: {
    Name: String;
    Occupation: String;
  };
};

const User_cover: React.FC<typeUser_coverProps> = ({ userCoverInfo }) => {
  let loading = false;

  return (
    <div className="cover__main">
      <div className="cover__background">
        {loading ? (
          <Skeleton
            variant="rectangular"
            height="100%"
            sx={{ width: "100%" }}
          />
        ) : (
          <img
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Zugpsitze_mountain.jpg?crop=0%2C176%2C3008%2C1654&wid=4000&hei=2200&scl=0.752"
            alt=""
          />
        )}
      </div>

      <div className="cover__info">
        <div className="cover__avatar">
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt=""
          />
        </div>
        <div className="cover__data">
          <div className="cover__name">
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                height="1em"
                sx={{ width: "150px" }}
              />
            ) : (
              userCoverInfo.Name
            )}
          </div>
          <div className="cover__occupation">
            {loading ? (
              <Skeleton
                animation="wave"
                variant="rectangular"
                height="1em"
                sx={{ width: "80px" }}
              />
            ) : (
              userCoverInfo.Occupation
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default User_cover;
