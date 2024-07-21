function searchMovie() {
    const apiKey = '878239e8'; 
    const searchInput = document.getElementById('search-input').value;

    if (!searchInput) {
        alert('Please enter a movie title');
        return;
    }

    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${encodeURIComponent(searchInput)}`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data =>displayMovieResult(data))
      .catch(error => console.error('Error fetching data:', error));
}

function displayMovieResult(movieData) {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';

    if (movieData.Response === 'False') {
        resultContainer.innerHTML = `<p>No movie found</p>`;
        return;
    }

    const movieTitle = `<h2>${movieData.Title}</h2>`;
    const moviePoster = movieData.Poster !== 'N/A' ? `<img src="${movieData.Poster}" alt="${movieData.Title} Poster">` : '';
    const movieDetails = `
        <p><strong>Year:</strong> ${movieData.Year}</p>
        <p><strong>Genre:</strong> ${movieData.Genre}</p>
        <p><strong>Plot:</strong> ${movieData.Plot}</p>
    `;

    resultContainer.innerHTML = movieTitle + moviePoster + movieDetails;
}
