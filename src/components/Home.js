import { useState, useEffect } from 'react'
import MovieList from './MovieList'
import Search from './Search';

const Home = () => {
    // This state is going to set our movies to the data from the fetch
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');

    const movieFetch = (search) => {
        fetch(`http://www.omdbapi.com/?s=${search}&apikey=67172fa7`)
        .then(res => res.json())
        .then(data => {

            if(data.Search){
                setMovies(data.Search)
            }
        })
    }

    useEffect(() => {
        movieFetch(search)
    },[search])

    return (
        <div className="home">
            {/* <h2 className="mb-4">Movies</h2> */}

            <Search search={search} setSearch={setSearch}/>  
            <MovieList movies={movies} />
        </div>
    )
}

export default Home
