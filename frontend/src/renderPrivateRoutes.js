/*eslint-disable*/
import { createTheme } from '@material-ui/core';
import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import UserHomePage from './containers/UserPage/ProfilePage';

const CreatePrivateRoute = ({auth, children}) => {
    // const auth = props.auth;
    if (!auth) {
        return (<Navigate to="/login" replace />);
    }
    return children;
};

// const RenderPrivateRoutes = () => {
//     return (
//         <Route
//             path="/user"
//             element={
//                 <CreatePrivateRoute auth={true}>
//                     <UserHomePage />
//                 </CreatePrivateRoute>
//             }
//         />
//     );
// };

// function CreatePrivateRoute({ auth, children }) {
//     console.log(auth)
//     if (!auth) {
//         return (<Navigate to="/login" replace />);
//     }
//     return children
// }

export default CreatePrivateRoute;