/*eslint-disable*/
import { createTheme } from '@material-ui/core';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import UserHomePage from './containers/UserPage/ProfilePage';

const CreatePrivateRoute = ({ children }) => {
    const auth = localStorage.getItem(localStorage.getItem('username'));
    if (auth !== 'true') {
        return (<Navigate to="/auth/login" replace />);
    }
    return children;
};

const RenderPrivateRoutes = (children) => {
    return (
        <Route path="/user">
            <CreatePrivateRoute auth={true}>
                {children}
            </CreatePrivateRoute>
        </Route>
    );
};

// function CreatePrivateRoute({ auth, children }) {
//     console.log(auth)
//     if (!auth) {
//         return (<Navigate to="/login" replace />);
//     }
//     return children
// }

export default CreatePrivateRoute;