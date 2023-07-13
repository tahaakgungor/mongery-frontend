
import { TokenActionTypes } from "./constants";

export type TokenActionType = {
    type:
    | TokenActionTypes.TOKEN_SUCCESS;
    payload: any;
};

type TokenData = {
    token: string;
};

export const getToken = (data: any): TokenActionType => ({
    type: TokenActionTypes.TOKEN_SUCCESS,
    payload: data,
});



