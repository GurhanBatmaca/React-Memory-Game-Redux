import { createSlice } from "@reduxjs/toolkit";import { data } from "../../data/data";
const fullCardList = [...data,...data].sort(function(){
    return 0.5 - Math.random()
})
// fullCardList.sort(function(){
//     return 0.5 - Math.random()
// })

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cardList: fullCardList
    },
    reducers: {
        clickCard: (state,action) => {
            state.cardList.map((card,index) => {
                if(index === action.payload) {
                    card.status = true;
                    console.log(card.name);
                    console.log(card.status);
                }
            })
        }
    }
})

export const { clickCard } = cardsSlice.actions;

export default cardsSlice.reducer;