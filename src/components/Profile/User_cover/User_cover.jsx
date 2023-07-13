
import './User_cover.scss';



import React from 'react';







const User_cover = (props) => {


    let userInfo = props.userCoverInfo;

    return (

                <div className="cover__main">
                    <div className="cover__avatar">
                        <img src="" alt="" />
                    </div>
                    <div className="cover__info">
                        <div className="cover__name">
                            {userInfo.Name}

                        </div>
                        <div className="cover__occupation">
                            {userInfo.Occupation}
                        </div>
                    </div>
                </div>

            

    )
}
export default User_cover;