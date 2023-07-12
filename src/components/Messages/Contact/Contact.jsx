import { NavLink } from 'react-router-dom';
import avatar from '../../../img/avatar.jpg';
import './Contact.scss';

const  Contact = (props) => {

    let contactPath =props.id;


    return (
        <NavLink  className="messages__contact">
            <div className={"messages__contact-container " + props.online}>
                <div className="messages__contact__avatar">
                    <img src={avatar} alt="" />
                </div>
          
                <div className="messages__contact-name">{props.name}</div>
            </div>
            
        </NavLink>
        
        
        )
}
export default Contact;