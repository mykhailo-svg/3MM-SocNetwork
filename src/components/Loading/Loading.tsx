import { CircularProgress } from "@mui/material";
import "./Loading.scss";
import React, { useState } from "react";

interface ILoadingProps {
  isLoading: boolean;
}

const Loading: React.FC<ILoadingProps> = ({ isLoading }) => {
  return (
    <div className="loader__container">
      <div className="loader__item">
        {isLoading && (
          <CircularProgress
            thickness={5}
            color="inherit"
            sx={{ color: "#A303A0" }}
          />
        )}
      </div>
    </div>
  );
};
export default Loading;
