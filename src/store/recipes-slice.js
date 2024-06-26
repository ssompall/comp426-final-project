import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  foodRecipes: [],
  favUrl: [],
  favKeys: {},
  isFavFetched: false,
  msg: "Don't know what to make? We've got your back!",
};

const recipesSlice = createSlice({
  name: "favRecipesSlice",
  initialState,
  reducers: {
    fetchRecipes(state, actions) {
      state.foodRecipes = actions.payload.recipes;
      state.favKeys = actions.payload.favKeys;
      state.isFavFetched = actions.payload.isFavFetched;
      state.msg = actions.payload.msg;
    },
    fetchFavUrl(state, actions) {
      state.favUrl = actions.payload.url;
      state.favKeys = actions.payload.favKeys;
    },
    deleteFavRecipes(state, actions) {
      const url = actions.payload.url;
      const index = state.favUrl.indexOf(url);
      state.favUrl.splice(index, 1);
      delete state.favKeys.url;

      //deleting unfavourite recipe from recipe list
      if (state.isFavFetched) {
        for (const recipeObj of state.foodRecipes) {
          if (recipeObj.recipe.url === url) {
            const recipeIndex = state.foodRecipes.indexOf(recipeObj);
            state.foodRecipes.splice(recipeIndex, 1);
          }
        }
      }
    },
    clearOnLogout(state) {
      state.favUrl = [];
      state.favKeys = {};
      if (state.isFavFetched) {
        state.foodRecipes = [];
        state.isFavFetched = false;
        state.msg = "Login to see your saved recipes";
      }
    },
  },
});

export const recipesActions = recipesSlice.actions;

export default recipesSlice.reducer;
