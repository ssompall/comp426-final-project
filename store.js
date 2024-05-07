import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authenticate-slice";
import UIReducer from "./notifications-slice";
import recipesReducer from "./recipes-slice";
const store = configureStore({
  reducer: { auth: authReducer, UI: UIReducer, recipes: recipesReducer },
});
export default store;
