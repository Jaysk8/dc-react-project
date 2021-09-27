const MovieList = ({ movies }) => {
    return (
        <div className="movie-list">
           <>
            {movies.map((movie) =>
            <div 
                className="moive-poster">
                <img src={movie.Poster} 
                alt="movie poster" 
                className="poster"
                />
            </div>
            )}
        </>
        </div>
    )
}

export default MovieList
