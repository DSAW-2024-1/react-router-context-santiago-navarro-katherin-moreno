import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import { ROUTES } from "../../navigation";

const Overview = ()=>{
    return(
        <div>
            <h1>Overview</h1>
            <NavLink
                to = {ROUTES.HOME.path}
            > 
                <Button label = {ROUTES.HOME.label}/>
            
            </NavLink>
            <NavLink to={ROUTES.CONTACT.path}>
                <Button label={ROUTES.CONTACT.label}/>
            </NavLink>

        </div> 




    )
}

export  default Overview;

