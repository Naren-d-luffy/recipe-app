import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      if (!state.some(recipe => recipe._id === action.payload._id)) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter(recipe => recipe._id !== action.payload._id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
