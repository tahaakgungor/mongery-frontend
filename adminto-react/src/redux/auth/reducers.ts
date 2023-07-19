// apicore
import { APICore } from '../../helpers/api/apiCore';

// constants
import { AuthActionTypes } from './constants';

const api = new APICore();

const initialState = {
    user: {
        id: 1,
        email: '',
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        role: '',
        token: '',
    },
    // other initial state properties
};


type UserData = {
    id: number;
    email: string;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
    token: string;
};

type AuthActionType = {
    type:
        | AuthActionTypes.API_RESPONSE_SUCCESS
        | AuthActionTypes.API_RESPONSE_ERROR
        | AuthActionTypes.LOGIN_USER
        | AuthActionTypes.SIGNUP_USER
        | AuthActionTypes.LOGOUT_USER
        | AuthActionTypes.RESET;
    payload: {
        actionType?: string;
        data?: UserData | {};
        error?: string;
    };
};

type State = {
    user?: UserData | {};
};

const Auth = (state: State = initialState, action: AuthActionType): any => {
    switch (action.type) {
                case AuthActionTypes.LOGIN_USER: {
                    return {
                        ...state,
                        user: action.payload.data,
                        userLoggedIn: true,
                        loading: false,
                    };
                }
                case AuthActionTypes.SIGNUP_USER: {
                    return {
                        ...state,
                        userSignUp: true,
                        loading: false,
                    };
                }
                case AuthActionTypes.LOGOUT_USER: {
                    return {
                        ...state,
                        user: null,
                        loading: false,
                        userLogout: true,
                    };
                }
                default:
                    return { ...state };
            }
};

export default Auth;
