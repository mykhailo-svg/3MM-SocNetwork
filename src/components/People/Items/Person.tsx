import React from "react";

import person_avatar from '../../../img/empty_avatar.svg'
import { NavLink } from "react-router-dom";


type TypePersonProps = {
    id: number
    name: string
    occupation: string
    follow: string
    
}



const Person: React.FC<TypePersonProps> = ({ name, occupation, id, follow}) => {

    let action = () => {
        
    }


    return (

        <div className="people__item">
            <NavLink to={'/user/1223'} className="people__item-container">
                <div className="people__item-avatar">
                    <img src='https://drive.google.com/uc?export=view&id=0B6wwyazyzml-OGQ3VUo0Z2thdmc' alt="" />
                </div>
                <div className="people__item-info">
                    <div className="people__item-info-name">{name}</div>
                    <div className="people__item-info-occupation">{occupation}</div>
                </div>
            </NavLink>

            <button onClick={action} className="people__item-action">{follow}</button>


        </div>







    )
}
export default Person;



