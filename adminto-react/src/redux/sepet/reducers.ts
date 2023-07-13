import { SepetActionTypes } from "./constants";

const INIT_STATE = {
    sepet: [
        {
            id: 1,
            image: "https://via.placeholder.com/110x110",
            title: "Apple - MacBook Air® - 13.3",
            category: "Laptop",
            state: "Pending",
            shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.",
            price: 2500,
            quantity: 1,
            variant: "Primary",
            customInput: {
                name: "customRadio",
                placeholder: "Select",
                options: [
                    {
                        id: 1,
                        value: "Option 1",
                    },
                    {
                        id: 2,
                        value: "Option 2",
                    },

                ],
            },
        },
        ],
};


type CustomInput = {
name: string;
placeholder: string;
[key: string]: string;
}
type SepetData = {
    id: number;
    image: string;
    title: string;
    category: string;
    state: string;
    shortDesc: string;
    price: number;
    quantity: number;
    variant: string;
    customInput?: CustomInput;
    };

type SepetActionType = {
    type:
        | SepetActionTypes.SELECTED_SEPET;
    payload: {
        actionType?: string;
        data?: SepetData[];
    };
};

type State = {
    sepet?: SepetData | {};
};

const Sepet = (state: State = INIT_STATE, action: SepetActionType): any => {

    switch (action.type) {
        case SepetActionTypes.SELECTED_SEPET:
            return {
                ...state,
                sepet: action.payload.data,
            };
        default:
            return state;
    }
};

export default Sepet;



