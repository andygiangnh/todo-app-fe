import { LOGIN_SUCCESS, LOGOUT,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    RESET_SIGNUP_FORM
} from '../actions/actionTypes'

const initialState = {
    user: undefined,
    signup: {
        success: false,
        errors: {}
    },
    logout: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGOUT:
            return {
                ...state,
                user: undefined,
                logout: true
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                logout: false
            }
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