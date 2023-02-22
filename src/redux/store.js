import { configureStore } from '@reduxjs/toolkit';
import cardsSlice from './slices/cardsSlice';

export const store = configureStore({
    reducer: {
        cards: cardsSlice
    }
})