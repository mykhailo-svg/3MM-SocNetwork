
import Friend from './Friends/Friend';
import './Profile_people.scss';







const Profile_people = (props) => {

    let activeInfo = props.activePeopleData;
    let activeItems = activeInfo.map(
        active => <Friend name={active.name} friend_state={active.friend_state} time={active.time} />);

    return (

        <section className="people">
            <div className="people__might-know">

            </div>
            <div className="peope__active">
                <div className="people__active-list">
                    {activeItems}

                    
                </div>
            </div>
        </section>


    )
}
export default Profile_people;