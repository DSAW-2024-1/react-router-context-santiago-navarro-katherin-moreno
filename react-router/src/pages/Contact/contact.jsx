import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Button/Button";

import { ROUTES } from "../../navigation";

const Contact = ()=>{
    return(
        <div>
            <h1> Contact</h1>
            <NavLink
                to = {ROUTES.HOME.path}
            > 
                <Button label = {ROUTES.HOME.label}/>
            
            </NavLink>
            <NavLink to={ROUTES.OVERVIEW.path}>
                <Button label={ROUTES.OVERVIEW.label}/>
            </NavLink>


        </div>




    )
}

export default Contact;