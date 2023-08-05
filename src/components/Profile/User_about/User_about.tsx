import React from 'react';

import prsonIcon from '../../../img/person-ic.svg';

import birthIcon from '../../../img/birth-ic.svg';
import placeIcon from '../../../img/place-ic.svg';
import mailIcon from '../../../img/Mail-ic.svg';
import phoneIcon from '../../../img/phone-ic.svg';

type typeUserAboutProps = {


    userData: {
        Gender: string,
        Born: string,
        Place: string,
        Mail: string,
        Phone: string,
    }


}

const User_about: React.FC<typeUserAboutProps> = ({ userData }) => {

    let userInfo = userData;

    return (

        <section className="about">
            <div className="about__title">About</div>
            {

                <ul className="about__list">
                    {<li className="about__item"> <img src={prsonIcon} alt="" />{userInfo.Gender}</li>}
                    {userInfo.Born ? <li className="about__item"> <img src={birthIcon} alt="" />{userInfo.Born}</li> : <></>}
                    {userInfo.Place ? <li className="about__item"> <img src={placeIcon} alt="" />{userInfo.Place}</li> : <></>}
                    {<li className="about__item"> <img src={mailIcon} alt="" />{userInfo.Mail}</li>}
                    {userInfo.Phone ? <li className="about__item"> <img src={phoneIcon} alt="" />{userInfo.Phone}</li> : <></>}

                </ul>
            }




        </section>


    )
}
export default User_about;