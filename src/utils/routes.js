import { generatePath } from "react-router-dom";

export const routes = {
    dashboard: "/",
    login: "/login",
    register: "/register",
    profile: "/profile",
    user_profile: "/profile/:user_id",
};

const generateUrl = (routeName, params = {}) => {
    if (!routes[routeName]) {
        throw new Error(`Route not found: ${routeName}`);
    }

    return generatePath(routes[routeName], params);
};

export default generateUrl;
