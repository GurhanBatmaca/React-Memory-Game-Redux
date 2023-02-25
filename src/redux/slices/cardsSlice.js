import { createSlice } from "@reduxjs/toolkit";import { data } from "../../data/data";
const fullCardList = [...data,...data].sort(function(){
    return 0.5 - Math.random();
});

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cardList: fullCardList,
        score : 0,
        clicedItem : "",
        clickIndex: 0,
        clickedCards: []
    },
    reducers: {
        firsClick: (state,action) => {
            state.cardList.map((card,index) => {
                if(index === action.payload.index) {
                    card.status = true;
                    state.clickIndex += 1;
                    state.clicedItem = action.payload.name;     
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
            state.score -= 10 
            state.cardList.map((card,index) => {
                if(card.name === action.payload.name) {
                    card.status = false; 
                   
                }
            })
        },
        oneWronCard: (state,action) => {
            state.cardList.map((card,index) => {
                if(card.name === state.clicedItem) {
                    card.status = false;
                }
            }) 
        },
        resetList: (state,action) => {
            state.cardList = [...data,...data].sort(function(){
                return 0.5 - Math.random();
            });
            state.score = 0;
            state.clicedItem = "";
            state.clickIndex = 0;
            state.clickedCards = [];
        },
        addScore: (state,action) => {
            state.score += 50
            state.clickedCards.push(state.clicedItem)
        }
    }
})

export const { firsClick,secondClick,wrongCard,oneWronCard,trueGuess,resetList,addScore } = cardsSlice.actions;

export default cardsSlice.reducer;

