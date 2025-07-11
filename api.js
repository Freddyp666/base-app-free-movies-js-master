
let api_key ='ea5e6f0ed4fe32cab0924dea5529c05e'; // Your API key here
let api_url ='https://api.themoviedb.org/3/search/movie'


function getMovies(queryInput) {
    fetch (`${api_url}?api_key=${api_key}&query=${searchInput}`)
}