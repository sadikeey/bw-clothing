import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from '../types/data/products';

const initialState: IProducts = {
    id: 0,
    image: "",
    label: "",
    price: 0,
    ratings: 0,
    description: "",
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    update(_state, action: PayloadAction<IProducts>) {
      return action.payload
    },
  },
});

export const { update } = itemSlice.actions
export default itemSlice.reducer