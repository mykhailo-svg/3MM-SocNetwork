import React, { ReactNode, useEffect, useRef } from "react";
import Person from "../Person";

import errorSmile from "../../../../img/error-smile.svg";
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";

import { CircularProgress } from "@mui/material";

interface interfacePerson {
  _id: number;
  name: string;
  occupation: string;
  follow: string;
}

const PersonItems: React.FC = () => {
  const { fetchUsers } = useActions();

  const { isLoading, People, error } = useTypedSelector(
    (state) => state.people_reducer
  );

  const peopleInfo = People;

  const usersListElement = useRef<null | HTMLDivElement>(null);

  let peopleItems: ReactNode = [];

  const getAllUsers = async () => {
    try {
      fetchUsers(peopleInfo.length);
    } catch (error) {
      alert(error);
    }
  };

  if (peopleInfo) {
    peopleItems = peopleInfo.map((item: interfacePerson) => {
      if (item.follow == "Follow") {
        return (
          <Person
            key={item._id}
            _id={item._id}
            occupation={item.occupation}
            name={item.name}
            follow={item.follow}
          />
        );
      } else {
        return (
          <Person
            key={item._id}
            _id={item._id}
            occupation={item.occupation}
            name={item.name}
            follow={item.follow}
          />
        );
      }
    });
    usersListElement.current?.scrollTo(
      0,
      usersListElement.current.scrollHeight
    );
  }

  useEffect(() => {
    if (!isLoading) {
      usersListElement.current?.scrollTo(
        0,
        usersListElement.current.scrollHeight
      );
    }
  }, [isLoading]);

  return (
    <div className="people__discover">
      {!error ? (
        <div className="people__list" ref={usersListElement}>
          {peopleItems}
        </div>
      ) : (
        <div className="people_error">
          <img src={errorSmile} alt="" className="people_error__smile" />
          Something went wrong:{"("}
        </div>
      )}

      <div
        className={
          isLoading ? "people__show-more loader_active" : "people__show-more"
        }
      >
        <button
          onClick={() => {
            getAllUsers();
          }}
          className="people__show-more-button"
        >
          Show more
        </button>
        <div className="people__loader-container">
          {isLoading && (
            <CircularProgress
              thickness={5}
              color="inherit"
              sx={{ color: "#DBCCDD" }}
            />
          )}{" "}
        </div>
      </div>
    </div>
  );
};
export default PersonItems;
