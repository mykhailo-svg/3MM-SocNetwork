import React from 'react';

import prsonIcon from '../../../img/person-ic.svg';

import birthIcon from '../../../img/birth-ic.svg';
import placeIcon from '../../../img/place-ic.svg';
import mailIcon from '../../../img/Mail-ic.svg';
import phoneIcon from '../../../img/phone-ic.svg';
import { Skeleton } from '@mui/material';

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

    let loading = false;
    return (

        <section className="about dark-block">
            <div className="about__title">About</div>
            {

                <ul className="about__list">

                    {<li className="about__item"> <img src={prsonIcon} alt="" />
                        {loading ? <Skeleton variant='rectangular' height='1em' sx={{ width: '100%' }} />
                            : userData.Gender}
                    </li>}
                    {userData.Born ? <li className="about__item"> <img src={birthIcon} alt="" />{loading ? <Skeleton variant='rectangular' height='1em' sx={{ width: '100%' }} /> : userData.Born}</li> : <></>}
                    {userData.Place ? <li className="about__item"> <img src={placeIcon} alt="" />{loading ? <Skeleton variant='rectangular' height='1em' sx={{ width: '100%' }} /> : userData.Place}</li> : <></>}
                    {<li className="about__item"> <img src={mailIcon} alt="" />{loading ? <Skeleton variant='rectangular' height='1em' sx={{ width: '100%' }} /> : userData.Mail}</li>}
                    {userData.Phone ? <li className="about__item"> <img src={phoneIcon} alt="" />{loading ? <Skeleton variant='rectangular' height='1em' sx={{ width: '100%' }} /> : userData.Phone}</li> : <></>}

                </ul>
            }




        </section>


    )
}
export default User_about;