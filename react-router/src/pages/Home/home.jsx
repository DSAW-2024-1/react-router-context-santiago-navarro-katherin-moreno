import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/LoginContext";
import { Button } from "../../Components/Button/Button";
import { ROUTES } from "../../navigation";

const Home = () => {
    const navigate = useNavigate();
    const {dispatch} = useLoginContext();

    const logOut = () => {
        dispatch({
            type: 'SET_LOGGEDOUT'
        });
        navigate("/login");
    }

    return (
        <div>
            <h1>Home</h1>
            <NavLink to={ROUTES.OVERVIEW.path}>
                <Button label={ROUTES.OVERVIEW.label}/>
            </NavLink>
            <NavLink to={ROUTES.CONTACT.path}>
                <Button label={ROUTES.CONTACT.label}/>
            </NavLink>
            <Button callback={logOut} label="Logout" />
        </div>
    );
}

export default Home;