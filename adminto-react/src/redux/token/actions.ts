
import { TokenActionTypes } from "./constants";

export type TokenActionType = {
    type:
    | TokenActionTypes.TOKEN_SUCCESS
    | TokenActionTypes.LOGOUT_USER;
    payload: any;
};

type TokenData = {
    token: string;
};

export const getToken = (actionType:string,data: any): TokenActionType => ({
    type: TokenActionTypes.TOKEN_SUCCESS,
    payload: {actionType,data},
});

export const logoutUser = (): TokenActionType => ({
    type: TokenActionTypes.LOGOUT_USER,
    payload: {},
});


