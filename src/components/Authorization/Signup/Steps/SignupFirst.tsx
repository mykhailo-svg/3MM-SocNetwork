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


            <div className="signup__with">
                <div className="signup__with-title">
                    <div className='signup__with-title-decor'></div>Sign up with




                </div>
                <div className="signup__with-buttons">
                    <button className="signup__with-button">
                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.9 8.1a9.1 9.1 0 0 0-.3 7.1l.4.8.5-.4a1079 1079 0 0 0 2.4-2c-.4-1-.4-2.2 0-3.2v-.2l-.1-.1-.3-.3a442.6 442.6 0 0 0-2.6-1.7Z" fill="#ECC115" /><path d="M11.4 3a11.4 11.4 0 0 0-2.6.5l-.3.2A1.7 1.7 0 0 0 8 4l-.3.2h-.2l-.1.2h-.1l-.3.2h-.1l-.1.1s0 .1 0 0l-.1.1-.2.1V5h-.1s0 .1 0 0l-.2.2a16.2 16.2 0 0 0-1.3 1.3v.1l-.1.1c-.1.1-.1.1 0 .1h-.1l-.1.2-.3.4-.1.3c-.1 0-.1 0 0 0l-.2.2V8l.7.5L6 9.6l.8.5.1-.2v-.2h.1v-.2h.1v-.2h.1v-.1l.1-.1V9l.1-.1.2-.2.1-.2c.1 0 .1-.1 0 0l.2-.2.1-.2a5.4 5.4 0 0 0 .5-.4l.2-.2H9l.1-.1.1-.1h.1s0-.1 0 0v-.1h.1l.2-.1.3-.2h.2l.2-.2h.1s.1 0 0 0h.2l.2-.1h.4v-.1H13a4 4 0 0 0 .5.2H13.9l.3.1.2.1.2.1v.1h.1l.3.2.2.1c0 .1.1.1 0 .1l.2.1.1.1.1.1.3-.3a2.5 2.5 0 0 0 .4-.4l1-.9.8-1-.2-.1-.2-.2h-.1l-.1-.2h-.2v-.1H17v-.1l-.4-.2-.2-.2h-.1L16 4v-.1l-.5-.2-.4-.2H15l-.4-.1h-.2v-.1a4.9 4.9 0 0 0-1-.2h-.4c-.3-.1-1.4-.2-1.7-.1ZM18 5.4l-.2.1h.1l.1-.1Zm-.2.2-.1.1.1-.1Zm-.4.4-.2.1h.1l.1-.1Zm-.6.6-.2.1h.1l.1-.1Zm-.6.6-.1.1.1-.1Zm-.4.4-.2.1h.1l.1-.1Z" fill="#EC4040" /><path d="M6.9 13.8h-.1l-.1.1-.2.2h-.1s0 .1 0 0l-.1.1c-.1 0-.1.1 0 0l-.1.1-.1.1H6l-.1.1-.1.1-.2.1v.1h-.1l-.1.1-.1.1-.2.2H5l-.1.1-.1.1-.2.2h-.1l-.1.1s-.1.1-.1 0v.1L4 16v.4l.2.2.2.3v.2l.2.1v.1l.1.1v.1H5v.1l.2.1v.1l.1.2h.1l.4.4a6.7 6.7 0 0 0 1 .8v.1h.1v.1H7v.1l.2.1.1.1s.1 0 0 0h.1v.1h.2v.1h.2l.1.1.2.1h.1v.1h.1l.2.1h.1l.1.1h.1l.3.1h.1l.1.1h.1a1.3 1.3 0 0 0 .4.1h.2v.1a6.4 6.4 0 0 1 .6.1H11.2l.1.1h2a3.3 3.3 0 0 0 1-.2h.1l.4-.2h.4v-.1h.2l.1-.1h.2l.2-.2h.2l.2-.2h.2s0-.1 0 0v-.1h.2l.2-.2h.1l.1-.2h.1l.2-.1v-.1h.1l.1-.1.2-.2h.1v-.1a39.5 39.5 0 0 0-1.9-1.5l-.3-.3a50 50 0 0 0-.4-.3h-.1v-.1H15v.1h-.1l-.1.1h-.2v.1h-.2l-.3.2H14l-.2.1h-.2l-.1.1H13.2a11 11 0 0 0-1 .2h-.9l-.3-.1h-.2v-.1h-.4l-.1-.1h-.1L10 17l-.2-.1h-.2l-.1-.1-.2-.1-.1-.1-.2-.1-.1-.1h-.1l-.2-.2-.3-.2-.3-.4-.2-.2-.1-.2h-.1v-.1l-.1-.1V15l-.1-.1-.1-.2s-.1 0 0 0l-.1-.1-.1-.2v-.1H7V14l-.1-.2v-.1h-.1Z" fill="#409640" /><path d="M11.4 3ZM11.6 3h.2-.2ZM12.1 3a1.3 1.3 0 0 0 .3 0h-.3ZM10.2 3.1h.1ZM9 3.5ZM8 3.8A1 1 0 0 0 8 4l.3-.1H8ZM16.1 4h.2-.2ZM7.4 4.2ZM7 4.4h.1ZM6 5.2v.1-.1ZM16.8 6.5l-1.3 1.3a169 169 0 0 0 1.3-1.3ZM5.3 6v-.1ZM12 6.5h.1-.1ZM10.5 6.7c-.1 0-.1 0 0 0ZM13.7 6.7s-.1 0 0 0ZM9.7 7h-.1.2-.1Z" fill="#EC9696" /><path d="M12 10.3v3.4h2.5l2.5.1v.2c-.1 0-.1 0 0 0l-.1.1-.1.4c0 .1 0 .1 0 0v.1h-.1v.2l-.1.1s0 .1 0 0v.1l-.1.1-.1.1v.1l-.1.2h-.1s0 .1 0 0v.1l-.2.2v.1h-.1l-.2.2-.2.2h-.1v.1l-.1.1c-.2 0-.2 0 0 .2l1.3 1 1.3 1 .3-.2c.1 0 .2-.1.1 0h-.1.1c0-.2.1-.2.2-.2v-.1h.1l.1-.2c0-.1.1-.1 0-.1h.1v-.1h.1v-.2h.1v-.1h.1v-.1h.1v-.1l.1-.2.1-.1v-.1l.1-.1v-.1l.1-.1.1-.2v-.2h.1V16h.1v-.2s.1 0 0-.1h.1V15.4c.1 0 .1 0 0 0h.1v-.1l.1-.3v-.2h.1v-.4c.1 0 .1 0 0 0h.1v-.2s0-.1 0 0V14h.1v-.7l.1-.1v-1a6.6 6.6 0 0 0 0-1.5v-.2h-.1v-.2H12h8.5H12Zm6.1 8.3-.1.2v-.1c.1 0 .1-.1.1 0Z" fill="#4096EC" /></svg>
                        Continue with Google
                    </button>
                    <button className="signup__with-button">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.4755 1.05403C8.3099 1.33539 6.32708 2.1654 4.59271 3.50654C4.04427 3.93327 3.11146 4.85238 2.65677 5.4151C1.36302 7.01884 0.505208 8.91333 0.139583 10.9766C0.00833334 11.7082 -0.0432292 13.4667 0.0411458 14.2685C0.242708 16.1396 0.894271 17.9731 1.90677 19.5299C2.36615 20.2333 2.76927 20.7351 3.3974 21.3775C5.36146 23.3939 7.84115 24.6132 10.663 24.9414C11.2911 25.0165 12.8193 25.0024 13.499 24.9227C17.0052 24.4866 20.1365 22.5217 22.0911 19.5299C23.0755 18.0247 23.7036 16.2943 23.9286 14.4889C24.0224 13.7293 24.0224 12.2521 23.9286 11.4878C23.4974 8.00829 21.538 4.86644 18.5849 2.92507C17.0427 1.91217 15.3271 1.28381 13.499 1.05403C12.7865 0.969621 11.1505 0.969621 10.4755 1.05403ZM16.5693 5.39165V6.91568L15.3974 6.93912C14.1224 6.96726 14.0146 6.98602 13.7755 7.24862C13.5693 7.4784 13.5458 7.62846 13.5458 8.81954V9.94029H15.0458H16.5458V10.0528C16.5458 10.1138 16.4708 10.7844 16.3818 11.544C16.2927 12.299 16.2177 12.9321 16.2177 12.9508C16.2177 12.9743 15.6177 12.9883 14.8818 12.9883H13.5458V17.5604V22.1325H11.5536H9.56146V17.5604V12.9883H8.48333H7.40521V11.4643V9.94029H8.48333H9.56146V8.707C9.56146 7.39399 9.60365 6.89223 9.75365 6.32951C10.0021 5.40572 10.5411 4.73046 11.3427 4.34593C11.8396 4.10678 12.3833 3.96141 12.9833 3.89576C13.2036 3.877 14.099 3.85824 14.9755 3.86293L16.5693 3.86762V5.39165Z" fill="#45619D" />
                        </svg>

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