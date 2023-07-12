import './Friend.scss';

import postAvatar from '../../../img/avatar.jpg';

const Friend = (props) => {
    return (
        <div className="people__active-item">
            <div className="people__active-avatar">
                <img src={postAvatar} alt="" />
            </div>
            <div className="people__active-info">
                <div className="people__active-name">{props.name}</div>
                <div className="people__active-state">{props.friend_state}</div>
            </div>
            <div className="people__active-time">
                {props.time}
            </div>
        </div>


    )
}
export default Friend;