import React, { useEffect } from "react";
import Person from "../Person";
import axios from "axios";

// type TypePersonItemsProps = {


//     PeopleData: {


//             id: number;
//         name: string;
//         occupation: string;


//     }


// }


const PersonItems: React.FC = (props: any) => {
    useEffect(()=>{
        console.log("hi");
        
    })

    let peopleInfo = props.PeopleData;


    if (props.PeopleData.length == 2) {
       
        axios.get("http://localhost:3001/")
            .then(response => {
                debugger;
                props.SetUsers(response.data);

                console.log(response.data);


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


            <div className="people__show-more"> <button className="people__show-more-button">Show more</button></div>
        </div>





    )
}
export default PersonItems;



