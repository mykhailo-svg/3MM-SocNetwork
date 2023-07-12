
import './User_about.scss';


import React from 'react';

import prsonIcon from '../../../img/person-ic.svg';

import birthIcon from '../../../img/birth-ic.svg';
import placeIcon from '../../../img/place-ic.svg';
import mailIcon from '../../../img/Mail-ic.svg';
import phoneIcon from '../../../img/phone-ic.svg';


const User_about = (props) => {

    let userInfo = props.userData;

    return (

        <section className="about">
            <div className="about__title"></div>
            <ul className="about__list">
                <li className="about__item"> <img src={prsonIcon} alt="" />{userInfo.Gender}</li>
                <li className="about__item"> <img src={birthIcon} alt="" />{userInfo.Born}</li>
                <li className="about__item"> <img src={placeIcon} alt="" />{userInfo.Place}</li>
                <li className="about__item"> <img src={mailIcon} alt="" />{userInfo.Mail}</li>
                <li className="about__item"> <img src={phoneIcon} alt="" />{userInfo.Phone}</li>

                
            </ul>
        </section>


    )
}
export default User_about;