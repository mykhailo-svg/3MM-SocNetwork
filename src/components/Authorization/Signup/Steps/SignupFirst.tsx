import React from 'react';


import nextStepIcon from '../../../../img/next-sgup.svg'
import googleIcon from '../../../../img/google-log.svg'
import facebookIcon from '../../../../img/facebook-log.svg'

import background from '../../../../img/auth-bg.svg'

import { NavLink } from 'react-router-dom';


const SignupFirst = () => {
    return (

      

                <>
                
                   
                    <div className="signup__with">
                        <div className="signup__with-title">
                            <div className='signup__with-title-decor'></div>Sign up with




                        </div>
                        <div className="signup__with-buttons">
                            <button className="signup__with-button">
                                <img src={googleIcon} alt="" className="signup__with-icon" />
                                Continue with Google
                            </button>
                            <button className="signup__with-button">
                                <img src={facebookIcon} alt="" className="signup__with-icon" />
                                Continue with Google
                            </button>
                        </div>
                        <div className="signup__with-or">
                            or
                        </div>
                    </div>

                    <div className="signup__mainfields">

                        <div className='signup__fields-row'>
                            <div className="signup__mainfields-item">
                                <div className="signup__label">Name</div>
                                <input type="text" className="signup__field" placeholder='Mykhailo Vyzdryk' />
                            </div>
                            <div className="signup__mainfields-item">
                                <div className="signup__label">Email</div>
                                <input type="text" className="signup__field" placeholder='wyzdryk@gmail.com' />
                            </div>
                        </div>
                        <div className="signup__agree-row">
                            <div className='signup__agree-checkbox'>
                                
                                <input className='sminp' type="checkbox" />
                                <div className='smdiv'>
                                    
                                </div>
                            </div>
                            I’ve read and agree with terms of service and our <br /> privacy policy
                        </div>



                    </div>


                    

                 

                </>


   


    )
}
export default SignupFirst;