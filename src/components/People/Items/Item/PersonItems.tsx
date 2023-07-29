//@ts-nocheck

import React, { useEffect } from "react";
import Person from "../Person";
import axios from "axios";
import loader from '../../../../img/people_loader.svg'
import { useGetUsersQuery } from "../../../../redux/api/api";
import { useDispatch } from "react-redux";
type TypePersonItemsProps = {


    PeopleData: Array<any>

    Follow: () => void

    UnFollow: () => void

    SetUsers: (users: any) => void

    firstPeopleLoad: () => void

    updateUsersFetch: (loader: any) => void


}



const PersonItems: React.FC = (props) => {

    const { isLoading, data, refetch } = useGetUsersQuery();
    let dispatch  = useDispatch();

    let update_users = () =>{
           
        
        alert(data);
    }

    // if (isLoading) {
    //     alert("loading")
    // }
    // else{
    //     alert("loaded")
    // }


    const loaderContainer: any = React.createRef();



    let updateUsers = () => {
        // updateUsersFetch(loaderContainer.current)
    }









    let peopleItems;

    if (data) {
        peopleItems = data.map((item: any) => {
            if (item.follow == "Follow") {
                return <Person key={item.id} id={item.id} occupation={item.occupation} name={item.name} follow={item.follow} />
            }
            else {
                return <Person key={item.id} id={item.id} occupation={item.occupation} name={item.name} follow={item.follow} />
            }
        })

    }



    return (


        <div className="people__discover">

            <div className="people__list">

                {peopleItems}

            </div>


            <div ref={loaderContainer} className="people__show-more">
                <button onClick={update_users} className="people__show-more-button">Show more</button>
                <div className="people__loader-container"><img src={loader} alt="" className="people__loader" /></div>
            </div>
        </div>





    )
}
export default PersonItems;



