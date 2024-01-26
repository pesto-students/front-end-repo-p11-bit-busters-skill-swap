import {
    USER_SEARCH_REQUEST,
    USER_SEARCH_SUCCESS,
    USER_SEARCH_FAILURE,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAILURE,
    USER_SEARCH_REQUEST_APPEND,
    USER_SEARCH_SUCCESS_APPEND,
} from "../actions/userAction";

const initialState = {
    loading: false,
    users: [],
    successMessage: "",
    user: {},
    errors: {},
    pagination: {
        currentPage: 1,
        hasNextPage: false,
        hasPrevPage: false,
        limit: 0,
        total_docs: 0,
        total_pages: 0,
    },
    append_loading: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_SEARCH_REQUEST:
            return {
                ...state,
                loading: true,
                successMessage: "",
                errors: {},
            };
        case USER_SEARCH_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: action.payload.message,
                users: action.payload.data.users,
                pagination: action.payload.data.pagination,
                errors: {},
            };
        case USER_SEARCH_FAILURE:
            return {
                ...state,
                loading: false,
                isLoggedIn: false,
                successMessage: "",
                errors: action.payload.errors,
            };
        case USER_SEARCH_REQUEST_APPEND:
            return {
                ...state,
                append_loading: true,
                successMessage: "",
                errors: {},
            };
        case USER_SEARCH_SUCCESS_APPEND:
            return {
                ...state,
                append_loading: false,
                successMessage: action.payload.message,
                users: [...state.users, ...action.payload.data.users],
                pagination: action.payload.data.pagination,
                errors: {},
            };
        case USER_PROFILE_REQUEST:
            return {
                ...state,
                loading: true,
                successMessage: "",
                errors: {},
            };
        case USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                successMessage: action.payload.message,
                user: action.payload.data.user,
                errors: {},
            };
        case USER_PROFILE_FAILURE:
            return {
                ...state,
                loading: false,
                successMessage: "",
                errors: action.payload.errors,
                append_loading: false,
            };
        default:
            return state;
    }
};

export default userReducer;
