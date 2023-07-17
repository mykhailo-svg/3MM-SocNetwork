import React from "react";
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';
import './Nav.scss';
const Sidebar = () => {
        return (
                <aside className="sidebar">
                        <div className="sidebar__logo">
                                <img src={logo} alt="" />
                        </div>

                        <nav className="sidebar__nav">
                                <ul className="sidebar__nav-list">

                                        <li className="sidebar__nav-item">
                                                <NavLink to='/'>
                                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4Z" fill="rgba(255, 255, 255, 0.8)" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                                                        Profile
                                                </NavLink>
                                        </li>
                                        <li className="sidebar__nav-item">
                                                <NavLink to='/Messages'>
                                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" opacity=".8"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2Zm-2 12H6v-2h12v2Zm0-3H6V9h12v2Zm0-3H6V6h12v2Z" fill="#fff" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                                                        Messages
                                                </NavLink>
                                        </li>
                                        <li className="sidebar__nav-item">
                                                <NavLink to='/Purchases'>
                                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.81 2h8.381C19.28 2 21 3.78 21 6.83v10.33c0 3.1-1.72 4.84-4.809 4.84H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2Zm.27 4.66v-.01h2.989c.431 0 .781.35.781.779 0 .441-.35.791-.781.791H8.08c-.431 0-.78-.35-.78-.78 0-.43.349-.78.78-.78Zm0 6.08h7.84c.43 0 .78-.35.78-.78 0-.43-.35-.781-.78-.781H8.08c-.431 0-.78.351-.78.781 0 .43.349.78.78.78Zm0 4.57h7.84c.399-.04.7-.381.7-.78 0-.41-.301-.75-.7-.79H8.08c-.3-.03-.59.11-.75.37-.16.25-.16.58 0 .84.16.25.45.4.75.36Z" fill="#fff" opacity=".8" /></svg>
                                                        Purchases
                                                </NavLink>
                                        </li>
                                        <li className="sidebar__nav-item">
                                                <NavLink to='/Returns'>
                                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" opacity=".8"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2Zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1ZM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm11 15H4v-2h16v2Zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6Z" fill="#fff" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                                                        Returns
                                                </NavLink>
                                        </li>
                                        <li className="sidebar__nav-item">
                                                <NavLink to='/Gallery'>
                                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" opacity=".8"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6Zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2ZM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7Z" fill="#fff" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                                                        Gallery
                                                </NavLink>
                                        </li>
                                        <li className="sidebar__nav-item">
                                                <NavLink to='/Analytics'>
                                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)" opacity=".8"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2ZM9 17H7v-7h2v7Zm4 0h-2V7h2v10Zm4 0h-2v-4h2v4Z" fill="#fff" /></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z" /></clipPath></defs></svg>
                                                        Analytics
                                                </NavLink>
                                        </li>
                                        <li className="sidebar__nav-item">
                                                <NavLink to='/Settings'>
                                                        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20.4022 13.5801c.3577.19.6336.49.8278.79.3781.62.3475 1.38-.0204 2.05l-.7154 1.2c-.3781.64-1.0833 1.04-1.8089 1.04-.3576 0-.7562-.1-1.0832-.3-.2657-.17-.5723-.23-.8994-.23-1.0117 0-1.8599.83-1.8906 1.82 0 1.15-.9402 2.05-2.1154 2.05h-1.3899c-1.1855 0-2.12567-.9-2.12567-2.05-.02044-.99-.86866-1.82-1.8804-1.82-.33725 0-.64383.06-.89932.23-.32703.2-.73581.3-1.08328.3-.73581 0-1.44096-.4-1.81908-1.04l-.70515-1.2c-.37813-.65-.39857-1.43-.02044-2.05.16351-.3.4701-.6.81756-.79.28615-.14.4701-.37.64384-.64.51098-.86.20439-1.99-.66427-2.5-1.01174-.57-1.33877-1.84-.75625-2.83l.68471-1.18c.59273-.99 1.85996-1.34 2.88192-.76.8891.48 2.04391.16 2.56511-.69.16351-.28.25549-.58.23505-.88-.02044-.39.09198-.76.28615-1.06.37812-.62 1.06282-1.02 1.80882-1.04h1.441c.7563 0 1.441.42 1.8191 1.04.1839.3.3066.67.2759 1.06-.0204.3.0716.6.2351.88.5212.85 1.676 1.17 2.5753.69 1.0117-.58 2.2892-.23 2.8717.76l.6847 1.18c.5927.99.2657 2.26-.7562 2.83-.8687.51-1.1753 1.64-.6541 2.5.1635.27.3475.5.6336.64Zm-11.29261-1.57c0 1.57 1.29791 2.82 2.90241 2.82 1.6044 0 2.8717-1.25 2.8717-2.82 0-1.57-1.2673-2.83-2.8717-2.83-1.6045 0-2.90241 1.26-2.90241 2.83Z" fill="#fff" opacity=".8" /></svg>
                                                        Settings
                                                </NavLink>
                                        </li>


                                </ul>
                        </nav>
                </aside>


        )
}
export default Sidebar;