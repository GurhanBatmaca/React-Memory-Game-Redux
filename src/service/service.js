import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk("fetchList", async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`);
    const data = await res.json();
    const cardList = data.results.filter((card,index) => {
        if(index <= 11 ) {
            return card;
        }
    })
    return cardList;
});