import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if(loading){
        <Loading></Loading>
    }

    if(!user){
        <Navigate to="/login" state={{ from: location }} replace ></Navigate>
    }

    return children;
};

export default RequireAuth;