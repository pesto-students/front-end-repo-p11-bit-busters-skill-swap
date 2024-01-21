import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Error404 from "../Errors/Error404";
import PrivateRoute from "../Middlewares/PrivateRoute";
import Login from "../../pages/Login/Login";
import generateUrl from "../../utils/routes";
import Register from "../../pages/Register/Register";
import AppLayout from "../AppLayout/AppLayout";
import EditProfile from "../../pages/EditProfile/EditProfile";

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
                        <Route exact path={generateUrl('dashboard')} element={<> aaa</>} />
                        <Route exact path={generateUrl('profile')} element={<EditProfile />} />
                        {/* <Route exact path="/" element={<Dashboard />} />
                        <Route
                            exact
                            path="/location/list"
                            element={<LocationList />}
                        />
                        <Route
                            exact
                            path="/system/list"
                            element={<SystemList />}
                        />
                        <Route exact path="/report" element={<Report />} />
                        <Route
                            exact
                            path="/billing"
                            element={<BillingCheck />}
                        />
                        <Route element={<IsAdmin />}></Route> */}
                    </Route>
                </Route>
                <Route path="*" element={<Error404 />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;
