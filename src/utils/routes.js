import { generatePath } from "react-router-dom";

const routes = {
    dashboard: "/",
    login: "/login",
    register: "/register",
};

const generateUrl = (routeName, params = {}) => {
    if (!routes[routeName]) {
        throw new Error(`Route not found: ${routeName}`);
    }

    return generatePath(routes[routeName], params);
};

export default generateUrl;
