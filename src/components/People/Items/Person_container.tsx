import React from "react";

import person_avatar from '../../../img/people_1.jpg'


const Item = () => {
    return (

            <div className="people__item">
                <div className="people__item-container">
                    <div className="people__item-avatar">
                        <img src={person_avatar} alt="" />
                    </div>
                    <div className="people__item-info">
                        <div className="people__item-info-name">Charles Deosd</div>
                        <div className="people__item-info-occupation">UI/UX Designer</div>
                    </div>
                </div>

                <button className="people__item-action">Follow</button>


            </div>







    )
}
export default Item;



