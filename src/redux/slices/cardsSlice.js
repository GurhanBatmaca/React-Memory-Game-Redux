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
        firsClick: (state,action) => {
            state.cardList.map((card,index) => {
                if(index === action.payload.index) {
                    card.status = true;
                    state.clickIndex += 1;
                    state.clicedItem = action.payload.card;               
                }
            })
        },
        secondClick: (state,action) => {
            state.cardList.map((card,index) => {
                if(index === action.payload.index) {
                    card.status = true;
                    state.clickIndex = 0;              
                }
            })
        }, 
        wrongCard: (state,action) => {
            state.clicedItem.status = false
            state.cardList.map((card,index) => {
                if(card.name === action.payload.name) {
                    card.status = false;             
                }
            })
        }      
    }
})

export const { firsClick,secondClick,wrongCard } = cardsSlice.actions;

export default cardsSlice.reducer;

