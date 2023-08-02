//@ts-nocheck
import React, { useEffect, useRef } from "react";
import Person from "../Person";
import loader from '../../../../img/people_loader.svg'

import { useDispatch } from "react-redux";
import { actions } from "../../../../redux/slices/Messages/people_slice.slice";
import { useActions } from "../../../../hooks/useActions";



const PersonItems: React.FC = () => {
    
    const {fetchUsers} = useActions()
    const loaderContainer: any = useRef(null);
    let peopleItems = [];
    let peopleinfo:any = [];
   
    
   
    const getAllUsers = () =>{
        try{
        
           fetchUsers()
        }
        catch(error){
            alert(error);
            
        }
    }
    
    

      if (peopleinfo) {
        peopleItems = peopleinfo.map((item: any) => {
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

                {/* {peopleItems} */}

            </div>


            <div ref={loaderContainer} className="people__show-more">
                <button onClick={getAllUsers} className="people__show-more-button">Show more</button>
                <div className="people__loader-container"><img src={loader} alt="" className="people__loader" /></div>
            </div>
        </div>





    )
}
export default PersonItems;



