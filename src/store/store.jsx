import {configureStore} from "@reduxjs/toolkit"
import readSliceReducer from "../store/ReadSlice"

const myStore = configureStore({
    reducer:readSliceReducer
})

export default myStore
