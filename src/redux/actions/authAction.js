import apiCall from "../../utils/apiCall";

export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

export const AUTH_USER_PROFILE_REQUEST = "AUTH_USER_PROFILE_REQUEST";
export const AUTH_USER_PROFILE_SUCCESS = "AUTH_USER_PROFILE_SUCCESS";
export const AUTH_USER_PROFILE_FAILURE = "AUTH_USER_PROFILE_FAILURE";

export const loginUser = (data, successCallback) => {
    return async (dispatch) => {
        const url = `auth/login`;
        const actionTypes = {
            REQUEST: LOGIN_USER_REQUEST,
            SUCCESS: LOGIN_USER_SUCCESS,
            FAILURE: LOGIN_USER_FAILURE,
        };

        await apiCall(
            dispatch,
            "POST",
            url,
            data,
            actionTypes,
            successCallback
        );
    };
};

export const registerUser = (data, successCallback) => {
    return async (dispatch) => {
        const url = `auth/register`;
        const actionTypes = {
            REQUEST: REGISTER_USER_REQUEST,
            SUCCESS: REGISTER_USER_SUCCESS,
            FAILURE: REGISTER_USER_FAILURE,
        };

        await apiCall(
            dispatch,
            "POST",
            url,
            data,
            actionTypes,
            successCallback
        );
    };
};

export const getAuthUserProfile = (successCallback) => {
    return async (dispatch) => {
        const url = `user/profile`;
        const actionTypes = {
            REQUEST: AUTH_USER_PROFILE_REQUEST,
            SUCCESS: AUTH_USER_PROFILE_SUCCESS,
            FAILURE: AUTH_USER_PROFILE_FAILURE,
        };
        const token = localStorage.getItem("access_token");
        const headers = {
            headers: {
                Authorization: `${token}`,
            },
        } 

        await apiCall(dispatch, "GET", url, {}, actionTypes, successCallback, headers);
    };
};

export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem("access_token");
        window.location.href = "/login";
    };
};
