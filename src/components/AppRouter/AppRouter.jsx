import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Error404 from "../Errors/Error404";
import PrivateRoute from "../middlewares/PrivateRoute";
import Login from "../../pages/Login/Login";
import generateUrl, { routes } from "../../utils/routes";
import Register from "../../pages/Register/Register";
import AppLayout from "../AppLayout/AppLayout";
import EditProfile from "../../pages/EditProfile/EditProfile";
import Search from "../../pages/Search/Search";
import ViewProfile from "../../pages/ViewProfile/ViewProfile";
import Messages from "../../pages/Messages/Messages";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path={generateUrl("login")} element={<Login />} />
                <Route
                    exact
                    path={generateUrl("register")}
                    element={<Register />}
                />
                <Route element={<PrivateRoute />}>
                    <Route element={<AppLayout />}>
                        <Route exact path={routes.dashboard} element={<Search />} />
                        <Route exact path={routes.profile} element={<EditProfile />} />
                        <Route exact path={routes.user_profile} element={<ViewProfile />} />
                        <Route exact path={routes.messages} element={<Messages />} />
                        {/* <Route element={<IsAdmin />}></Route> */}
                    </Route>
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
