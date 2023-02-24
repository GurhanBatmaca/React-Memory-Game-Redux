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
                if(index === action.payload.index) {
                    card.status = true;
                    state.clickIndex += 1;               
                }
            })

        },
        firstCard: (state,action) => {
            state.clicedItem = action.payload.card
        },
        // wrongCard: (state,action) => {
        //     state.cardList.map((card,index) => {
        //         if(index === action.payload.index) {
        //             state.clickIndex = 0;
        //             card.status = false;
        //         }
        //     })
        // },
        // trueCard: (state,action) => {
        //     state.clicedItem = {}
        //     state.clickIndex = 0
        // },
        // closeToFirtCard : (state,action) => {
        //     state.clicedItem = action.payload
        //     state.clicedItem = false
        //     console.log(action.payload);
        // }
        
    }
})

export const { clickCard,firstCard,wrongCard,trueCard,closeToFirtCard } = cardsSlice.actions;

export default cardsSlice.reducer;

