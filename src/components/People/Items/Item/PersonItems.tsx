import React, { useEffect } from "react";
import Person from "../Person";
import axios from "axios";
import loader from '../../../../img/people_loader.svg'
// type TypePersonItemsProps = {


//     PeopleData: {


//             id: number;
//         name: string;
//         occupation: string;


//     }


// }


let setUsers = () => {

}


const PersonItems: React.FC = (props: any) => {


    let peopleInfo = props.PeopleData;
    const loaderContainer:any = React.createRef();

    let setUsers = (users: any) => {
        props.SetUsers(users);
    }

    let updateUsers = () => {
        loaderContainer.current.classList.toggle('loader_active');
        axios.get(`http://localhost:3001/update-users?step=${peopleInfo.length}`)
            .then(response => {
                
                // setUsers(response.data);
                setUsers(response.data)
                loaderContainer.current.classList.toggle('loader_active');
                console.log("loaded");


            })
            .catch((err) => {
                
                loaderContainer.current.classList.toggle('loader_active');

            })
    }

    if (props.PeopleData.length == 2) {

        axios.get("http://localhost:3001/all-users")
            .then(response => {

                setUsers(response.data);

                console.log(response.data);


            })
            .catch((err) => {
                alert("some error");

            })

    }




    let peopleItems = peopleInfo.map((item: any) => {
        if (item.follow == "Follow") {
            return <Person key={item.id} func={props.UnFollow} id={item.id} occupation={item.occupation} name={item.name} follow={item.follow} />
        }
        else {
            return <Person key={item.id} func={props.Follow} id={item.id} occupation={item.occupation} name={item.name} follow={item.follow} />
        }
    })


    return (


        <div className="people__discover">

            <div className="people__list">
                {/* <Person name={peopleInfo[0].name} /> */}

                {peopleItems}

                {/* {a.People.id}sd */}

            </div>


            <div ref={loaderContainer} className="people__show-more">
                <button onClick={updateUsers} className="people__show-more-button">Show more</button>
                <div className="people__loader-container"><img src={loader} alt="" className="people__loader" /></div>
            </div>
        </div>





    )
}
export default PersonItems;



