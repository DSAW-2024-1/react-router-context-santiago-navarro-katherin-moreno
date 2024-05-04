import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import {Card} from "../../Components/Card/Card"
import { ROUTES } from "../../navigation";

const Contact = ()=>{
    return(
        <div>
            <h1> CONTACT!!!!!!!</h1>
            <NavLink
                to = {ROUTES.HOME.path}
            > 
                <Button label = {ROUTES.HOME.label}/>
            
            </NavLink>

        </div>




    )
}

export default Contact;