
import { type } from 'os';
import './User_cover.scss';



import React from 'react';




type typeUser_coverProps = {

    dispatch:any,

    userCoverInfo:{
        Name: String,
        Occupation: String
    }

    
}

const User_cover:React.FC<typeUser_coverProps> = ({dispatch,userCoverInfo }) => {
    
    debugger;
    // let userInfo = props.userCoverInfo;

    return (

                <div className="cover__main">
                    <div className="cover__avatar">
                        <img src="" alt="" />
                    </div>
                    <div className="cover__info">
                        <div className="cover__name">
                            {userCoverInfo.Name}

                        </div>
                        <div className="cover__occupation">
                            {userCoverInfo.Occupation}
                        </div>
                    </div>
                </div>

            

    )
}
export default User_cover;