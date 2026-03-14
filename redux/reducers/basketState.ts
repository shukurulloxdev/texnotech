import {
  getBasketIdsStorage,
  removeBasketIdsStorage,
  setBasketIdsStorage,
} from "@/local-storage/basket-storage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface basketIdsType {
  basketIds: string[];
}

const initialState: basketIdsType = {
  basketIds: getBasketIdsStorage(),
};

const basketState = createSlice({
  name: "basketIds",
  initialState,
  reducers: {
    addBasket: (state, action: PayloadAction<string>) => {
      const isBasket = state.basketIds.includes(action.payload);
      if (isBasket) {
        state.basketIds = state.basketIds.filter(
          (product) => product !== action.payload,
        );
      } else {
        state.basketIds.push(action.payload);
      }
      setBasketIdsStorage(state.basketIds);
    },
    removeBasketIds: (state) => {
      state.basketIds = [];
      removeBasketIdsStorage();
    },
  },
});
export const { addBasket, removeBasketIds } = basketState.actions;

export default basketState.reducer;
