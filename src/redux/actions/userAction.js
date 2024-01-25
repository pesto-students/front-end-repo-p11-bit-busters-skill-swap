import apiCall from "../../utils/apiCall";

export const USER_SEARCH_REQUEST = "USER_SEARCH_REQUEST";
export const USER_SEARCH_SUCCESS = "USER_SEARCH_SUCCESS";
export const USER_SEARCH_FAILURE = "USER_SEARCH_FAILURE";

export const USER_PROFILE_REQUEST = "USER_PROFILE_REQUEST";
export const USER_PROFILE_SUCCESS = "USER_PROFILE_SUCCESS";
export const USER_PROFILE_FAILURE = "USER_PROFILE_FAILURE";

export const searchUser = (data, successCallback) => {
    return async (dispatch) => {
        const url = `user/search`;
        const actionTypes = {
            REQUEST: USER_SEARCH_REQUEST,
            SUCCESS: USER_SEARCH_SUCCESS,
            FAILURE: USER_SEARCH_FAILURE,
        };
        const token = localStorage.getItem("access_token");
        const headers = {
            headers: {
                Authorization: `${token}`,
            },
        } 

        await apiCall(
            dispatch,
            "POST",
            url,
            data,
            actionTypes,
            successCallback,
            headers,
        );
    };
};

export const getUserProfile = (user_id, successCallback) => {
    return async (dispatch) => {
        const url = `user/${user_id}/profile`;
        const actionTypes = {
            REQUEST: USER_PROFILE_REQUEST,
            SUCCESS: USER_PROFILE_SUCCESS,
            FAILURE: USER_PROFILE_FAILURE,
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