import React from 'react';


import nextStepIcon from '../../../img/next-sgup.svg';
import finishpIcon from '../../../img/signup-finish.svg';

import backIcon from '../../../img/signup-back.svg';

import { NavLink } from 'react-router-dom';
import SignupFirst from './Steps/SignupFirst';
import { useMultistepForm } from '../../../hooks/useMultistepForm';
import SignupSecond from './Steps/SignupSecond';


const Signup = () => {
    const steps: any = [1, 2];
    const { step, currentStepIndex, nextStep, previoustStep, isFirst, isLast } = useMultistepForm([
        <SignupFirst />,
        <SignupSecond />
    ]);


    const nextStepClick = () => {
        nextStep();
    }
    const previousStepClick = () => {
        previoustStep();
    }

    return (


        <div className="signup__container">

            <div className='signup__content'>
                <h1 className="signup__title">{!isFirst() ? <span onClick={previousStepClick}><img src={backIcon} alt="" /></span> : <></>}Sign Up</h1>
                <div className="step">{currentStepIndex}/{steps.length}</div>
                {/* <SignupFirst />
                <SignupSecond /> */}
                {step}

            </div>
            {!isLast() ? (
                <button className="signup__next-button" onClick={nextStepClick}>
                    <img src={nextStepIcon} alt="" />
                </button>
            ) : (
                <button className="signup__next-button" onClick={nextStepClick}>
                    <img src={finishpIcon} alt="" />
                </button>)
            }

            <div className="signup__already">
                Already have an account ?    <NavLink to='/'><span>Sign in</span></NavLink>
            </div>

        </div>



    )
}
export default Signup;