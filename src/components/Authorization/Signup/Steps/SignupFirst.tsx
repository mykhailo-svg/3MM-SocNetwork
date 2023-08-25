import React from 'react';


import nextStepIcon from '../../../../img/next-sgup.svg'
import googleIcon from '../../../../img/google-log.svg'
import facebookIcon from '../../../../img/facebook-log.svg'

import background from '../../../../img/auth-bg.svg'

import { NavLink } from 'react-router-dom';


type userData = {
    Name: string
    Email: string
}
type TypeFirstFormProps = userData & {

    updateForm: (fields: Partial<userData>) => void
}

const SignupFirst: React.FC<TypeFirstFormProps> = ({ Name, Email, updateForm }) => {
    return (



        <>

            <div className="signup__mainfields">

                <div className='signup__fields-row'>
                    <div className="signup__mainfields-item">
                        <div className="signup__label">Name</div>
                        <input type="text" className="signup__field" placeholder='Mykhailo Vyzdryk' 
                        onChange={e => updateForm({Name: e.target.value})} value={Name} />
                    </div>
                    <div className="signup__mainfields-item">
                        <div className="signup__label">Email</div>
                        <input type="text" className="signup__field" placeholder='wyzdryk@gmail.com'  
                        onChange={e => updateForm({Email: e.target.value})} value={Email} />
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