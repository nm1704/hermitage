import {createSlice} from '@reduxjs/toolkit'

const favoriteSlice= createSlice({
    name: 'favorites',
    initialState: [],
    reducers: {
        toggleFavorite: (state,action)=>{
            const id = action.payload
            const index= state.indexOf(id)
            if (index==-1){
                state.push(id)
            } else{
                state.splice(index,1)
            }

            },

        },
})
export const {toggleFavorite}= favoriteSlice.actions
export default favoriteSlice.reducer