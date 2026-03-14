import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface favoriteIdsType {
  favoriteIds: string[];
}

const initialState: favoriteIdsType = {
  favoriteIds: [],
};

const favoriteState = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteIds.push(action.payload);
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favoriteIds = state.favoriteIds.filter(
        (product) => product !== action.payload,
      );
    },
    removeAllFavorites: (state) => {
      state.favoriteIds = [];
    },
  },
});
export const { addFavorite, deleteFavorite, removeAllFavorites } =
  favoriteState.actions;

export default favoriteState.reducer;
