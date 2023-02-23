import { createSlice } from "@reduxjs/toolkit";import { data } from "../../data/data";
const fullCardList = [...data,...data].sort(function(){
    return 0.5 - Math.random();
});


const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cardList: fullCardList,
        clickedCards : [],
        clicedItem : {},
        clickIndex: 0
    },
    reducers: {
        clickCard: (state,action) => {
            state.cardList.map((card,index) => {
                if(index === action.payload) {
                    state.clickIndex += 1;
                    card.status = true;
                }
            })
        },
        correctCard: (state,action) => {

        },
        wrongCard: (state,action) => {

        }
        
    }
})

export const { clickCard } = cardsSlice.actions;

export default cardsSlice.reducer;

