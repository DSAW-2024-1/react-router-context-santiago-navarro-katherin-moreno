import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../Components/Button/Button";
import {Card} from "../../Components/Card/Card"
import { ROUTES } from "../../navigation";

const Login = ()=>{
    return(
        <div>
            <h1> LOGIN!!!!!!!</h1>
            <NavLink
                to = {ROUTES.HOME.path}
            > 
                <Button label = {ROUTES.LOGIN.label}/>
            
            </NavLink>

        </div>




    )
}

export default Login