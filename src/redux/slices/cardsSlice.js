import { createSlice } from "@reduxjs/toolkit";import { data } from "../../data/data";

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cardList: data
    },
    reducers: {}
})

export default cardsSlice.reducer;