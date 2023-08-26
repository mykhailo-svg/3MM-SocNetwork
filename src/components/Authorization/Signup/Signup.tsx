
import React, { useState } from 'react';


import nextStepIcon from '../../../img/next-sgup.svg';
import finishpIcon from '../../../img/signup-finish.svg';

import backIcon from '../../../img/signup-back.svg';

import { NavLink } from 'react-router-dom';
import SignupFirst from './Steps/SignupFirst';
import { useMultistepForm } from '../../../hooks/useMultistepForm';
import SignupSecond from './Steps/SignupSecond';
import { useActions } from '../../../hooks/useActions';

type TypeUserForm = {
    Name: string
    Email: string
    Year: string
    Month: string
    Day: string
    Gender: string
    Password: string
}

const initialData: TypeUserForm = {
    Name: '',
    Email: '',
    Year: '',
    Month: '',
    Day: '',
    Gender: '',
    Password: 'sd',
}

const Signup = () => {
    const [data, setData] = useState(initialData);

    function updateFields(fields: Partial<TypeUserForm>) {
        setData(prev => {
            return { ...prev, ...fields }
        });
        console.log(data);
        

    }
    const { step, steps, currentStepIndex, nextStep, previoustStep, isFirst, isLast } = useMultistepForm([
        <SignupFirst {...data} updateForm={updateFields} />,
        <SignupSecond {...data} updateForm={updateFields} />,
        

    ]);


    const nextStepClick = () => {
        nextStep();
    }
    const previousStepClick = () => {
        previoustStep();
    }


    const {login,logout} = useActions();

    return (


        <div className="signup__container">

            <div className='signup__content'>



                <h1 className="signup__title">{!isFirst() ? <span onClick={previousStepClick}><img src={backIcon} alt="" /></span> : <></>}Sign Up</h1>
                <div className="step">{currentStepIndex + 1}/{steps.length}</div>
                <div className="signup__progress">
                    <div className="signup__progress-item signup-active">
                        <div className='signup__progress-icon'>
                            <svg width="32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.3 3.1h-8.6c-.2 0-.4 0-.5.2L20 4V7c0 .6-.2 1.2-.6 1.6-.4.5-.9.7-1.4.7h-4c-.5 0-1-.2-1.4-.7-.4-.4-.6-1-.6-1.6V3.9c0-.2 0-.4-.2-.6a.6.6 0 0 0-.5-.2H2.7c-.7 0-1.4.3-2 1-.4.5-.7 1.3-.7 2.1V25c0 .8.3 1.6.8 2.2.5.6 1.2.9 1.9.9h26.6c.7 0 1.4-.3 2-1 .4-.5.7-1.3.7-2.1V6.2c0-.8-.3-1.6-.8-2.2-.5-.6-1.2-.9-1.9-.9ZM8.7 9.3a3 3 0 0 1 1.8.7c.6.4 1 1 1.2 1.7.3.7.4 1.5.2 2.3 0 .7-.4 1.4-.9 2-.4.5-1 .9-1.7 1-.6.2-1.3.1-2-.2-.5-.3-1-.8-1.4-1.4a4.4 4.4 0 0 1 .4-5c.6-.7 1.5-1 2.4-1Zm6 13.8c0 .4-.2.9-.4 1.2-.3.4-.7.6-1 .6H4c-.4 0-.8-.2-1-.6a2 2 0 0 1-.4-1.2v-.5c0-.6 0-1.2.3-1.8.3-.5.7-1 1.1-1.3 1.4-1 3-1.5 4.6-1.6 1.6 0 3.1.6 4.5 1.6.5.3.8.8 1.1 1.3.3.6.4 1.2.4 1.8v.5Zm12.6-2.9h-8c-.1 0-.3 0-.4-.2a.8.8 0 0 1-.2-.6c0-.2 0-.4.2-.5 0-.2.3-.2.4-.2h8c.2 0 .4 0 .5.2l.2.5c0 .3 0 .4-.2.6l-.5.2Zm0-4.6H16.7c-.2 0-.4-.1-.5-.3a.8.8 0 0 1-.2-.5c0-.2 0-.4.2-.6l.5-.2h10.6c.2 0 .4 0 .5.2l.2.6c0 .2 0 .4-.2.5-.1.2-.3.3-.5.3Z" fill="#FBF2F2" /><path d="M14 7.8h4c.2 0 .3-.1.5-.3l.2-.5V3.1c0-.8-.3-1.6-.8-2.2C17.4.3 16.7 0 16 0s-1.4.3-1.9 1c-.5.5-.8 1.3-.8 2.1V7l.2.5c.2.2.3.3.5.3Z" fill="#FBF2F2" /></svg>

                        </div>
                        <div className="signup__progress-decor"></div>
                    </div>
                    <div className="signup__progress-item ">
                        <div className='signup__progress-icon'>
                            <svg width="32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 0c-5.6 0-10.1 4-10.1 8.8 0 1 .2 2 .5 3.1L0 23V28h6v-3.1h3.5v-3.1H13l5.4-4.7c1 .3 2.2.5 3.5.5 5.6 0 10.1-4 10.1-8.8C32 4 27.5 0 22 0Zm2.9 9.3c-2 0-3.6-1.3-3.6-3C21.3 4.4 23 4 25 4c2.1 0 2.6 1 2.7 2.4 0 1.8-.7 3-2.7 3Z" fill="#FFB7D5" /></svg>

                        </div>                        <div className="signup__progress-decor"></div>
                    </div>
                    <div className="signup__progress-item">
                        <div className='signup__progress-icon'>
                            <svg width="32" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M26.8 1.1V7c0 .6.5 1.1 1.1 1.1.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1-1.1-.7 0-1.2.5-1.2 1.1Z" fill="#FFB7D5" /><path fill-rule="evenodd" clip-rule="evenodd" d="M25 5.2h5.9c.6 0 1.1-.5 1.1-1.1 0-.7-.5-1.2-1.1-1.2h-6c-.6 0-1 .5-1 1.2 0 .6.4 1 1 1Z" fill="#FFB7D5" /><path fill-rule="evenodd" clip-rule="evenodd" d="M31 6.6h-.5V7c0 1.4-1.2 2.6-2.6 2.6A2.6 2.6 0 0 1 25.3 7v-.4h-.4a2.6 2.6 0 0 1-2.6-2.5c0-.6.2-1.1.5-1.6l-.2-.3A2.6 2.6 0 0 0 20.3.7h-8.6c-1 0-1.9.6-2.3 1.5L8 5l-.4.2H4.1a4 4 0 0 0-4.1 4V24A4 4 0 0 0 4 28h24c1 0 2-.4 2.8-1.2A4 4 0 0 0 32 24V9.2a4 4 0 0 0-1-2.6ZM16 8.8a7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7 7 7 0 0 0-7-7Zm0 2.3c2.7 0 4.8 2.1 4.8 4.7 0 2.7-2.1 4.8-4.8 4.8a4.8 4.8 0 0 1-4.8-4.8c0-2.6 2.1-4.7 4.8-4.7Z" fill="#FFB7D5" /></svg>

                        </div>
                    </div>


                </div>
                {step}
                <div className="signup__step-action-buttons">
                    {!isLast() ? (
                        <button className="signup__next-button" onClick={()=>{
                            nextStepClick();
                        }}>
                            <img src={nextStepIcon} alt="" />
                        </button>
                    ) : (
                        <button className="signup__next-button" onClick={()=>{
                            nextStepClick();console.log(data);login('1');
                            
                        }}>
                            <img src={finishpIcon} alt="" />
                        </button>)
                    }

                </div>
            </div>

                    <button onClick={logout}>log out</button>

            <div className="signup__already">
                Already have an account ?    <NavLink to='/auth/Log'><span>Log in</span></NavLink>
            </div>

        </div>



    )
}
export default Signup;