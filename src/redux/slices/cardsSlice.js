import { createSlice } from "@reduxjs/toolkit"
import { fetchList } from "../../service/service";

const cardsSlice = createSlice({
    name: "cards",
    initialState: {
        cardList: [],
        score : 0,
        clicedItem : "",
        clickIndex: 0,
        clickedCards: []
    },
    reducers: {
        firsClick: (state,action) => {
            state.cardList.map((card,index) => {
                if(index === action.payload.index) {
                    card.adult = true;
                    state.clickIndex += 1;
                    state.clicedItem = action.payload.id;     
                }
            })
        },
        secondClick: (state,action) => {
            state.cardList.map((card,index) => {
                if(index === action.payload.index) {
                    card.adult = true;
                    state.clickIndex = 0;             
                }
            })
        }, 
        secondWrongCard: (state,action) => {
            state.score -= 10 
            state.cardList.map((card,index) => {
                if(card.id === action.payload.id) {
                    card.adult = false;                   
                }
            })
        },
        firstWrongCard: (state,action) => {
            state.cardList.map((card,index) => {
                if(card.id === state.clicedItem) {
                    card.adult = false;
                }
            }) 
        },
        resetList: (state) => {
            state.cardList = [...state.cardList ].sort(function() {
                return 0.5 - Math.random();
            })
            state.cardList.map((card) => {
                card.adult = false;
            })
            state.score = 0;
            state.clicedItem = "";
            state.clickIndex = 0;
            state.clickedCards = [];
        },
        addScore: (state) => {
            state.score += 50;
            state.clickedCards.push(state.clicedItem);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchList.pending , (state, action) => {
            console.log("loading");
        })
        builder.addCase(fetchList.fulfilled , (state, action) => {
            state.cardList = [...action.payload,...action.payload].sort(function(){
                return 0.5 - Math.random();
            });
        })
        builder.addCase(fetchList.rejected , (state, action) => {
            console.log("error");
            console.log(action.payload);
        })
    }
})

export const { firsClick,secondClick,secondWrongCard,firstWrongCard,resetList,addScore } = cardsSlice.actions;

export default cardsSlice.reducer;

