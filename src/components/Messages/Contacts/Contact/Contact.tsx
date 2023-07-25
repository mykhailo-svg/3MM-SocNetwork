import React from 'react';


import avatar from '../../../../img/avatar.jpg';

import { type } from 'os';

type typeContactProps = {
    online: string,
    name: string
}

const Contact: React.FC<typeContactProps> = ({ online, name }) => {




    return (
        <div className="messages__contact">
            <div className={"messages__contact-container " + online}>
                <div className="messages__contact__avatar">
                    <img src={avatar} alt="" />
                </div>

                <div className="messages__contact-name">{name}</div>
            </div>

        </div>


    )
}
export default Contact;