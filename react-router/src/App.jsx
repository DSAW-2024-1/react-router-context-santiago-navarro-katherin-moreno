
import  React from "react";
import {Home, Overview, Login, Contact} from './pages'
import { BrowserRouter as Router, Route, Navigate, Routes } from "react-router-dom";
import { ROUTES } from "./navigation";

function App(){
   return <Router>
        <Routes>
            <Route path={ROUTES.HOME.path} element={<Home/>}/>
            <Route path={ROUTES.OVERVIEW.path} element={<Overview/>}/>
            <Route path={ROUTES.CONTACT.path} element={<Contact/>}/>
            <Route path={ROUTES.LOGIN.path} element={<Login/>}/>
            <Route path={ROUTES.ERROR_404.path} element={<div>NOT FOUND!!!</div>}/>
            <Route path="*" element={<Navigate to="/404"/>}/>
        </Routes>
    </Router>
}

export default App;

