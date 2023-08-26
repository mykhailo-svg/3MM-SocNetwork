import React from 'react';
import { NavLink } from 'react-router-dom';
import backIcon from '../../../img/signup-back.svg';

const Recovery = () => {
    return (
        <div className="signup__container">

            <div className='signup__content'>
                <h1 className="signup__title"><NavLink to='/auth/Log'><img src={backIcon} alt="" /></NavLink>Password Recovery</h1>
                <div className="signup__mainfields-item">
                    <div className="signup__label">Email</div>
                    <input type="text" className="signup__field" placeholder='wyzdryk@gmail.com' />

                </div>
                

                
            </div>
        </div>


    )
}
export default Recovery;