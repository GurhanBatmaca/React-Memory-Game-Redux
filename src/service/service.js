import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchList = createAsyncThunk("fetchList", async () => {
    const res = await fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_IMDB_API_KEY}&language=en-US&page=1`);
    const data = await res.json();
    return data.results;
    // console.log(data.results);

})