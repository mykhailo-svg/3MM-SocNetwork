
import React, { useCallback, useEffect, useRef } from "react";
import Person from "../Person";
import loader from '../../../../img/people_loader.svg'
import errorSmile from '../../../../img/error-smile.svg';
import { useActions } from "../../../../hooks/useActions";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import { log } from "console";



const PersonItems: React.FC = () => {

    const { fetchUsers } = useActions();

    let { isLoading, People, error } = useTypedSelector((state) => state.people_reducer);

    let peopleInfo = People;


    const usersListElement = useRef<null | HTMLDivElement>(null);
    const loaderContainer: any = useRef(null);
    let peopleItems: any = [];
    // let peopleinfo:any = [];



    const getAllUsers = async() => {

        try {

           fetchUsers(peopleInfo.length)
           
        }
        catch (error) {
            alert(error);


        }
        finally{
             
              
                usersListElement.current?.scrollTo(0, usersListElement.current.scrollHeight);
           
        }
    }

   console.log("hi");
    

    if (peopleInfo) {
        peopleItems = peopleInfo.map((item: any) => {
            if (item.follow == "Follow") {
                return <Person key={item.id} _id={item._id} occupation={item.occupation} name={item.name} follow={item.follow} />
            }
            else {
                return <Person key={item.id} _id={item._id} occupation={item.occupation} name={item.name} follow={item.follow} />
            }
        })
        usersListElement.current?.scrollTo(0, usersListElement.current.scrollHeight)
    }






    return (
        

        <div className="people__discover">
            {
                !isLoading ?  usersListElement.current?.scrollTo(0, usersListElement.current.scrollHeight) 
                 : loaderContainer.current.classList.toggle("loader_active")
            }
            {
                

                !error ? (
                    <div className="people__list" ref={usersListElement}>

                        {peopleItems}

                    </div>
                )
                    :
                    <div className="people_error">
                        <img src={errorSmile} alt="" className="people_error__smile" />
                        Something went wrong:{'('}
                    </div>
            }



            <div ref={loaderContainer} className={isLoading ? "people__show-more loader_active" : "people__show-more"} >
                <button onClick={getAllUsers} className="people__show-more-button">Show more</button>
                <div className="people__loader-container"><img src={loader} alt="" className="people__loader" /></div>
            </div>
        </div>





    )
}
export default PersonItems;



