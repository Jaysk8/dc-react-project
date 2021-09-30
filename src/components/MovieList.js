const MovieList = ({ movies }) => {
    return (
        <div className="movie-list ms-5">
            {movies.map((movie) =>
            <div className="movie-poster d-flex align-items-center justify-content-center"> 
                <img src={movie.Poster}  alt="movie poster"  className="poster" />
                <div className="overlay d-flex text-center justify-content-center"></div>
            </div>
            )}
        </ div>
    )
}

export default MovieList
