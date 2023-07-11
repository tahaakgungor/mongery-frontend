import { APICore } from '../../helpers/api/apiCore';
import { MusterilerActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
    musteriler: [],
    musteri: {},
    loading: false,
};

type MusterilerData = {
    id: number;
    avatar: string;
    shortDesc: string;
    name: string;
    mobile: string;
    email: string;
    adres: string;
    firmaAdi: string;
};

type MusterilerActionType = {
    type:
        | MusterilerActionTypes.API_RESPONSE_SUCCESS
        | MusterilerActionTypes.API_RESPONSE_ERROR
        | MusterilerActionTypes.GET_MUSTERILER
        | MusterilerActionTypes.GET_MUSTERI
        | MusterilerActionTypes.ADD_MUSTERI
        | MusterilerActionTypes.SELECTED_MUSTERI;
    payload: {
        actionType?: string;
        data?: MusterilerData | {};
        error?: string;
    };
};

type State = {
    musteriler?: MusterilerData[] | [];
    musteri?: MusterilerData | {};
    loading?: boolean;
    value?: boolean;
};

const Musteriler = (state: State = INIT_STATE, action: MusterilerActionType): any => {

    switch (action.type) {
        case MusterilerActionTypes.API_RESPONSE_SUCCESS:
            switch (action.payload.actionType) {
                case MusterilerActionTypes.GET_MUSTERILER: {
                    return {
                        ...state,
                        musteriler: action.payload.data,
                    };
                }
                case MusterilerActionTypes.GET_MUSTERI: {
                    return {
                        ...state,
                        musteri: action.payload.data,
                    };
                }
                case MusterilerActionTypes.ADD_MUSTERI: {
                    return {
                        ...state,
                        musteri: action.payload.data,
                    };
                }
                case MusterilerActionTypes.SELECTED_MUSTERI: {
                    return {
                        ...state,
                        musteri: action.payload.data,
                    };
                }
                default:
                    return state;
            }
        case MusterilerActionTypes.API_RESPONSE_ERROR:
            return {
                ...state,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default Musteriler;

