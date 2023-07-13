import { TokenActionTypes } from './constants';


const INIT_STATE = {
    token: '',

};
type TokenData = {
    token: string;
};

type TokenActionType = {
    type:
        | TokenActionTypes.TOKEN_SUCCESS;
    payload: {
        actionType?: string;
        data?: TokenData | {};
    };
};

type State = {
    token?: TokenData | {};
};

const Token = (state: State = INIT_STATE, action: TokenActionType): any => {

    switch (action.type) {
        case TokenActionTypes.TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload.data,
            };
        default:
            return state;
    }
};

export default Token;



