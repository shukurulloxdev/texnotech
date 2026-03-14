import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface basketIdsType {
  basketIds: string[];
}

const initialState: basketIdsType = {
  basketIds: [],
};

const basketState = createSlice({
  name: "basketIds",
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<string>) => {
      state.basketIds.push(action.payload);
    },
    deleteBasket: (state, action: PayloadAction<string>) => {
      state.basketIds = state.basketIds.filter(
        (product) => product !== action.payload,
      );
    },
    removeBasketIds: (state) => {
      state.basketIds = [];
    },
  },
});
export const { addBasket, deleteBasket, removeBasketIds } = basketState.actions;

export default basketState.reducer;
