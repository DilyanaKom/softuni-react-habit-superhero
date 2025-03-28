import {Navigate, Outlet} from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../user/UserContext';


export default function GuardedRoute(){
    const user = useContext(UserContext);

    const isAuthenticated = !!user?.accessToken;

    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }

    return <Outlet/>


}