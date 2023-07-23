import React from "react";

import person_avatar from '../../../img/empty_avatar.svg'


type TypePersonProps = {
    id: number
    name: string
    occupation: string
    follow: string
    func: (id:number) => void;
}



const Person: React.FC<TypePersonProps> = ({ name, occupation, id, follow, func }) => {

    let action = () => {
        func(id)
    }

    // debugger;
    return (

        <div className="people__item">
            <div className="people__item-container">
                <div className="people__item-avatar">
                    <img src={person_avatar} alt="" />
                </div>
                <div className="people__item-info">
                    <div className="people__item-info-name">{name}</div>
                    <div className="people__item-info-occupation">{occupation}</div>
                </div>
            </div>

            <button onClick={action} className="people__item-action">{follow}</button>


        </div>







    )
}
export default Person;



