import React from "react";
import './NavMobile.scss';

import mobileLogo from '../../../img/mobile-logo.svg'



const NavMobile = () => {
        return (
                <header className="mobile__header">
                        <div className="mobile__header-container">
                                <div className="mobile__main">
                                        <div className="mobile__logo">
                                                <img src={mobileLogo} alt="" />
                                        </div>
                                        <div className="mobile__search">
                                                <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="28" height="28" rx="14" fill="#FF00D6" fill-opacity=".1" /><path d="m22.6 20.6-4.4-4.4a6.6 6.6 0 1 0-2 2l4.4 4.4a1.4 1.4 0 0 0 2-2Zm-14.7-8a4.7 4.7 0 1 1 9.4 0 4.7 4.7 0 0 1-9.4 0Z" fill="#A303A0" /></svg>
                                        </div>
                                </div>
                                <nav className="mobile__nav">
                                        <ul className="mobile__links">
                                                <li className="mobile__link-item active">
                                                        <svg width="20" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 17v-6h4v6h5V9h3L10 0 0 9h3v8h5Z" fill="#A303A0" opacity=".8" /></svg>
                                                </li>
                                                <li className="mobile__link-item">
                                                        <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity=".8" d="M8.5 8.5a4.2 4.2 0 1 0 0-8.5 4.2 4.2 0 0 0 0 8.5Zm0 2.1C5.7 10.6 0 12 0 15V17h17v-2.1c0-2.9-5.7-4.3-8.5-4.3Z" fill="#CACACA" /></svg>
                                                </li>
                                                <li className="mobile__link-item">
                                                        <svg width="17" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="m16 9.8.8.7c.3.5.3 1.2 0 1.8l-.7 1a2 2 0 0 1-2.6.6l-.8-.2c-.9 0-1.7.7-1.7 1.6 0 1-.8 1.7-1.9 1.7H8c-1 0-2-.8-2-1.7 0-.9-.7-1.6-1.6-1.6-.3 0-.6 0-.8.2a2 2 0 0 1-2.6-.6l-.6-1c-.4-.6-.4-1.3 0-1.8 0-.2.4-.5.7-.7.2 0 .4-.3.6-.5.4-.7.1-1.7-.6-2.1C0 6.7-.2 5.6.3 4.8l.6-1A2 2 0 0 1 3.5 3c.8.4 1.8.2 2.3-.6l.2-.7c0-.3 0-.7.2-1A2 2 0 0 1 8 0H9a2 2 0 0 1 1.7.9l.2.9c0 .2 0 .5.2.7.5.8 1.5 1 2.3.6 1-.5 2-.2 2.6.7l.6 1c.5.8.3 1.9-.7 2.4-.7.4-1 1.4-.5 2.1l.5.5ZM6 8.5C6 9.8 7 11 8.4 11c1.4 0 2.6-1 2.6-2.4 0-1.3-1.2-2.4-2.6-2.4-1.4 0-2.6 1-2.6 2.4Z" fill="#D5D5D5" opacity=".8" /></svg>
                                                </li>
                                                <li className="mobile__link-item"></li>
                                        </ul>
                                        <div className="mobile__burger">
                                                <svg width="21" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" fill="#DDD"><path d="M0 0h21v2H0zM0 8h21v2H0zM0 15h21v2H0z" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h21v17H0z" /></clipPath></defs></svg>
                                        </div>
                                </nav>
                        </div>
                </header>


        )
}
export default NavMobile;