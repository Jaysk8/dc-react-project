import { Link } from 'react-router-dom' 

const Navbar = () => {

    return (
        <div className="navbar sticky-top">
            <h1>MovieApp</h1>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/watchlist">Watchlist</Link>
                <Link to="/donate">Donate</Link>
            </div>
        </div>
    )
}

export default Navbar
