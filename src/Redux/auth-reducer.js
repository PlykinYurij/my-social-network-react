import React from "react";
import { stopSubmit } from "redux-form";
import { headerAPI } from "../components/api/api";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } });
export const getAuthUserData = () => {
    return async (dispatch) => {
        let response = await headerAPI.getAuthMe()
        if (response.data.resultCode === 0) {
            let { userId, email, login } = response.data.data;
            dispatch(setAuthUserData(userId, email, login, true))
        }

    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {

    let response = await headerAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error"
        dispatch(stopSubmit("login", { _error: message }))
    }

}

export const loginOut = () => {
    return async (dispatch) => {
        let response = await headerAPI.loginOut()
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false))
        }
    }
}



export default authReducer;