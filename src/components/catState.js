// here we are having all states information
import { createSlice } from "@reduxjs/toolkit";  //it is used to create simplified reducers.
export const catSlice= createSlice({
    name: 'cats',
    initialState:{
        cats: [], // it will store all the data from API
        isLoading:false
    },
    reducers:{
        getCatsFetch: (state) =>{
            state.isLoading=true;
        },
        getCatsSuccess: (state, action)=>{
            state.cats=action.payload;
            state.isLoading = false;
        },
        getCatsFailure: (state) => {
            state.isLoading=false;
        }
    }
})
export const { getCatsFetch, getCatsSuccess,getCatsFailure}= catSlice.actions;

export default catSlice.reducer;