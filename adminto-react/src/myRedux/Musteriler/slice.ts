import { createSlice, PayloadAction } from "@reduxjs/toolkit";



// Define a type for the slice state
export interface MusterilerState {
    id: number;
    avatar: string;
    shortDesc: string;
    name: string;
    mobile: string;
    email: string;
    adres: string;
    firmaAdi: string;
    }


  // Define the initial state using that type
  const initialState: MusterilerState = {
    id: 0,
    avatar: "",
    shortDesc: "",
    name: "",
    mobile: "",
    email: "",
    adres: "",
    firmaAdi: "",
  } as MusterilerState

export const musterilerSlice = createSlice({
    name: "musteriler123",
    initialState,
    reducers: {
        musteriSec: (state, action: PayloadAction<MusterilerState>) => {
            state.id = action.payload.id;
            state.avatar = action.payload.avatar;
            state.shortDesc = action.payload.shortDesc;
            state.name = action.payload.name;
            state.mobile = action.payload.mobile;
            state.email = action.payload.email;
            state.adres = action.payload.adres;
            state.firmaAdi = action.payload.firmaAdi;
        }
    }
})

export const { musteriSec } = musterilerSlice.actions;

export default musterilerSlice.reducer;