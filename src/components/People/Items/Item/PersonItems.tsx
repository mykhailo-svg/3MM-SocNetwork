import React, { useEffect } from "react";
import Person from "../Person";
import axios from "axios";
import loader from '../../../../img/people_loader.svg'
type TypePersonItemsProps = {


    PeopleData: Array<any>

    Follow: () => void

    UnFollow: () => void

    SetUsers: (users: any) => void

    firstPeopleLoad: () => void

    updateUsersFetch: (loader: any) => void


}



const PersonItems: React.FC<TypePersonItemsProps> = ({ Follow, UnFollow, SetUsers, PeopleData, firstPeopleLoad, updateUsersFetch }) => {
    debugger

    let peopleInfo = PeopleData;
    const loaderContainer: any = React.createRef();

    let setUsers = (users: any) => {
        SetUsers(users);
    }

    let updateUsers = () => {
        updateUsersFetch(loaderContainer.current)
    }



    firstPeopleLoad()






    let peopleItems = peopleInfo.map((item: any) => {
        if (item.follow == "Follow") {
            return <Person key={item.id} func={UnFollow} id={item.id} occupation={item.occupation} name={item.name} follow={item.follow} />
        }
        else {
            return <Person key={item.id} func={Follow} id={item.id} occupation={item.occupation} name={item.name} follow={item.follow} />
        }
    })


    return (


        <div className="people__discover">

            <div className="people__list">

                {peopleItems}

            </div>


            <div ref={loaderContainer} className="people__show-more">
                <button onClick={updateUsers} className="people__show-more-button">Show more</button>
                <div className="people__loader-container"><img src={loader} alt="" className="people__loader" /></div>
            </div>
        </div>





    )
}
export default PersonItems;



