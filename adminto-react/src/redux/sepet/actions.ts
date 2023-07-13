
import { SepetActionTypes } from "./constants";

export type SepetActionType = {
    type:
    | SepetActionTypes.SELECTED_SEPET
    payload: any;
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

export const selectedSepet = (actionType:string,data: SepetData[]): SepetActionType => ({
    type: SepetActionTypes.SELECTED_SEPET,
    payload: {actionType,data},
});
