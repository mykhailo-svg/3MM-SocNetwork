import React from "react";
import axios from 'axios';
import "./People.scss"
import Items from "./Items/Item/PersonItems";

import PersonItems from "./Items/Item/PersonItems";

const People:React.FC = () => {

    
    
    return (
        <section className="people _container">

            <div className="people__container ">
                <h1 className="people__title">
                    Get in touch
                </h1>

                <PersonItems/>

                

            </div>

        </section>


    )
}
export default People;



