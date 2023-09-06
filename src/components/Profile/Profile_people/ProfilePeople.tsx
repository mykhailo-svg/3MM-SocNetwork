import React from "react";
import Friend from "./Friends/Friend";

interface TypePerson {
  name: string;
  friend_state: string;
  time: string;
}

type TypeProfilePeopleProps = {
  activePeopleData: TypePerson[];
};

const ProfilePeople: React.FC<TypeProfilePeopleProps> = ({
  activePeopleData,
}) => {
  let activeItems = activePeopleData.map((active: TypePerson) => (
    <Friend
      name={active.name}
      friend_state={active.friend_state}
      time={active.time}
    />
  ));

  return (
    <section className="people">
      <div className="people__might-know"></div>
      <div className="peope__active">
        <div className="people__active-list">{activeItems}</div>
      </div>
    </section>
  );
};
export default ProfilePeople;
