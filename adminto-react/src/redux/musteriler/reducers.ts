import { APICore } from '../../helpers/api/apiCore';
import { MusterilerActionTypes } from './constants';

const api = new APICore();

const INIT_STATE = {
    musteriler: [
        {
            id: 1,
            avatar: 'avatar1.jpg',
            shortDesc: 'Lorem ipsum dolor sit amet',
            name: 'John Smith',
            mobile: '+1-202-555-0175',
            email: '',
            adres: '',
            firmaAdi: '',
        },
    ]

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
        | MusterilerActionTypes.GET_MUSTERILER
        | MusterilerActionTypes.GET_MUSTERI
        | MusterilerActionTypes.ADD_MUSTERI
        | MusterilerActionTypes.SELECTED_MUSTERI;
    payload: {
        actionType?: string;
        data?: MusterilerData | {};
    };
};

type State = {
    musteriler?: MusterilerData | {};
};

const Musteriler = (state: State = INIT_STATE, action: MusterilerActionType): any => {

    switch (action.type) {
        case MusterilerActionTypes.GET_MUSTERILER:
            return {
                ...state,
                musteriler: action.payload.data,
            };
        case MusterilerActionTypes.GET_MUSTERI:
            return {
                ...state,
                musteriler: action.payload.data,
            };
        case MusterilerActionTypes.ADD_MUSTERI:
            return {
                ...state,
                musteriler: action.payload.data,
            };
        case MusterilerActionTypes.SELECTED_MUSTERI:
            return {
                ...state,
                musteriler: action.payload.data,
            };
        default:
            return state;
    }
};

export default Musteriler;



