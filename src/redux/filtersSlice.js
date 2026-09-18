import { createSlice } from "@reduxjs/toolkit";

const filtersSlice= createSlice({
    name:'filters',
    initialState: {searchTerm:'',minBeds:0,maxPrice:5000},
    reducers:{
        setSearchTerm: (state,action)=>{state.searchTerm=action.payload},
        setMinBeds:(state,action)=>{state.minBeds=action.payload},
        setMaxPrice:(state,action)=>{state.maxPrice=action.payload},
    },
})
export const {setSearchTerm,setMinBeds,setMaxPrice}=filtersSlice.actions
export default filtersSlice.reducer