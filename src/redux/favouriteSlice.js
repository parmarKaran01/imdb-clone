import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
    name:"favourites",
    initialState:[],
    reducers:{
        addToFav(state, action){
            state.push(action.payload)
        },

        removeFromFav(state, action){
            return state.filter((item) => item.id !== action.payload)
        }
    }
})



export const {addToFav , removeFromFav} = favouriteSlice.actions
export const favState = (state) => state.favourites 
export default favouriteSlice.reducer