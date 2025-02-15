import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "./recipeSlice";
import favoriteReducer from "./favoriteSlice";

const store = configureStore({
  reducer: {
    recipes: recipeReducer,
    favorites: favoriteReducer,
  },
});

export default store;
