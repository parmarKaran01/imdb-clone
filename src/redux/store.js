import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./favouriteSlice"
const store = configureStore({
    reducer:{
        favourites: favouriteReducer
    }
})

export default store