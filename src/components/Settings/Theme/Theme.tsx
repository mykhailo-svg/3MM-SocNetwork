
import React from "react";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";





const Theme = () => {
    let isDark = useTypedSelector((state) => state.settings_reducer.themeIsDark);

    const { toggleTheme } = useActions();

    return (
        <div className={isDark ? "theme theme__dark" : "theme"} onClick={() => toggleTheme()}>
            <div className="theme__container">
                <div className="theme__toggler">

                    <svg width="32" className={`theme__icon theme__light-icon ${!isDark ? " theme__icon-active " : ''}`} height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32"><path d="M32 0H0v32h32V0Z" fill="#fff" /></mask><g mask="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 9.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13ZM16 0a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0V2a2 2 0 0 1 2-2Zm0 26a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2ZM2 14h2a2 2 0 1 1 0 4H2a2 2 0 1 1 0-4Zm26 0h2a2 2 0 1 1 0 4h-2a2 2 0 1 1 0-4ZM4.7 4.7a2 2 0 0 1 2.8 0L9 6a2 2 0 1 1-2.8 2.8L4.7 7.5a2 2 0 0 1 0-2.8ZM23 23a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1-2.8 2.8L23 26a2 2 0 0 1 0-2.8ZM4.7 24.5 6 23a2 2 0 1 1 2.8 2.8l-1.4 1.4a2 2 0 1 1-2.8-2.8ZM23 6l1.4-1.4a2 2 0 1 1 2.8 2.8L26 9a2 2 0 1 1-2.8-2.8Z" fill="#444A58" /></g></svg>
                    <svg width="32" className={`theme__icon theme__dark-icon ${isDark ? " theme__icon-active " : ''}`} height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.2 19.2A15 15 0 0 1 11 1a15.8 15.8 0 1 0 20.5 20.5 15 15 0 0 1-18.2-2.3Z" fill="#5E5E74" /><path d="m20.1 3.8.6 1.1.5-1.1c0-.2.2-.3.4-.4l1.1-.6-1.2-.5a.7.7 0 0 1-.3-.3L20.7.8h-.1l-.5 1.1c0 .2-.2.3-.4.4l-1.1.5 1.1.6c.2 0 .3.2.4.4Zm2.1 11.6-.5 1.1c0 .2-.2.3-.3.4l-1.2.6 1.1.5c.2 0 .3.2.4.4l.6 1.1.5-1.1.4-.4 1.1-.5-1.2-.6a.7.7 0 0 1-.3-.3l-.5-1.2Zm4.3-4.6 1 2 .9-2c.2-.3.4-.6.8-.7l2-1c-.8-.4-1.5-.6-2.1-1-.3-.1-.5-.4-.7-.7l-1-2-1 2c-.1.3-.3.5-.6.7l-2.1 1 2 1 .8.7Zm-11.6 2.5.8 1.6.8-1.7c0-.2.3-.4.5-.5.5-.3 1-.6 1.7-.8l-1-.5c-.7-.3-1.3-.7-1.5-1.5l-.5-1-.9 1.7c0 .2-.3.3-.5.5l-1.7.8 1.6.7a1.2 1.2 0 0 1 .7.7Z" fill="#5E5E74" /></svg>
                </div>
            </div>
        </div>


    )
}
export default Theme;