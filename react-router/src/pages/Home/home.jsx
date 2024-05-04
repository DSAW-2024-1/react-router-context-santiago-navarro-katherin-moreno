import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import {Card} from "../../Components/Card/Card"
import { ROUTES } from "../../navigation";

const Home = ()=>{
    return(
        <div>
            <h1> Bienvenido!!!!!!!</h1>
            <NavLink
                to = {ROUTES.OVERVIEW.path}
            > 
                <Button label = {ROUTES.OVERVIEW.label}/>
            
            </NavLink>
            <NavLink
                to = {ROUTES.CONTACT.path}
            > 
                <Button label = {ROUTES.CONTACT.label}/>
            
            </NavLink>

        </div>




    )
}

export default Home