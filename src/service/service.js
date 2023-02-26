import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk("fetchList", async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`);
    const data = await res.json();
    const mixList = [...data.results,...data.results].sort(function(){
        return 0.5 - Math.random();
    });
    // console.log(mixList);
    return data.results

})