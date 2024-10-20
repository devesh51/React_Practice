import {createSlice} from "@reduxjs/toolkit"

const ReadSlice = createSlice({
    name:"readSlice",
    initialState:{
        count:1
    },
    reducers:{
        readCount(state){
            state.count = count
        },
        Increment(state,action){
            state.count = action.payload
        }

    }
})

export const {readCount,Increment}  = ReadSlice.actions;
export default ReadSlice.reducer;