import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async (page = 1) => {
    const response = await axios.get(`http://13.60.245.129:5000/api/recipes/?page=${page}&limit=10`);
    return response.data;
  }
);

const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    items: [],
    status: "idle",
    error: null,
    totalPages: 1,
    currentPage: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        
        state.items = action.payload.recipes; // ✅ Always replace, never append
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default recipeSlice.reducer;
