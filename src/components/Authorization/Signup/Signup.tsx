import React from 'react';


import nextStepIcon from '../../../img/next-sgup.svg'
import googleIcon from '../../../img/google-log.svg'
import facebookIcon from '../../../img/facebook-log.svg'

import background from '../../../img/auth-bg.svg'

import { NavLink } from 'react-router-dom';
import SignupFirst from './Steps/SignupFirst';


const Signup = () => {
    return (


        <div className="signup__container">
            <div className='signup__content'>
                <SignupFirst />

            </div>
            <div className="signup__already">
                Already have an account ?    <NavLink to='/'><span>Sign in</span></NavLink>
            </div>

        </div>



    )
}
export default Signup;