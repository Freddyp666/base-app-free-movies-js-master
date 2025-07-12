//Button to search for movies
document.getElementById('searchButton').addEventListener('click', searchMovies);

    let resultsContainer = document.getElementById('results');
     // Clear previous results
// Function to search for movies
function searchMovies() {
    resultsContainer.innerHTML = 'Cargando...';
    let searchInput = document.getElementById('searchInput').value;

    if (searchInput.trim() === '') {
        alert('Please enter a movie name');
        return;
    } else {
        getMovies(searchInput)
            .then(movies => displayMovies(movies))
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while fetching movies. Please try again later.');
            });

    }

}

// Function to display movies in the UI
function displayMovies(movies) {
    resultsContainer.innerHTML = ''; // Clear previous results


    if (movies.length === 0) {
        resultsContainer.innerHTML = '<p>No movies found.</p>';
        return;
    }

    movies.forEach(movie => {
        let movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster" class="movie-poster" />

            <h3>${movie.title}</h3>
            <p>Release Date: ${movie.release_date}</p>
            <p>Overview: ${movie.overview}</p>
            <p>Rating: ${movie.vote_average}</p>
            <p>Popularity: ${movie.popularity}</p>
            <p>Language: ${movie.original_language}</p>
        `;
        resultsContainer.appendChild(movieElement);

    })
}

// Function to clear search results
document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('searchInput').value = '';
    resultsContainer.innerHTML = '';
});