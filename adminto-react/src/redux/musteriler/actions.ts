
import { MusterilerActionTypes } from "./constants";

export type MusterilerActionType = {
    type:
    | MusterilerActionTypes.API_RESPONSE_SUCCESS
    | MusterilerActionTypes.API_RESPONSE_ERROR
    | MusterilerActionTypes.GET_MUSTERILER
    | MusterilerActionTypes.GET_MUSTERI
    | MusterilerActionTypes.ADD_MUSTERI
    | MusterilerActionTypes.SELECTED_MUSTERI;
    payload: any;
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

export const getMusteriler = (data: any): MusterilerActionType => ({
    type: MusterilerActionTypes.GET_MUSTERILER,
    payload: data,
});

export const getMusteri = (data: any): MusterilerActionType => ({
    type: MusterilerActionTypes.GET_MUSTERI,
    payload: data,
});

export const addMusteri = (data: any): MusterilerActionType => ({
    type: MusterilerActionTypes.ADD_MUSTERI,
    payload: data,
});

export const selectedMusteri = (actionType:string,data: MusterilerData): MusterilerActionType => ({
    type: MusterilerActionTypes.SELECTED_MUSTERI,
    payload: {actionType,data},
});

export const apiResponseSuccess = (data: any): MusterilerActionType => ({
    type: MusterilerActionTypes.API_RESPONSE_SUCCESS,
    payload: data,
});

export const apiResponseError = (data: any): MusterilerActionType => ({
    type: MusterilerActionTypes.API_RESPONSE_ERROR,
    payload: data,
});

