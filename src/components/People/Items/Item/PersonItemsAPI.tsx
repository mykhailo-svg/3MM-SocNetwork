//@ts-nocheck

import React, { useEffect } from "react";
import Person from "../Person";
import axios from "axios";
import loader from '../../../../img/people_loader.svg'
import PersonItems from "./PersonItems";
import { useSelector } from "react-redux";


const PersonItemsAPI: React.FC = (props: any) => {
    debugger;


    const PeopleData = useSelector((state) => state.people_reducer.People)   
    // let peopleInfo:any = props.PeopleData;
    // const loaderContainer:any = React.createRef();

    // let setUsers = (users: any) => {
    //     props.SetUsers(users);
    // }

    let updateUsers = (loader:any) => {
        // loader.classList.toggle('loader_active');
        // axios.get(`https://vrrr.vercel.app/update-users?step=${1}`)
        //     .then(response => {
        //         debugger;
          
        //         props.SetUsers(response.data)
        //         loader.classList.toggle('loader_active');
               


        //     })
        //     .catch((err) => {

        //         loader.classList.toggle('loader_active');
                
        //         console.log("errr");
                
        //     })
    }


    let firstPeopleLoad = () => {
        // debugger;
        // if (props.PeopleData.length == 2) {

        //     axios.get("http://localhost:3001/all-users")
        //         .then(response => {
        //             debugger;
        //             props.SetUsers(response.data);

        //             console.log(response.data);


        //         })
        //         .catch((err) => {
        //             // alert("some error");

        //         })

        // }
    }

    return (
        <PersonItems updateUsersFetch = {updateUsers} firstPeopleLoad= {firstPeopleLoad} PeopleData={PeopleData} UnFollow={props.UnFollow} SetUsers={props.SetUsers} Follow={props.Follow} />

    )
}
export default PersonItemsAPI;



