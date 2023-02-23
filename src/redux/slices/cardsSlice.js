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
                    if(state.clickIndex == 1) {                       
                        card.status = true;
                        state.clicedItem = card;    
                    }
                    if(state.clickIndex == 2) {
                        card.status = true;
                        if(card.name === state.clicedItem.name) {
                            // state.clickedCards.push(card);
                            // state.clickedCards.push(state.clicedItem);
                            // state.clicedItem = {};
                            // state.clickIndex = 0
                        } else {
                            card.status = false;
                            state.clicedItem.status == false
                            // state.clicedItem = {};
                            // state.clickIndex = 0
                        }
                        state.clicedItem = {};
                        state.clickIndex = 0
                                              
                    }                  
                    
                }
            })
            console.log(fullCardList); 
            console.log(state.cardList)
        }
        
    }
})

export const { clickCard } = cardsSlice.actions;

export default cardsSlice.reducer;