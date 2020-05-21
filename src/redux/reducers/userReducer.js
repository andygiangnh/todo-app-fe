import {
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    RESET_SIGNUP_FORM
} from '../actions/actionTypes'

const initialState = {
    signup: {
        success: false,
        errors: {}
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    message: "User registration is successful!",
                    success: true
                }
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                signup: {
                    ...state.signup,
                    success: false,
                    message: action.payload.message,
                    errors: action.payload.errors
                }
            }
        case RESET_SIGNUP_FORM:
            return initialState
        default:
            return state
    }
}